import React, { useContext, useState, createContext } from 'react'

// armazena a função de criar um contexto à variável
const euDouContexto = createContext();


export default function DistribuoPraTodoMundo({ children }) {

    const [filme, setFilme] = useState("");

    return (
        <euDouContexto.Provider value={{ filme, setFilme }}>
            {children}
        </euDouContexto.Provider>
    )
}

export function useDistribuicao() {
    const contexto = useContext(euDouContexto);     // usa a variável que cria um contexto
    const { filme, setFilme } = contexto;         // e coloca ela num objeto 
    return { filme, setFilme };                   // e retorna o objeto
}