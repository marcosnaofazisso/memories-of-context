import React, { useContext, useState, createContext } from 'react'

const euDouContexto = createContext();

export default function ContextProvider({ children }) {

    const [memory, setMemory] = useState("Há 84 anos atrás...");

    return (
        <euDouContexto.Provider value={{ memory, setMemory }}>
            {children}
        </euDouContexto.Provider>
    )
}

export function useMemories() {
    const context = useContext(euDouContexto);
    const { memory, setMemory } = context;
    return { memory, setMemory };
}