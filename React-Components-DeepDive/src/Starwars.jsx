import { use, useEffect, useState } from "react"

export default function Starwars() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            }

            )
    }, [])

    return (
        <h1>Starwars characters</h1>
    )
}