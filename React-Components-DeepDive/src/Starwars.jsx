import { use, useEffect, useState } from "react"

export default function Starwars() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then(response => response.json())
            .then((data) => {
                setCharacters(data.results)
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <div>
            <h1>Starwars characters</h1>

            <ul>
                {characters.map(character => <li
                    key={character.url}
                >
                    {`${character.name}
                    ${character.height}`}
                </li>)}
            </ul>

        </div>
    )
}