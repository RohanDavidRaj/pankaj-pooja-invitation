// import { Manrope, Playfair_Display } from "next/font/google";
// import "./globals.css";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair"
// });

// const manrope = Manrope({
//   subsets: ["latin"],
//   variable: "--font-manrope"
// });

// export const metadata = {
//   title: "Komal & Suyash | Engagement Invitation",
//   description: "You are warmly invited to celebrate the engagement of Komal and Suyash."
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${playfair.variable} ${manrope.variable}`}>{children}</body>
//     </html>
//   );
// }
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://your-domain-or-vercel-url.vercel.app"),
  title: "Komal & Suyash — Engagement Invitation",
  description: "Together with their families, delighted to announce their engagement. Friday, 14 August 2026, 11:00 AM onwards at Chhappan Bhog, Chhatrapati Sambhaji Nagar.",
  openGraph: {
    title: "Komal & Suyash — Engagement Invitation",
    description: "You're invited! Friday, 14 August 2026, 11:00 AM onwards at Chhappan Bhog, Chhatrapati Sambhaji Nagar.",
    url: "https://your-domain-or-vercel-url.vercel.app",
    siteName: "Komal & Suyash Engagement",
    images: [
      {
        url: "/invitation-assets/og-preview.png", // your 1200x630 image
        width: 1200,
        height: 630,
        alt: "Komal & Suyash Engagement Invitation"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  // This specifically controls the WhatsApp/iMessage/Twitter-style card
  twitter: {
    card: "summary_large_image",
    title: "Komal & Suyash — Engagement Invitation",
    description: "You're invited! Friday, 14 August 2026, 11:00 AM onwards.",
    images: ["/invitation-assets/og-preview.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}