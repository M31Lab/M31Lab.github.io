import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://m31lab.github.io'),
  title: {
    default: "M31Lab – AI Automation & Cybersecurity by Tonmoy Infrastructure",
    template: "%s | M31Lab"
  },
  description: "M31Lab, a division of Tonmoy Infrastructure & Vision (TIVision), builds cutting-edge AI agents and cybersecurity frameworks. Founded in Bangladesh, we're pioneering the future of autonomous systems and digital security.",
  keywords: [
    "M31",
    "M31 Lab",
    "M31 AI",
    "Tonmoy Infrastructure",
    "Tonmoy Infrastructure & Vision",
    "TIVision",
    "AI automation",
    "cybersecurity framework",
    "autonomous agents",
    "Bangladesh AI company",
    "AI development Bangladesh",
    "Eshan Roy",
    "artificial intelligence lab",
    "security automation",
    "AI research lab",
    "technology infrastructure"
  ],
  authors: [
    { name: "Eshan Roy", url: "https://github.com/eshanized" }
  ],
  creator: "Tonmoy Infrastructure & Vision",
  publisher: "M31Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://m31lab.github.io',
  },
  openGraph: {
    type: "website",
    title: "M31Lab – Leading AI Innovation at Tonmoy Infrastructure",
    description: "Discover M31Lab's cutting-edge AI automation and cybersecurity solutions, powered by Tonmoy Infrastructure & Vision in Bangladesh.",
    url: "https://m31lab.github.io",
    siteName: "M31Lab",
    locale: "en_US",
    images: [{
      url: "https://github.com/M31Lab.png",
      width: 1200,
      height: 630,
      alt: "M31Lab - AI Automation & Cybersecurity"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M31Lab – AI Innovation by Tonmoy Infrastructure",
    description: "Explore M31Lab's autonomous AI agents and cybersecurity frameworks, a Tonmoy Infrastructure & Vision initiative.",
    images: ["https://github.com/M31Lab.png"],
    creator: "@eshanized",
    site: "@m31lab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "M31Lab",
              "alternateName": ["M31", "M31 AI", "Tonmoy Infrastructure AI Lab"],
              "url": "https://m31lab.github.io",
              "logo": "https://github.com/M31Lab.png",
              "sameAs": [
                "https://github.com/M31Lab",
                "https://twitter.com/eshanized",
                "https://linkedin.com/company/m31lab"
              ],
              "parentOrganization": {
                "@type": "Organization",
                "name": "Tonmoy Infrastructure & Vision",
                "alternateName": "TIVision",
                "location": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "Bangladesh"
                  }
                }
              },
              "description": "M31Lab builds autonomous AI agents and cybersecurity frameworks, operating as the AI research division of Tonmoy Infrastructure & Vision in Bangladesh.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Eshan Roy"
              }
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "selection:bg-primary/20 selection:text-primary"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative flex min-h-screen flex-col">
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}