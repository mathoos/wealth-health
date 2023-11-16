import './navbar.scss'; 
import logo from "../../img/logo.png";


const Navbar = ({children}) => {
    return(
        <nav className="navbar">
            <figure className="navbar_logo">
                <img src={logo} className="navbar_logo-img" alt="Logo Wealth Health"/>
                <h1>HRnet</h1>
            </figure>       
            {children}
        </nav>
    )
}

export default Navbar;