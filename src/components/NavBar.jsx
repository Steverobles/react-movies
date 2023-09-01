import {Link} from 'react-router-dom'


export default function NavBar() {
    return(
        <nav>
            <Link to='/movies/list'>Movies List</Link>
            &nbsp; | &nbsp;
            <Link to='/actors/list'>Actors List</Link>
        </nav>
    )
}