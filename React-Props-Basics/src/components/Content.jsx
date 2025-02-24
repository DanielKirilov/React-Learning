import Movie from "./Movie"
export default function Content(props) {

return (
    <div>
        <h2>{props.headingText}</h2>
        <ul>
            <Movie movieInfo={props.movies[0]}/>
            <Movie movieInfo={props.movies[1]}/>
            <Movie movieInfo={props.movies[2]}/>
            <Movie movieInfo={props.movies[3]}/>

        </ul>
    </div>
)
}
