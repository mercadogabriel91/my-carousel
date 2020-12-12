import React, { useState } from 'react'

export default function App() {

    const [state, setState] = useState("click here");

    return (
        <div>
            <h1>Hello React</h1>
            <button onClick={() => setState("clicked")}>{state}</button>
        </div>
    )
}