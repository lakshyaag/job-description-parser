import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/react";
import Layout from "@/components/layout";
import { fontSans } from "@/lib/styles/fonts";
import { cn } from "@/lib/utils";

import "@/lib/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const APP_NAME = "JD Interpreter";
const APP_DESCRIPTION =
  "Supercharge your job search with JD Interpreter. Get a detailed breakdown of job descriptions, discover essential keywords to include in your resume, and receive tailored suggestions to make your application stand out. Take control of your job search today!";
const APP_URL = "https://job-description-parser.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
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
    url: APP_URL,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    type: "website",
    locale: "en_US",
    images: `og-image.png`,
  },

  twitter: {
    creator: "@lakshyaag",
    card: "summary_large_image",
    images: `/og-image.png`,
  },

  keywords: [
    "Job Description",
    "Resume Optimization",
    "Job Search",
    "AI Tools",
  ],
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
    <ClerkProvider>
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
    </ClerkProvider>
  );
};

export default RootLayout;
