import React from 'react'
import { useMemories } from "../Context/ContextProvider"

export default function Memories() {

    const { memory, setMemory } = useMemories();

    return (
        <div>
            <h1>Memories:</h1>
            <span>
                {memory}
            </span>
            <br />
            <button onClick={() => setMemory("Let me tell you another history...")}>Change your memory!</button>
        </div>
    )
}


