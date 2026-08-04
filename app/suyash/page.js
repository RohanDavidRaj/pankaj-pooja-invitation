import InviteExperience from "../../components/InviteExperience";

export const metadata = {
  title: "Suyash & Komal — Engagement Invitation",
  description: "Together with their families, delighted to announce their engagement. Friday, 14 August 2026, 11:00 AM onwards at Chhappan Bhog, Chhatrapati Sambhaji Nagar.",
  openGraph: {
    title: "Suyash & Komal — Engagement Invitation",
    description: "You're invited! Friday, 14 August 2026, 11:00 AM onwards at Chhappan Bhog, Chhatrapati Sambhaji Nagar.",
    images: [{ url: "/invitation-assets/og-preview-suyash.png", width: 1200, height: 630, alt: "Suyash & Komal Engagement Invitation" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Suyash & Komal — Engagement Invitation",
    images: ["/invitation-assets/og-preview-suyash.png"]
  }
};

export default function SuyashSide() {
  return (
    <InviteExperience
      nameFirst="Suyash"
      nameSecond="Komal"
      phoneDisplay="9657184378 / 9209662450"
      phoneHref="tel:9657184378"
    />
  );
}