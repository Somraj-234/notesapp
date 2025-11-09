import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { HeroHeader } from "@/components/header";
import { AnimatedGroup } from "./ui/animated-group";
import { TextEffect } from "./ui/text-effect";
import StickyNote from "./mycomponents/sticky-note";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <Image
                src="/palm-branch.png"
                alt="background"
                className="absolute rotate-[64deg] inset-x-0 top-56 -z-50 lg:top-0 -left-8 opacity-[4%] blur-3xl"
                style={{
                  filter: "contrast(100%) brightness(0%) saturate(0%)",
                }}
                width="812"
                height="541"
              />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full"></div>
            <div className="mx-auto max-w-7xl px-6 ">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="mx-auto flex w-fit items-center gap-1 -mb-16"
                    style={{ fontFamily: "var(--font-styreneRegular)" }}
                  >
                    <span className="flex size-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="m-auto size-4"
                      >
                        <defs>
                          <linearGradient
                            id="github-gradient"
                            x1="0%"
                            y1="100%"
                            x2="0%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#72D23B" />
                            <stop offset="100%" stopColor="#B6EB8F" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                          fill="url(#github-gradient)"
                          stroke="#389E0E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 18c-4.51 2-5-2-7-2"
                          fill="url(#github-gradient)"
                          stroke="#389E0E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-foreground text-base">
                      Proudly Open Source
                    </span>
                  </Link>
                </AnimatedGroup>

                <div className="flex flex-col items-center justify-center -space-y-8 md:-space-y-8 lg:-space-y-16 xl:-space-y-16">
                  <div className="absolute rigth-0 top-96 w-full flex justify-end">
                    <StickyNote
                      rotate={-13.16}
                      primaryColor={"#FCB46D"}
                      secondaryColor={"#F5AD65"}
                    />
                  </div>
                  <div
                    className="absolute left-14 top-96 w-full h-96 flex items-end justify-start z-10 pointer-events-none"
                  >
                    <StickyNote
                      rotate={10.16}
                      primaryColor={"#FFF06A"}
                      secondaryColor={"#F8EA6A"}
                      content="Problems are just opportunities that haven't presented themselves"
                    />
                  </div>
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h1"
                    className="mt-8 mx-auto max-w-2xl text-6xl md:text-7xl lg:mt-16 xl:text-[100px] capitalize tracking-[-8px]"
                    style={{ fontFamily: "var(--font-styreneBoldItalic)" }}
                  >
                    Quiet space
                  </TextEffect>
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h1"
                    className="mt-8 mx-auto max-w-4xl text-6xl md:text-7xl lg:mt-16 xl:text-[100px] capitalize tracking-[-8px]"
                    style={{ fontFamily: "var(--font-styreneBoldItalic)" }}
                  >
                    for your thoughts.
                  </TextEffect>
                </div>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-4xl  text-xl"
                  style={{ fontFamily: "var(--font-styreneRegular)" }}
                >
                  PalmPaper brings the warmth of paper to the clarity of modern
                  notes. PalmPaper keeps your writing personal, private, and
                  beautifully simple.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    className="h-8 px-15 py-8 flex items-center justify-center rounded-none bg-gradient-to-t from-[#40A8FF] to-[#91D4FE] text-sm font-bold text-white cursor-pointer"
                    style={{
                      boxShadow:
                        "inset 0px 0px 15px 0px rgba(255,255,255,0.78)",
                      position: "relative",
                    }}
                  >
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 z-10">
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
                      className="z-20 flex items-center justify-center gap-2 "
                      href="/signup"
                      style={{ fontFamily: "var(--font-styreneBold)" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.0209 0L18.6777 5.65686L5.65691 18.6777L6.13522e-05 18.6777L6.06779e-05 13.0208L13.0209 0ZM13.0209 2.82843L11.5978 4.25148L14.4262 7.07991L15.8493 5.65686L13.0209 2.82843ZM13.012 8.49413L10.1836 5.6657L2.00006 13.8492L2.00006 16.6777L4.82849 16.6777L13.012 8.49413Z"
                          fill="white"
                        />
                      </svg>

                      <span className="text-xl tracking-[-1px]">
                        Write Your First Note
                      </span>
                    </Link>
                  </div>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="relative mx-auto max-w-6xl overflow-hidden p-4">
                  <Image
                    className="z-2 object-cover  relative"
                    src="/hero-dashboard.png"
                    alt="app screen"
                    width="2248"
                    height="1600"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        {/*<section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                href="/"
                className="block text-sm duration-150 hover:opacity-75"
              >
                <span> Meet Our Customers</span>

                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  alt="Column Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  alt="GitHub Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Nike Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  alt="Lemon Squeezy Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  alt="Laravel Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-7 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  alt="Lilly Logo"
                  height="28"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-6 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  alt="OpenAI Logo"
                  height="24"
                  width="auto"
                />
              </div>
            </div>
          </div>
        </section>*/}
      </main>
    </>
  );
}
