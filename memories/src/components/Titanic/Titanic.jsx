import React from 'react'
import { useDistribuicao } from '../Context/DistribuoPraTodoMundo'

export default function Titanic() {
    // abaixo temos um OBJETO CONSTANTE, que recebe as informações da função useDistribuição() 
    const { filme, setFilme } = useDistribuicao();

    return (
        <div>
            <span><b>TITANIC: </b></span>
            <button onClick={() => setFilme(filme == "" ? "'Eu sou o rei do mundo! Wooohoooow!'" : "")}>Prefiro!</button>
        </div>

    )
}