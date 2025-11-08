import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";
import StickyNote from "./mycomponents/sticky-note";
import Image from "next/image";

export default function Features() {
  return (
    <section className="py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl" style={{ fontFamily: "var(--font-styreneBold)" }}>
            All you need is these features and your ideas
          </h2>
          <p className="mt-4" style={{ fontFamily: "var(--font-styreneRegular)" }}>
            You don&apos;t need any fancy features to write down your thoughts,
            ideas, and plans.
          </p>
        </div>
        <div className="mx-auto mt-8  md:mt-16 flex flex-col gap-7 items-center justify-center">
          <div className="w-full flex items-stretch justify-between gap-7">
            <Bento className="w-2/3">
              <div className="main-box-1 w-full h-full relative border border-[#E3E2E2] overflow-hidden">
                <div className="inner-content-box w-full h-full flex flex-col items-center justify-center">
                  <div className="text-boxw-full flex flex-col h-full items-start justify-start gap-4 p-4">
                    <h1
                      className="text-4xl "
                      style={{ fontFamily: "var(--font-styreneBold)" }}
                    >
                      Pinned Notes
                    </h1>
                    <p
                      className="text-base tracking-tighter"
                      style={{ fontFamily: "var(--font-styreneRegular)" }}
                    >
                      Keep what matters always within reach. Pin important notes
                      or use sticky notes to never lose track of your thoughts.
                    </p>
                  </div>
                  <div className="sticky-notes w-full h-full flex relative px-8 pb-24">
                    <div className="absolute left-0 right-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-20" />
                    <div className="flex items-center justify-center w-full mb-4 rotate-[8.85deg] z-10">
                      <StickyNote
                        primaryColor={"#A888FF"}
                        secondaryColor={"#A081F6"}
                      />
                    </div>
                    <div className="absolute right-10 bottom-0 flex items-center justify-center mb-4 rotate-[-1.78deg] ">
                      <StickyNote
                        primaryColor={"#FF6F6F"}
                        secondaryColor={"#F76F6F"}
                        content="Keep what matters always within reach. Pin important notes or use sticky notes to never lose track of your thoughts."
                      />
                    </div>
                    <div className="absolute left-10 top-10 flex items-center justify-start mb-4 rotate-[-15.57deg]">
                      <StickyNote
                        className=""
                        primaryColor={"#BFFD7E"}
                        secondaryColor={"#BAF779"}
                        content="Problems are just opportunities that haven't presented themselves"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Bento>
            <Bento className="w-full">
              <div className="main-box-1 w-full h-full relative border border-[#E3E2E2] overflow-hidden">
                <div className="inner-content-box w-full flex flex-col items-center justify-center">
                  <div className="text-boxw-full h-full flex flex-col items-start justify-start gap-4 p-4">
                    <h1
                      className="text-4xl "
                      style={{ fontFamily: "var(--font-styreneBold)" }}
                    >
                      Rich Markdown Editor
                    </h1>
                    <p
                      className="text-base tracking-tighter"
                      style={{ fontFamily: "var(--font-styreneRegular)" }}
                    >
                      Keep what matters always within reach. Pin important notes
                      or use sticky notes to never lose track of your thoughts.
                    </p>
                  </div>
                  <div className="sticky-notes w-full h-full flex relative p-4">
                    <div className="absolute left-0 right-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-30" />
                    <Image
                      className="z-2 object-cover relative"
                      src="/editor.png"
                      alt="app screen"
                      width="2248"
                      height="1600"
                    />
                  </div>
                </div>
              </div>
            </Bento>
          </div>
          <div className="w-full">
            <Bento className="w-full">
              <div className="main-box-1 w-full h-full relative border border-[#E3E2E2] overflow-hidden">
                <div className="inner-content-box w-full flex items-center justify-between">
                  <div className="text-boxw-full h-full flex flex-col items-start justify-start gap-4 p-4">
                    <h1
                      className="text-4xl "
                      style={{ fontFamily: "var(--font-styreneBold)" }}
                    >
                      Notebooks &amp; Search
                    </h1>
                    <p
                      className="text-base tracking-tighter"
                      style={{ fontFamily: "var(--font-styreneRegular)" }}
                    >
                      Organize your notes into notebooks, and find anything in
                      seconds. Structure your thoughts without losing
                      flexibility.
                    </p>
                  </div>
                  <div className="sticky-notes w-full h-full flex justify-end relative p-4">
                    {/*<div className="absolute left-0 right-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-[#F7F7F7] to-transparent z-30" />*/}
                    <Image
                      className="z-2 object-cover relative"
                      src="/books-stack.svg"
                      alt="app screen"
                      width="120"
                      height="120"
                    />
                  </div>
                </div>
              </div>
            </Bento>
          </div>

          {/*<Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">You have full control</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                From design elements to functionality, you have complete control
                to create a unique and personalized experience.
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Powered By AI</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Elements to functionality, you have complete control to create a
                unique experience.
              </p>
            </CardContent>
          </Card>*/}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);

const Bento = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`relative ${className}`}>
    <span className="mycorner absolute -bottom-0 -left-0 w-1 h-1 border-b-1 border-l-1 border-black z-10"></span>
    <span className="mycorner absolute -top-0 -left-0 w-1 h-1 border-t-1 border-l-1 border-black z-10"></span>
    <span className="mycorner absolute -bottom-0 -right-0 w-1 h-1 border-b-1 border-r-1 border-black z-10"></span>
    <span className="mycorner absolute -top-0 -right-0 w-1 h-1 border-t-1 border-r-1 border-black z-10"></span>
    {children}
  </div>
);
