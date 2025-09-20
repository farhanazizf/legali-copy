"use client";

import { User } from "lucide-react";
import { usePathname } from "next/navigation";
import { Span } from "./typography";

const PAGE_CONFIGS: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/profile": "Your Profile",
  "/attorneys": "Attorneys",
  "/documents": "Legal Documents",
  "/appointments": "Appointments",
  "/messages": "Messages",
};

const DEFAULT_CONFIG: string = "Dashboard";

export default function DynamicHeader() {
  const pathname = usePathname();
  const title = PAGE_CONFIGS[pathname] || DEFAULT_CONFIG;

  return (
    <div
      className="flex justify-between gap-4 rounded-lg border border-white-400 p-6"
      style={{
        background: "linear-gradient(90deg, #EDFAFF 0.01%, #FFF 30.33%)",
      }}
    >
      <div className="flex items-center gap-4">
        <Span level={"h5"} weight={"semibold"} className="text-brand-navy">
          {title}
        </Span>
      </div>

      <div className="flex items-center gap-4 border-l border-l-white-400 pl-4">
        <div className="flex aspect-square h-auto w-10 items-center justify-center rounded-full bg-slate-gray-300">
          <User className="text-gray-50" />
        </div>
        <div className="flex flex-col">
          <Span level={"body"} weight={"semibold"}>
            John Doe
          </Span>
          <Span level={"label"} weight={"normal"} className="text-brand-slate">
            john.doe@example.com
          </Span>
        </div>
      </div>
    </div>
  );
}
