import React from 'react'
import { useDistribuicao } from "../Context/DistribuoPraTodoMundo"

export default function HarryPotter() {

    const { filme, setFilme } = useDistribuicao();

    return (
        <div>
            <span>
                <b>Harry Potter:</b>
            </span>
            <br />
            <button onClick={() => setFilme(filme == "" ? "'É leviOOOsa e não leviosááá....'" : "")}>Gosto de Harry Potter!</button>
        </div>
    )
}


