import { use, useEffect, useState } from "react"

export default function Starwars() {
    const [characters, setCharacters] = useState([])
console.log(characters);

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then(response => response.json())
            .then((data) => {
                setCharacters(data.results)
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <h1>Starwars characters</h1>
    )
}