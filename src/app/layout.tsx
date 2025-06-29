import { portfolioMetadata } from "@/seo/portfolioMetadata";
export const metadata = portfolioMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
