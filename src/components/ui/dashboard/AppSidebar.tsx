"use client";

import { usePathname } from "next/navigation";
import { AppMenuSidebar } from "./AppMenuSidebar";
import { CiCamera, CiHome } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";

interface AppSidebarProps {
    isOpen: boolean;
    isMobile: boolean;
}

export function AppSidebar({ isOpen, isMobile }: AppSidebarProps) {
    // const pathname = usePathname();

    return (
        <aside className={`${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''} 
                           z-50 w-64 bg-gray-800 dark:bg-gray transition-transform duration-300 ease-in-out
                          ${isMobile ? 'fixed top-0 left-0 h-screen md:translate-x-0' : ''}`}>
            <nav className="mt-10 px-4 gap-2 flex flex-col">
                <AppMenuSidebar 
                 icon={<CiHome size={20} className="text-white  mr-5"/>}
                 href="/dashboard">
                    Dashboard
                </AppMenuSidebar>
                <AppMenuSidebar 
                 icon={<CiCamera size={20} className="text-white mr-5"/>}
                 href="/dashboard/photos">
                    Photos
                </AppMenuSidebar>
                <AppMenuSidebar 
                 icon={<GrUserWorker size={20} className="text-white mr-5"/>}
                 href="/#">
                    Providers
                </AppMenuSidebar>
            </nav>
        </aside>
    );
}