import CartWidget from "./CartWidget";
import "../App.css";

function NavBar (){ 
    const categories = ["Cactus", "Suculentas", "De Interior", "Frutales"];
    return (
        <nav className="nav-bar">
            <div className="logo"> Halaquitas - Vivero</div>
            <div className="categories"><ul>
        {categories.map((category, index) => (
        <li key={index}>
            {category}
        </li>
        ))}
            </ul>
            </div>
        <CartWidget />
        </nav>
    
    )
}

export default NavBar