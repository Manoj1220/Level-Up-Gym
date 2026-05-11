import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Level Up Gym - Elite Fitness & Training",
  description: "Level Up Your Body. Transform your physique, strength, and mindset with elite training. Join the best fitness center for strength training, personal training, and workout programs.",
  keywords: ["Gym", "Fitness", "Workout", "Strength Training", "Personal Training", "Fitness Center"],
  openGraph: {
    title: "Level Up Gym - Elite Fitness & Training",
    description: "Transform your physique, strength, and mindset with elite training. Step into the arena.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Barlow+Condensed:wght@400;600;700&amp;family=Inter:wght@400;500&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-surface-tint selection:text-surface">
        {children}
      </body>
    </html>
  );
}
