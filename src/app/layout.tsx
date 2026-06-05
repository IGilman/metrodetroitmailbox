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
    "Troy mailbox installation",
    "Farmington Hills mailbox installation",
    "Novi mailbox installation",
    "Rochester Hills mailbox installation",
    "Sterling Heights mailbox installation",
    "Shelby Township mailbox installation",
    "Macomb Township mailbox installation",
    "Clinton Township mailbox installation",
    "Canton Township mailbox installation",
    "Livonia mailbox installation",
    "Grosse Pointe mailbox installation",
    "Oakland County mailbox service",
    "Macomb County mailbox installation",
    "Wayne County mailbox installation",
    "residential mailbox installation",
    "mailbox post installation",
  ],
  openGraph: {
    title: "Metro Detroit Mailbox | Mailbox Installation & Repair",
    description:
      "Professional mailbox installation and repair services across Metro Detroit. Call or text (734) 655-0305.",
    type: "website",
    locale: "en_US",
    siteName: "Metro Detroit Mailbox",
    url: "https://metrodetroitmailbox.com",
    images: [
      {
        url: "https://metrodetroitmailbox.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Metro Detroit Mailbox — Professional Installation & Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Detroit Mailbox | Mailbox Installation & Repair",
    description:
      "Professional mailbox installation and repair services across Metro Detroit. Call or text (734) 655-0305.",
    images: ["https://metrodetroitmailbox.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://metrodetroitmailbox.com",
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
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
              "@type": "HomeAndConstructionBusiness",
              name: "Metro Detroit Mailbox",
              description:
                "Professional mailbox installation and repair services in Metro Detroit.",
              url: "https://metrodetroitmailbox.com",
              image: "https://metrodetroitmailbox.com/og-image.png",
              telephone: "+1-734-655-0305",
              email: "metrodetroitmailbox@gmail.com",
              priceRange: "$$",
              areaServed: [
                "Troy, MI",
                "Farmington Hills, MI",
                "Novi, MI",
                "Rochester Hills, MI",
                "Sterling Heights, MI",
                "Shelby Township, MI",
                "Macomb Township, MI",
                "Clinton Township, MI",
                "Canton Township, MI",
                "Livonia, MI",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do I need to buy the mailbox first?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not necessarily. If you already have a mailbox you want installed, we're happy to install it. If you don't have one yet, we can help you find an option that works best for your home and neighborhood, then install it for you.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does mailbox installation cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pricing varies by job — it depends on your location, supplies needed, and the time required to do the work right. Most jobs range from $200–$500, though some are more and some are less. Our goal is to give you the best experience and high quality service, regardless of the price or job size.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you call 811 before digging?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, always. We call 811 and schedule them to mark underground utilities a few days before your installation date — at no extra charge to you.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does mailbox installation take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most installations take 3–4 hours from start to finish.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you haul away my old mailbox?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We remove your old mailbox, haul away all debris, and leave your yard clean when the job is done.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas do you serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We serve homeowners throughout Oakland, Wayne, and Macomb counties — including Troy, Farmington Hills, Novi, Rochester Hills, Sterling Heights, Shelby Township, Macomb Township, Clinton Township, Canton Township, Livonia, Grosse Pointe, and surrounding Metro Detroit communities.",
                  },
                },
              ],
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
