import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>My Portfolio in React</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact>Home page</NavLink></li>
            <li><NavLink to="/portfolio" activeClassName="is-active" exact>Portfolio</NavLink></li>
            <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
        </ul>
    </header>
);

export default Header;