import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://pankaj-pooja-invitation.vercel.app"),
  title: "Pankaj & Pooja — Engagement Invitation",
  description: "Together with their families, delighted to announce their engagement. Saturday, 24 October 2026, 11:00 AM onwards at Radha Krishna Mandir, Chhatrapati Sambhaji Nagar.",
  openGraph: {
    title: "Pankaj & Pooja — Engagement Invitation",
    description: "You're invited! Saturday, 24 October 2026, 11:00 AM onwards at Radha Krishna Mandir, Chhatrapati Sambhaji Nagar.",
    url: "https://pankaj-pooja-invitation.vercel.app",
    siteName: "Pankaj & Pooja Engagement",
    images: [
      {
        url: "https://pankaj-pooja-invitation.vercel.app/invitation-assets/og-preview.png?v=2",
        width: 1731,
        height: 909,
        alt: "Pankaj & Pooja Engagement Invitation"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  // This specifically controls the WhatsApp/iMessage/Twitter-style card
  twitter: {
    card: "summary_large_image",
    title: "Pankaj & Pooja — Engagement Invitation",
    description: "You're invited! Saturday, 24 October 2026, 11:00 AM onwards.",
    images: ["https://pankaj-pooja-invitation.vercel.app/invitation-assets/og-preview.png?v=2"]
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
