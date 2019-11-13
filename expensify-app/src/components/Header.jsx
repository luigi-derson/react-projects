import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
            <li><button onClick={startLogout}>Log out</button></li>
        </ul>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
