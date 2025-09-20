import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../../../components/ui/button";

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
        <Button className="w-fit gap-3 rounded-md px-20 text-lg" asChild>
          <Link href={"/welcome"} aria-label="Sign in with Google">
            <Image
              src={"/google.svg"}
              width={16}
              height={16}
              alt=""
              aria-hidden="true"
              sizes="16px"
            />
            Sign in with Google
          </Link>
        </Button>
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
