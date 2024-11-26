import { useTheme } from '../themes/ThemeProvider';

export function AppThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <select 
      value={theme}
      onChange={(e) => setTheme(e.target.value as any)}
      className="theme-selector"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="custom">Custom</option>
    </select>
  );
}