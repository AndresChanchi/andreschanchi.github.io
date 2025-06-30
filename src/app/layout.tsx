import { head } from "./head.ts";
import { Header } from "@components/header/Header";
import { ThemeProvider } from "@contexts/theme-context";
import { LocaleProvider } from "@contexts/locale-context";

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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>
          <LocaleProvider>
            <Header />
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
