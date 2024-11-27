interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'disabled';
    size?: 'sm' | 'md' | 'lg';
  }
  
  export const AppButton = ({ 
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    children,
    ...props 
  }: ButtonProps) => {
    return (
      <button 
        className={`btn btn-${variant} mx-1  bg-gray-900 dark:bg-gray-800 dark:text-white btn-${size} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }