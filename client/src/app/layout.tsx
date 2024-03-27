import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/react";
import Layout from "@/components/layout";
import { fontSans } from "@/lib/styles/fonts";
import { cn } from "@/lib/utils";

import "@/lib/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const APP_NAME = "Job Description Parser";
const APP_DESCRIPTION = "Simplify your job search in seconds.";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,

  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },

  openGraph: {
    url: "https://job-description-parser.vercel.app/",
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },

  twitter: {
    creator: "@lakshyaag",
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            <div className="flex-2">{children}</div>
          </Layout>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
