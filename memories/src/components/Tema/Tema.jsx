import React from 'react'
import { useTheme, themes } from '../Context/Theme'

export default function Tema() {

    const { theme, setTheme } = useTheme();

    return (
        <div>
            {/* ESTILO DA DIV ABAIXO */}
            <div style={{
                background: theme.colors.background,
                color: theme.colors.text
            }}>
                
                <h1>TEMAS</h1>
                <h2 style ={{
                    color: theme.colors.second
                }}>TESTE</h2>
                
            </div>
            <hr />
            <button onClick={() => setTheme(theme.name == 'dark' ? themes[1] : themes[0])}>Change theme!</button>
        </div>
    )
}

