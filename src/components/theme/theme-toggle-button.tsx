"use client"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import {Moon, Sun} from "lucide-react";

export function ThemeToggleButton({...props}) {
    const {theme, setTheme} = useTheme();

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return <Button variant={"outline"} size={"icon"} className={props.className ?? ''} onClick={toggleTheme}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
}
