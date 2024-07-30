import { Link } from "react-router-dom";
import './style.css';

function Erro(){
    return(
        <div className="not-found">
           <h1>404</h1>
           <h2>Page Not Found</h2>
           <Link to="/">See more movie titles</Link>
        </div>
    )
}

export default Erro;