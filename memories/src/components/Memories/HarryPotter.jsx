import React from 'react'
import { useDistribuicao } from "../Context/DistribuoPraTodoMundo"

export default function HarryPotter() {

    const { filme, setFilme } = useDistribuicao();

    return (
        <div>
            <h1>Harry Potter:</h1>
            <span>
                {filme}
            </span>
            <br />
            <button onClick={() => setFilme("É leviOOOsa e não leviosááá....")}>Gosto de Harry Potter!</button>
        </div>
    )
}


