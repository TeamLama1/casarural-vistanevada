import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Vista Nevada Casa Rural - Alcalá la Real, Spain",
  description: "Experience the beauty and tranquility of rural Spain at Vista Nevada Casa Rural in Alcalá la Real. Comfortable accommodations with stunning views and modern amenities.",
  keywords: "casa rural, Alcalá la Real, Spain, rural accommodation, vacation rental, countryside",
  authors: [{ name: "Vista Nevada Casa Rural" }],
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
