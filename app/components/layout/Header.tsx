"use client"; // اگر از Next.js App Router استفاده نمی‌کنید، این خط را بردارید (در بقیه‌ی فریم‌ورک‌ها بی‌اثر است)

import { useState } from "react";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { RingMark } from "../UI/RingMark";
import { signOut, useSession } from "next-auth/react";
import AuthStatus from "../module/AuthStatus";
import { usePathname } from "next/navigation";



const navLinks = [
  { href: "#gallery", label: "گالری محصولات" },
  { href: "#about", label: "درباره ما" },
];

export default function Header() {

  const pathname = usePathname()
  const isAuthRoute = pathname.startsWith("/auth/");
  if (isAuthRoute) return null
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">

        <AuthStatus />


        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>


        <a href="#hero" className="flex items-center gap-2.5">
          <RingMark className="h-8 w-8 text-accent" />
          <span className="text-lg font-semibold tracking-tight text-foreground [font-family:var(--font-display,inherit)]">
            روت هوم
          </span>
        </a>

      </div>


    </header>
  );
}
