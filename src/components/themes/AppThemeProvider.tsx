"use client"
import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark' | 'custom';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function AppThemeProvider({ children, className }: { children: React.ReactNode, className?: string }) {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html data-theme={theme} className={`${theme === 'dark' ? 'dark' : ''}`} >
        <body className={`${className}`}>
        {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  return context;
} 