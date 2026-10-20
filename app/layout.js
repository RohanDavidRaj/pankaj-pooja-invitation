import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://pankaj-puja-invitation.vercel.app"),
  title: "Pankaj & Puja — Engagement Invitation",
  description: "Together with their families, delighted to announce their engagement. Saturday, 24 October 2026, 12:00 PM onwards at Radha Krishna Mandir, Chhatrapati Sambhaji Nagar(Aurangabad).",
  openGraph: {
    title: "Pankaj & Puja — Engagement Invitation",
    description: "You're invited! Saturday, 24 October 2026, 12:00 PM onwards at Radha Krishna Mandir, Chhatrapati Sambhaji Nagar(Aurangabad).",
    url: "https://pankaj-puja-invitation.vercel.app",
    siteName: "Pankaj & Puja Engagement",
    images: [
      {
        url: "https://pankaj-puja-invitation.vercel.app/invitation-assets/og-preview.jpg",
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
    description: "You're invited! Saturday, 24 October 2026, 12:00 PM onwards.",
    images: ["https://pankaj-puja-invitation.vercel.app/invitation-assets/og-preview.jpg"]
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