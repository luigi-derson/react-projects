import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h2>My work</h2>
        <p>Checkout the following things I've done:</p>
        <ul>
            <li><Link to="/portfolio/1">Item 1</Link></li>
            <li><Link to="/portfolio/2">Item 2</Link></li>
        </ul>
        
    </div>
);

export default Portfolio;