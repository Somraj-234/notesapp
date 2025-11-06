"use client";

import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function LogOut() {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div className="p-6 border-l border-[#E3E2E2] flex items-center justify-center">
      <Button onClick={handleLogout} className="">
        Log out
      </Button>
    </div>
  );
}
