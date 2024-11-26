interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
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
        className={`btn btn-${variant} btn-${size} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }