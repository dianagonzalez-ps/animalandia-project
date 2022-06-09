import "./Navbar.css"
import {Link, Router} from "react-router-dom"
function Navbar (){
    return(
<nav>
    <input type="checkbox" name="barra" id="chk-menu"/>
    <label for="chk-menu" class="btn-menu">
        <i class="fa-solid fa-bars"></i>
    </label>
    <div class="items">
        <Link to="/" className="item">Home</Link>
        <Link to="/Equipo" className="item">Equipo</Link>
        <Link to="/Servicios" className="item">Servicios</Link>
        <Link to="/Tips" className="item">Tips</Link>
        <Link to="/Contacto" className="item">Contáctenos</Link>
    </div>
</nav>
    );
}
export default Navbar