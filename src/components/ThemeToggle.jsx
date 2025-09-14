import { Moon, Sun } from "lucide-react"
import { useState } from "react"

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)
    return <button>{isDarkMode ? <Sun /> : <Moon />}</button>
}

export default ThemeToggle
