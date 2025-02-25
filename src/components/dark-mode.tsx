"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      {/* Sun Icon */}
      <Sun className={`h-5 w-5 text-yellow-500 transition ${isDark ? "opacity-0" : "opacity-100"}`} />

      {/* Switch Button */}
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="relative"
      />

      {/* Moon Icon */}
      <Moon className={`h-5 w-5 text-gray-500 transition ${isDark ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}
