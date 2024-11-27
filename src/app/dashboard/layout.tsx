"use client";

import { AppHeader, AppSidebar } from "@/components";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    return <>
        <div className="min-h-screen flex flex-col">
            <AppHeader title="ASAFE" isSidebarOpen={isOpen} onToggleSidebar={() => setIsOpen(!isOpen)} isMobile={isMobile} />
            <div className="flex flex-1 ">
                <AppSidebar isOpen={isOpen} isMobile={isMobile} />
                {children}
            </div>
        </div>
    </>
}
