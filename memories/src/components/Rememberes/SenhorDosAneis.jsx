import React from 'react'
import { useDistribuicao } from "../Context/DistribuoPraTodoMundo"

export default function SenhorDosAneis() {

    const { filme, setFilme } = useDistribuicao();

    return (
        <div>
            <h1>O Senhor dos Anéis:</h1>
            <span>
                {filme}
            </span>
            <br />
            <button onClick={() => setFilme("Eu estava lá, Gandalf... 2000 anos quando a humanidade fracassou...")}>Prefiro Senhor dos Anéis!</button>
        </div>
    )
}