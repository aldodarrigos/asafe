"use client";

import { AppButton } from "../AppButton";
import { logout } from "@/actions";
import { AppThemeToggle } from "./AppToggleTheme";
import { CiMenuBurger } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";

interface AppHeaderProps {
    title: string;
    isSidebarOpen?: boolean;
    onToggleSidebar?: () => void;
    isMobile?: boolean;
}

export const AppHeader = ({ 
    title, 
    isSidebarOpen = false, 
    onToggleSidebar,
    isMobile = false 
}: AppHeaderProps) => {
    return (
        <header className="bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="max-w-8xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-700 mr-4 dark:text-white">Hi, User</span>
                    {isMobile ? (
                        <AppButton 
                            onClick={onToggleSidebar}
                            className=""
                        >
                           
                                {isSidebarOpen ? (
                                    <GiCancel size={20} />
                                ) : (
                                    <CiMenuBurger size={20} />
                                )}
                        </AppButton>
                    ) : (
                        <>
                        <AppThemeToggle />
                        <AppButton onClick={() => logout()}>
                            Logout
                        </AppButton>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
