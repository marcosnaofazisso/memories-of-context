import React from 'react'
import { useDistribuicao } from "../Context/DistribuoPraTodoMundo"

export default function SenhorDosAneis() {
    // abaixo temos um OBJETO CONSTANTE, que recebe as informações da função useDistribuição() 
    const { filme, setFilme } = useDistribuicao();

    return (
        <div>
            <span><b>O SENHOR DOS ANÉIS: </b></span>
            <button onClick={() => setFilme(filme == "" ? "'Eu estava lá, Gandalf... 2000 anos quando a humanidade fracassou...'" : "")}>Amo!</button>
        </div>  
    )
}