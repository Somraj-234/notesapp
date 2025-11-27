import { SignUpForm } from "@/components/forms/signup-form";
import { Logo } from "@/components/logo";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative flex flex-col min-h-svh w-full items-start justify-between py-6 px-5 md:py-10 overflow-hidden">
      <div className="w-full max-w-sm px-5 pb-10">
        <Logo />
        <p className="pl-3">Welcome to PalmPaper!</p>
      </div>
      <Image
        src="/palmtree-auth.png"
        alt="background"
        className="absolute right-40 rotate-[176deg] scale-y-[-1] ml-auto mr-[-11rem] mix-blend-multiply"
        width="722"
        height="722"
      />
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
