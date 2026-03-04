import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "InfraReady — One-Click AWS Infrastructure for Solo Founders",
  description:
    "Your AI-built app, deployed to your own AWS in 20 minutes. No DevOps. No Kubernetes. Connect GitHub, link your AWS account, and InfraReady provisions VPC, RDS, ECS, S3, and CloudFront automatically.",
  keywords: [
    "AWS infrastructure",
    "one-click deployment",
    "vibe coders",
    "solo founders",
    "OpenTofu",
    "Terraform",
    "ECS",
    "VPC",
    "DevOps automation",
  ],
  authors: [{ name: "InfraReady" }],
  openGraph: {
    title: "InfraReady — One-Click AWS Infrastructure",
    description:
      "Your AI-built app, deployed to your own AWS in 20 minutes. No DevOps. No Kubernetes.",
    url: "https://infraready.io",
    siteName: "InfraReady",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfraReady — One-Click AWS Infrastructure",
    description:
      "Your AI-built app, deployed to your own AWS in 20 minutes. No DevOps. No Kubernetes.",
  },
  metadataBase: new URL("https://infraready.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-ir-navy text-ir-text">
        {children}
      </body>
    </html>
  );
}
