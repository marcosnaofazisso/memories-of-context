import React from 'react'
import { useMemories } from "../Context/ContextProvider"

export default function Remembers() {

    const { memory, setMemory } = useMemories();

    return (
        <div>
            <h1>Remembers:</h1>
            <span>
                {memory}
            </span>
            <br />
            <button onClick={() => setMemory("Eu estava lá, Gandalf...")}>Change your memory!</button>
        </div>
    )
}