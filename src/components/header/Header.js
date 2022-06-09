//Componentes de clase: Trabajan bajo la creación de una clase
//Componentes de función: Trabajan bajo la creación de una función
import "./Header.css";
import logo from "./logo.jpg";
function Header(){
    return(
        <header>
        <div class="logo">
            <img src={logo} alt="Logo alimalandia"></img>
        </div>
        <div className="botones">
            <button class="b-login"><i class="fa-solid fa-power-off"></i>  Ingresar</button>
            <button class="registro"><i class="fa-solid fa-user-plus"></i>  Registrarse</button>
        </div>
        </header>
    );
}
export default Header;