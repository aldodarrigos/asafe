"use client";

import { IoMdExit } from "react-icons/io";
// import { usePathname } from "next/navigation";
import { AppMenuSidebar } from "./AppMenuSidebar";
import { CiCamera, CiHome } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { logout } from "@/actions";
import { AppThemeToggle } from "./AppToggleTheme";
// import { IoIosPeople } from "react-icons/io";
// import { GrUserWorker } from "react-icons/gr";

interface AppSidebarProps {
    isOpen: boolean;
    isMobile: boolean;
}

export function AppSidebar({ isOpen, isMobile }: AppSidebarProps) {
    // const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout();
            router.push('/auth/login');
        } catch (error) {
            console.error('Error during logout:', error);
            router.push('/auth/login');
        }
    };

    return (
        <aside className={`${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''} 
                           z-50 w-64 bg-gray-800 dark:bg-gray transition-transform duration-300 ease-in-out
                          ${isMobile ? 'fixed top-0 left-0 h-screen  md:translate-x-0' : ''}`}>
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
                {
                    isMobile && (
                        <>
                        <AppMenuSidebar 
                            icon={<IoMdExit  size={20} className="text-white mr-5"/>}
                            href="#"
                            onClick={handleLogout}>
                            Logout
                        </AppMenuSidebar>
                        <AppThemeToggle />
                        </>
                    )

                }
                

            </nav>
        </aside>
    );
}