import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'
import bcrypt from 'bcryptjs'

export async function GET() {
  // Only allow ADMIN to trigger seed
  const session = await getSession()
  if (!session || (session.user as any).role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const userCount = await prisma.user.count()
    if (userCount > 0) {
      return NextResponse.json({ message: 'Database already seeded' })
    }

    const adminHash = await bcrypt.hash('Admin@iqlabs2024!', 12)
    const userHash = await bcrypt.hash('User@iqlabs2024!', 12)

    const admin = await prisma.user.create({
      data: {
        name: 'OmniLearn Admin',
        email: 'admin@iqlabs.id',
        passwordHash: adminHash,
        role: 'ADMIN',
        iqScore: 145,
      },
    })

    const student1 = await prisma.user.create({
      data: {
        name: 'Budi Santoso',
        email: 'budi@example.com',
        passwordHash: userHash,
        role: 'USER',
        iqScore: 110,
      },
    })

    const student2 = await prisma.user.create({
      data: {
        name: 'Siti Aminah',
        email: 'siti@example.com',
        passwordHash: userHash,
        role: 'USER',
        iqScore: 125,
      },
    })

    const student3 = await prisma.user.create({
      data: {
        name: 'Andi Pratama',
        email: 'andi@example.com',
        passwordHash: userHash,
        role: 'USER',
        iqScore: 105,
      },
    })

    const stemCourse = await prisma.course.create({
      data: {
        title: 'Mastering Advanced Physics',
        description: 'Deep dive into quantum mechanics and relativity for STEM students.',
        category: 'STEM',
        price: 299000,
        status: 'PUBLISHED',
      },
    })

    const kedinasanCourse = await prisma.course.create({
      data: {
        title: 'Persiapan STAN & IPDN 2024',
        description: 'Modul lengkap SKD, TWK, TIU, TKP untuk seleksi sekolah kedinasan.',
        category: 'Kedinasan',
        price: 499000,
        status: 'PUBLISHED',
      },
    })

    const iqCourse = await prisma.course.create({
      data: {
        title: 'Cognitive Enhancement & IQ Training',
        description: 'Scientific methods to improve logic, memory, and spatial reasoning.',
        category: 'IQ Development',
        price: 199000,
        status: 'PUBLISHED',
      },
    })

    await prisma.enrollment.createMany({
      data: [
        { userId: student1.id, courseId: kedinasanCourse.id, progress: 45 },
        { userId: student1.id, courseId: iqCourse.id, progress: 80 },
        { userId: student2.id, courseId: stemCourse.id, progress: 10 },
        { userId: student3.id, courseId: kedinasanCourse.id, progress: 100 },
      ],
    })

    await prisma.payment.createMany({
      data: [
        { userId: student1.id, amount: 499000, status: 'SUCCESS' },
        { userId: student1.id, amount: 199000, status: 'SUCCESS' },
        { userId: student2.id, amount: 299000, status: 'SUCCESS' },
        { userId: student3.id, amount: 499000, status: 'SUCCESS' },
      ],
    })

    return NextResponse.json({ message: 'Seeding successful' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Seeding failed' }, { status: 500 })
  }
}