import { head } from "./head.ts";
import { ThemeInitializer } from "@components/theme/ThemeInitializer.tsx";
export const metadata = head;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/output.css" />
      </head>
      <body>
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
