import { useTheme } from "@contexts/theme-context";
import { SunIcon, MoonIcon } from "@components/icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-surface hover:bg-background transition-colors"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5 text-on-surface" />
      ) : (
        <MoonIcon className="w-5 h-5 text-on-surface" />
      )}
    </button>
  );
}
