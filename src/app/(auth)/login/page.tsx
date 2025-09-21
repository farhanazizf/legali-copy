import type { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ButtonClient from "./button-client";

export const metadata: Metadata = {
  title: "Sign in to Legali",
  description:
    "Access your Legali account to continue building your case and connecting with attorneys.",
  keywords: ["login", "sign in", "account access", "legal platform"],
  openGraph: {
    title: "Sign in to Legali",
    description:
      "Access your Legali account to continue building your case and connecting with attorneys.",
  },
};

export default function LoginPage() {
  return (
    <main className={cn("grid grid-cols-2")} aria-label="Login page">
      <section className="flex flex-col justify-center gap-10 px-40">
        <Image
          src={"/logo.png"}
          width={80}
          height={50}
          alt="Legali Logo"
          priority
          sizes="80px"
        />
        <ButtonClient />
      </section>
      <Image
        src="/login.png"
        width={1920}
        height={1080}
        alt="Legal professionals working with AI technology"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </main>
  );
}
