import { Link } from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <Link className="logo" to="/">Go Movie</Link>
            <Link className="favorites" to="/favorites">My Movies</Link>
        </header>
    )
}

export default Header;