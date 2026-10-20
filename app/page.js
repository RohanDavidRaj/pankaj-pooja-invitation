import InviteExperience from "../components/InviteExperience";

export const metadata = {
  title: "Pankaj & Puja — Engagement Invitation",
  description: "Together with their families, delighted to announce their engagement. Saturday, 24 October 2026, 12:00 PM onwards at Radha Krishna Mandir, Chhatrapati Sambhaji Nagar(Aurangabad)",
  openGraph: {
    title: "Pankaj & Puja — Engagement Invitation",
    description: "You're invited! Saturday, 24 October 2026, 12:00 PM onwards at Radha Krishna Mandir, Chhatrapati Sambhaji Nagar.",
    url: "https://pankaj-puja-invitation.vercel.app",
    images: [{ url: "https://pankaj-puja-invitation.vercel.app/invitation-assets/og-preview.jpg", width: 1200, height: 630, alt: "Pankaj & Puja Engagement Invitation" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj & Puja — Engagement Invitation",
    images: ["https://pankaj-puja-invitation.vercel.app/invitation-assets/og-preview.jpg"]
  }
};

export default function Home() {
  return (
    <InviteExperience
      nameFirst="Pankaj"
      nameSecond="Puja"
      phoneDisplay="9420424760 / 7666658717"
      phoneHref="tel:9420424760"
    />
  );
}
