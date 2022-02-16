import React from 'react'
import { useDistribuicao } from "../Context/DistribuoPraTodoMundo"

export default function HarryPotter() {
    // abaixo temos um OBJETO CONSTANTE, que recebe as informações da função useDistribuição() 
    const { filme, setFilme } = useDistribuicao();

    return (
        <div>
            <span><b>HARRY POTTER: </b></span>
            <button onClick={() => setFilme(filme == "" ? "'É leviOOOsa e não leviosááá....'" : "")}>Gosto!</button>
        </div>
    )
}


