import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Web Teknologi Naufal Uia',
  description: 'Pembelajaran Web Teknologi',
  icons: {
    icon: '/logo/logouiafav.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-100`}
      >
        {children}
      </body>
    </html>
  );
}
