import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metro Detroit Mailbox | Professional Mailbox Installation & Repair",
  description:
    "Professional mailbox installation and repair services in Metro Detroit. Serving Royal Oak, Birmingham, Troy, Bloomfield Hills, and surrounding areas. Call or text (734) 655-0305.",
  keywords: [
    "mailbox installation",
    "mailbox repair",
    "Metro Detroit mailbox",
    "mailbox installer near me",
    "Royal Oak mailbox installation",
    "Birmingham mailbox repair",
    "Troy mailbox installation",
    "Bloomfield Hills mailbox",
    "Oakland County mailbox service",
    "Wayne County mailbox installation",
    "Macomb County mailbox repair",
    "residential mailbox installation",
    "new mailbox installation",
    "mailbox post installation",
  ],
  openGraph: {
    title: "Metro Detroit Mailbox | Mailbox Installation & Repair",
    description:
      "Professional mailbox installation and repair services across Metro Detroit. Call or text (734) 655-0305.",
    type: "website",
    locale: "en_US",
    siteName: "Metro Detroit Mailbox",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://metrodetroitmailboxinstall.com",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Metro Detroit Mailbox",
              description:
                "Professional mailbox installation and repair services in Metro Detroit.",
              telephone: "+1-734-655-0305",
              email: "metrodetroitmailbox@gmail.com",
              areaServed: [
                "Royal Oak, MI",
                "Birmingham, MI",
                "Troy, MI",
                "Bloomfield Hills, MI",
                "Rochester, MI",
                "Novi, MI",
                "Farmington Hills, MI",
                "West Bloomfield, MI",
                "Grosse Pointe, MI",
              ],
              serviceType: [
                "Mailbox Installation",
                "Mailbox Repair",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Metro Detroit",
                addressRegion: "MI",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
