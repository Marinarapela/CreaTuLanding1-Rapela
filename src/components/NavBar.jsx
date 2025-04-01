import CartWidget from "./CartWidget"
import "../App.css"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { useEffect, useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from "react-router"


function NavBar (){ 
    const [categories, setCategories] = useState([])

    useEffect (()=> {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(cat => setCategories(cat));
    }, [])

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand 
                to="/"
                as= {NavLink}
                >
                    Halaquitas
                </Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle variant="tertiary" id="dropdown-basic">
                        Categorías
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categories.map(cat => (
                        <Dropdown.Item 
                        to={`/category/${cat}`} 
                        key={cat}
                        as= {NavLink}
                        className={({isActive}) =>
                            isActive ? "text-tertiary-color font-bold" : "text-black"
                        }
                        >
                            {cat}
                        </Dropdown.Item>
                        ))}
                </Dropdown.Menu>
                </Dropdown>
                <CartWidget/>
            </Container>
        </Navbar>
    
    )
}

export default NavBar