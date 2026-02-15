import { HiSun } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeProvider";
import Button from "./Button";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button onClick={toggleDarkMode} variant="outline" className="border-none">
      {isDarkMode ? (
        <HiSun className="size-7" />
      ) : (
        <HiMoon className="size-7" />
      )}
    </Button>
  );
}

export default DarkModeToggle;
