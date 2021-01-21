import React from "react";
import { NavLink } from "react-router-dom";

import "./navLinks.styles.css";

const NavLinks = (props) =>{
    return (
        <ul className={`nav_link ${props.className}`}>
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places" >My Places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new" >Add Places</NavLink>
            </li>
            <li>
                <NavLink to="/auth" >Authenticate</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;