import { Sun, Moon } from "lucide-react";

type ThemeSwitchProps = {
  isDarkMode: boolean;
  handleToggleTheme: () => void;
};

export default function ThemeSwitch({ isDarkMode, handleToggleTheme }: ThemeSwitchProps) {
  return (
    <button
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
      className="relative inline-flex h-8 w-14 p-1 items-center rounded-full outline outline-main-purple hover:outline-primary-foreground cursor-pointer bg-secondary-background">
      {/* This is the moving "knob" */}
      <div
        className={`inline-block h-6 w-6 transform rounded-full bg-background shadow-lg transition-transform duration-200 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}>
        {isDarkMode ? (
          <Moon className="h-full w-full p-1 text-primary-foreground" />
        ) : (
          <Sun className="h-full w-full p-1 text-yellow-500" />
        )}
      </div>
    </button>
  );
}
