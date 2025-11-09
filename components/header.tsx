"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-50 w-full h-16"
      >
        <div
          className={cn(
            "mx-auto w-full transition-all duration-300 border-b border-[#E3E2E2]",
            isScrolled && "bg-background/50 w-full backdrop-blur-lg",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 ">
            <div className="flex w-full justify-between lg:w-auto p-1.5">
              <Link href="/" aria-label="home" className="flex items-center">
                <Logo />
              </Link>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex w-full flex-col h-auto justify-center sm:flex-row overflow-hidden">
                <div className="flex items-center justify-center p-1.5 border-l border-[#E3E2E2]">
                  <ModeToggle />
                </div>
                <div className="flex items-center justify-center p-1.5 border-l border-[#E3E2E2]">
                  <div
                    className="h-8 px-15 py-8 flex items-center justify-center rounded-none bg-gradient-to-t from-[#72D23B] to-[#B6EB8F] text-sm font-bold text-[#252525]"
                    style={{
                      boxShadow:
                        "inset 0px 0px 18px 0px rgba(255,255,255,0.78)",
                      position: "relative",
                    }}
                  >
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-10">
                      <filter id="grain">
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.9"
                          numOctaves="4"
                        />
                        <feColorMatrix type="saturate" values="0" />
                      </filter>
                      <rect
                        width="100%"
                        height="100%"
                        fill="white"
                        filter="url(#grain)"
                      />
                    </svg>

                    <Link
                      className="z-20 text-lg tracking-[-1px]"
                      href="/login"
                      style={{ fontFamily: "var(--font-styreneBold)" }}
                    >
                      <span>Log In</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
