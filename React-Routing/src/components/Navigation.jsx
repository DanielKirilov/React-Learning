import { Link } from "react-router-dom"

export default Navigation = () => {
    return (
        <nav>
            <Link to="/" >Home </Link>
            <Link to="/about" >About </Link>
            <Link to="/contact" >Contact </Link>
        </nav>
    )
}