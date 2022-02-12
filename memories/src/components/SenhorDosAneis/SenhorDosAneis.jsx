import React from 'react'
import { useDistribuicao } from "../Context/DistribuoPraTodoMundo"

export default function SenhorDosAneis() {

    const { filme, setFilme } = useDistribuicao();

    return (
        <div>
            <span>
                <b>O Senhor dos Anéis: </b>
            </span>
            <br />
            <button onClick={() => setFilme(filme == "" ? "'Eu estava lá, Gandalf... 2000 anos quando a humanidade fracassou...'" : "")}>Prefiro Senhor dos Anéis!</button>
        </div>
    )
}