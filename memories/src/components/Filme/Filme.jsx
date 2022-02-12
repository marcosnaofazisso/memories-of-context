import React from 'react'
import { useDistribuicao } from '../Context/DistribuoPraTodoMundo'

function Filme() {

    const { filme, setFilme } = useDistribuicao();

    return (
        <div>
            <h1>Uma frase do seu filme favorito: </h1>
            <h2>{filme}</h2>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Filme