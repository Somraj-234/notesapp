import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32 flex flex-col items-center justify-center relative w-full">
      <div className="w-full bg-red-500 flex items-center z-30">
        <Image
          src="/palmtree.png"
          alt="background"
          className="rotate-[8deg] absolute -top-8 -left-36"
          width="462"
          height="744"
        />
      </div>
      <div className="w-full absolute flex items-center justify-end top-40 overflow-hidden">
        <Image
          src="/palmtree.png"
          alt="background"
          className="rotate-[176deg] scale-y-[-1] ml-auto mr-[-11rem]"
          width="462"
          height="744"
        />
      </div>
      <div className="mx-auto max-w-5xl px-6 ">
        <div className="text-center">
          <h2
            className="w-full text-4xl lg:text-4xl italic tracking-tighter"
            style={{ fontFamily: "var(--font-styreneRegular)" }}
          >
            “Your thoughts deserve a space that feels <br /> personal, private,
            and timeless.”
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div
              className="h-8 px-15 py-8 flex items-center justify-center rounded-none bg-gradient-to-t from-[#237803] to-[#53C41A] text-sm font-bold text-white"
              style={{
                boxShadow: "inset 0px 0px 15px 0px rgba(255,255,255,0.78)",
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
                className="z-20 flex items-center justify-center gap-2"
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
                  Write Your Notes on PalmPaper
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
