"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="p-6 flex items-center justify-center ">
      <button className="flex items-center justify-center relative">
        {theme === "light" ? (
          <Sun
            size={14}
            onClick={() => setTheme("dark")}
            className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 "
          />
        ) : (
          <Moon
            size={14}
            onClick={() => setTheme("light")}
            className={`scale-0 rotate-90 transition-all dark:scale-100 font-light dark:rotate-0`}
          />
        )}
        {/*<span className="sr-only">Toggle theme</span>*/}
      </button>
      {/* <DropdownMenu>
        <DropdownMenuTrigger className="" asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
}
