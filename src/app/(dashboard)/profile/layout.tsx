import type { Metadata } from "next";
import { profileMetadata } from "./metadata";

export const metadata: Metadata = profileMetadata;

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
