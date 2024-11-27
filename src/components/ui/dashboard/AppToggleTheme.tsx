"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CiCloudMoon, CiCloudSun } from "react-icons/ci";
import { AppButton } from "@/components";

export function AppThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <AppButton
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <CiCloudSun size={20} className="my-1" />
            ) : (
                <CiCloudMoon size={20} className="my-1" />
            )}
        </AppButton>
    );
}