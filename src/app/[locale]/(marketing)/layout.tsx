import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "Workspace for Jotion",
  //array of light and dark icon in metadata
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  const messages = useMessages();
  const { locale } = params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="jotion-theme-2"
          >
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
