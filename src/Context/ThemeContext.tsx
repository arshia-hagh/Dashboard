import { createContext, ReactNode, useContext } from "react"
import { useLocalStorage } from "../Hooks/useLocalStorage"

interface IThemeProps {
    theme: boolean,
    handleLightMode: () => void,
    handleDarkMode: () => void
}
const ThemeContext = createContext({} as IThemeProps)
export const useThemeContext = () => {
    return useContext(ThemeContext)
}
export const ThemeContexProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useLocalStorage<boolean>("theme", false)
    const handleLightMode = () => {
        setTheme(false)

    }
    const handleDarkMode = () => {
        setTheme(true)

    }
    return (
        <ThemeContext.Provider value={{ theme, handleLightMode, handleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )

}