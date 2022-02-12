import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export const themes = [
    {
        name: 'dark',
        colors: {
            background: 'black',
            text: 'white',
            second: 'cyan'
        }
    },
    {
        name: 'light',
        colors: {
            background: 'white',
            text: 'black',
            second: 'red'
        }

    }
]

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(themes[1]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export function useTheme() {
    const context = useContext(ThemeContext);
    const { theme, setTheme } = context;
    return { theme, setTheme };

}