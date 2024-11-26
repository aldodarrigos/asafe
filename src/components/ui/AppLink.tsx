import Link, { LinkProps } from "next/link";

interface AppLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
}

export const AppLink = ({ 
    className,
    href,
    children,
    ...props 
  }: AppLinkProps) => {
    return (
      <Link 
        href={href}
        {...props}
      >
        <a className={`${className}`}>
        {children}
        </a>
      </Link>
    );
}