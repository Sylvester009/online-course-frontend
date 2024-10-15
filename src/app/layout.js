import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> | 
          <Link href="/courses">Courses</Link> | 
          <Link href="/register">Register</Link> | 
          <Link href="/login">Login</Link> | 
          <Link href="/dashboard">Dashboard</Link> | 
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
