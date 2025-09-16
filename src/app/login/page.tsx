"use client";

import { Chrome } from "lucide-react";
import { Typography } from "@/components/elements/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  function handleGoogle() {
    window.location.href = "/api/auth/google";
  }

  return (
    <main
      className={cn(
        "flex min-h-[calc(100dvh-0px)] items-center justify-center p-6"
      )}
    >
      <div className="w-full max-w-sm rounded-2xl border bg-card p-6 text-card-foreground shadow">
        <div className="mb-6 text-center">
          <Typography as="h1" level="h3" weight="semibold">
            Welcome back
          </Typography>
          <Typography
            as="p"
            level="label"
            align="center"
            className="text-muted-foreground"
          >
            Sign in with your Google account
          </Typography>
        </div>
        <Button
          onClick={handleGoogle}
          className="flex w-full items-center justify-center gap-2 rounded-[100px] bg-[#263045] py-3 text-white hover:bg-[#263045]/90"
        >
          <Chrome className="h-5 w-5" aria-hidden="true" />
          <Typography
            as="span"
            level="body"
            weight="medium"
            transform="normal"
            className="text-white"
          >
            Continue with Google
          </Typography>
        </Button>
      </div>
    </main>
  );
}
