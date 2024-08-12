import { PropsWithChildren, createContext, useEffect, useState } from "react"
import { ThemeColors, darkColors, lightColors } from "../theme/themeComponents"
import { useColorScheme } from "react-native"



type ThemeColor = "light" | "dark"

interface ThemeColorsProps {

  currentTheme: ThemeColor,
  colors: ThemeColors,
  isDark: boolean,
  setTheme: (theme: ThemeColor) => void


}


export const ThemeContext = createContext({} as ThemeColorsProps)




export const ThemeProvider = ({ children }: PropsWithChildren) => {

  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light')

  const colorScheme = useColorScheme()


  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark')
    } else {
      setCurrentTheme('light')
    }
  }, [colorScheme])


  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme)


  }

  return <ThemeContext.Provider
    value={{
      currentTheme: currentTheme,
      isDark: currentTheme !== "light",
      colors: (currentTheme === "light" ? lightColors : darkColors),
      setTheme: setTheme

    }}
  >

    {children}
  </ThemeContext.Provider>

}