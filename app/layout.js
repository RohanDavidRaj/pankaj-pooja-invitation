import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://pankaj-puja-invitation.vercel.app"),
  title: "Pankaj & Puja — Engagement Invitation",
  description: "Together with their families, delighted to announce their engagement. Friday, 24 October 2026, 11:00 AM onwards at Radha Krishna Mandir, Chhatrapati Sambhaji Nagar(Aurangabad).",
  openGraph: {
    title: "Pankaj & Puja — Engagement Invitation",
    description: "You're invited! Friday, 24 October 2026, 11:00 AM onwards at Radha Krishna Mandir, Chhatrapati Sambhaji Nagar(Aurangabad).",
    url: "https://pankaj-puja-invitation.vercel.app",
    siteName: "Pankaj & Puja Engagement",
    images: [
      {
        url: "/invitation-assets/og-preview.png", // your 1200x630 image
        width: 1200,
        height: 630,
        alt: "Pankaj & Puja Engagement Invitation"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  // This specifically controls the WhatsApp/iMessage/Twitter-style card
  twitter: {
    card: "summary_large_image",
    title: "Pankaj & Puja — Engagement Invitation",
    description: "You're invited! Saturday, 24 October 2026, 11:00 AM onwards.",
    images: ["/invitation-assets/og-preview.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}