export default function Movie(props) {
    return (
        <li>
            <h3>{props.movieInfo.title}</h3>
            <h2>{props.movieInfo.director}</h2>
            <p>{props.movieInfo.year}</p>
        </li>
    )
}