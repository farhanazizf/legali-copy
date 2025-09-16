import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Typography } from "./typography";

const NAV_ITEMS: { title: string; href: string; description: string }[] = [
  {
    title: "Built For",
    href: "#built-for",
    description: "Audience and users this product is designed for.",
  },
  {
    title: "Process",
    href: "#process",
    description: "Our end-to-end workflow and steps.",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
    description: "A quick overview of using the product.",
  },
  {
    title: "FAQ",
    href: "#faq",
    description: "Common questions and answers.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu
      viewport={false}
      className="absolute top-[38px] left-1/2 z-50 -translate-x-1/2 transform rounded-full bg-white px-[31px] py-2 shadow-lg"
    >
      <NavigationMenuList className="flex w-full items-center justify-center gap-12">
        <NavigationMenuItem>
          <NavigationMenuLink href="#">
            <Typography weight="medium" level="body">
              Legali
            </Typography>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem key={item.title} className={"relative"}>
            <NavigationMenuLink href={item.href} className="peer">
              <Typography weight="medium" level="body">
                {item.title}
              </Typography>
            </NavigationMenuLink>
            <span className="pointer-events-none absolute top-[31px] left-1/2 h-[6px] w-[6px] -translate-x-1/2  rounded-full bg-black opacity-0 transition-all duration-200 ease-out  peer-hover:opacity-100 peer-focus-visible:opacity-100" />
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <Button
            asChild
            className="rounded-full bg-[#263045] px-10 py-2.5 hover:brightness-90"
          >
            <Link href="#login">
              <Typography weight="medium" level="body" className="text-white">
                Login
              </Typography>
            </Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
