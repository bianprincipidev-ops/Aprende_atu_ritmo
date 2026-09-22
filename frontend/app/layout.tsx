import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aprende a tu ritmo 🚀",
  description: "Plataforma de cursos digitales y formación profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}