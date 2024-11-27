interface AppMenuSidebarProps {
    children: React.ReactNode;
    icon: React.ReactNode;
    href: string;
}

export const AppMenuSidebar = ({children, icon, href }: AppMenuSidebarProps) => {
    return <a href={href} className="group flex items-center px-4 py-3 text-base font-medium rounded-md text-white bg-gray-900 ">
                {icon}
                {children}
            </a>;
}