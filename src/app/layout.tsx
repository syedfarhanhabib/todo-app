import type { Metadata } from 'next';
import "@/app/css/globals.css";
import { Providers } from "./providers";
import { spaceGrotesk } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
