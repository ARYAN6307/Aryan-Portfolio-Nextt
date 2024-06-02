'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook

import { cn } from "@/utils/cn";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/dropdown';
import Image from "next/image";
import { carrent } from "@/assets";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  const pathname = usePathname(); // Get the current pathname
  const isCertificatesPage = pathname === '/certificates';
  const isProjectsPage = pathname === '/projects';

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-full md:w-[400px] lg:w-[500px] bg-black lg:grid-cols-[.75fr_1fr] border-4 border-gray-600 rounded-md">
              <li className="row-span-3 border-4 border-gray-600 rounded-md w-full">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={isCertificatesPage ? "/my-projects" : "/certificates"}
                  >
                    <Image className="h-full w-full" src={isCertificatesPage ? "/projects.jpg" : "/cert.jpg"} alt="logo" width={100} height={100} />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {isCertificatesPage ? "My Projects" : "Certificates"}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {isCertificatesPage ? "Browse through my projects." : "Certifications I achieved during my college years."}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/hackathon" title="Won Hackathon">
                Tech Nova Live-Project Competition held at SRM(2023).
              </ListItem>
              <ListItem href="/google-cloud" title="Google Cloud">
                Completed various labs and received gift items from Google.
              </ListItem>
              <ListItem href="/my-coding-profiles" title="My Coding Profiles">
                Contains my profiles of competitive coding.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="border-4 border-gray-600 rounded-md w-full md:w-auto">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border-4 border-gray-600 w-full md:w-auto",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
