# iQLabs.id - OmniLearn Academy

A premium, modern STEM education and Kedinasan preparation platform. Built with Next.js 15, Tailwind CSS, Recharts, and Prisma.

## 🚀 Features

-   **Premium Minimalist UI**: Glassmorphism, smooth animations, Apple-style / Tesla-inspired dark UI.
-   **Advanced Admin Dashboard**: Rich Recharts integrations, AI Insight panel placeholders, and responsive grids.
-   **Student Dashboard**: Engaging visual cards, IQ tracking, and course progress indicators.
-   **Database with ORM**: Setup with Prisma on SQLite for straightforward local deployment.

## ⚙️ Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript
-   **Database**: SQLite via Prisma ORM
-   **Auth**: NextAuth.js (Credentials placeholder)
-   **Styling**: Tailwind CSS v4, shadcn/ui
-   **Charts**: Recharts
-   **Icons**: Lucide React

## 📦 Setup & Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Initialize Database**
    ```bash
    npx prisma db push
    ```

3.  **Seed the Database (Optional)**
    Start the local development server, then visit `/api/seed` in your browser to generate mock users and courses.

4.  **Run Locally**
    ```bash
    npm run dev
    ```

## 🌐 Deploy to Vercel

1.  **Push your code to GitHub.**
2.  **Import your repository into Vercel.**
3.  **Configure Database for Production**:
    -   Vercel serverless functions do not support a writable local SQLite database.
    -   Create a Postgres database (e.g., using Vercel Postgres, Supabase, or Neon).
    -   Update `prisma/schema.prisma` to use `provider = "postgresql"`.
    -   Add `DATABASE_URL` to your Vercel Environment Variables.
4.  **Vercel Build Command**: `npx prisma generate && next build`
5.  **Set NextAuth Secret**: Add `NEXTAUTH_SECRET` to your environment variables.

## 📂 Project Structure Highlights

-   `/app/admin`: Advanced dashboard tailored for system administrators.
-   `/app/dashboard`: User-focused learning management interface.
-   `/app/login`: Custom-built login interface.
-   `/prisma`: Database schema and ORM setup.
-   `/components`: Reusable UI elements powered by shadcn/ui.
