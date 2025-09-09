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
    <div>
      <Button onClick={handleLogout} className="bg-red-500">
        Log out
      </Button>
    </div>
  );
}
