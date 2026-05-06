import type {Metadata} from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'iQLabs.id | OmniLearn Academy',
  description: 'Premium STEM education and Kedinasan preparation platform with advanced admin dashboard.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("dark", inter.variable, spaceGrotesk.variable)}>
      <body suppressHydrationWarning className="bg-background text-foreground min-h-screen antialiased">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
