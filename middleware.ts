import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter (per instance)
// Untuk production: ganti dengan Upstash Redis
const loginAttempts = new Map<string, { count: number; resetAt: number }>()

const RATE_LIMIT = 5        // max attempts
const WINDOW_MS = 15 * 60 * 1000  // 15 menit

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
  return ip
}

export function middleware(req: NextRequest) {
  // Rate limit hanya untuk login endpoint
  if (req.nextUrl.pathname === '/api/auth/callback/credentials' && req.method === 'POST') {
    const key = getRateLimitKey(req)
    const now = Date.now()
    const record = loginAttempts.get(key)

    if (record) {
      if (now < record.resetAt) {
        if (record.count >= RATE_LIMIT) {
          return NextResponse.json(
            { error: 'Too many login attempts. Coba lagi dalam 15 menit.' },
            { status: 429 }
          )
        }
        record.count++
      } else {
        // Window expired, reset
        loginAttempts.set(key, { count: 1, resetAt: now + WINDOW_MS })
      }
    } else {
      loginAttempts.set(key, { count: 1, resetAt: now + WINDOW_MS })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/auth/callback/credentials'],
}