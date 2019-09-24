import React from 'react';

const PortfolioItem = ({match: {params}}) => (
    <div>
        <h2>Single work page</h2>
        <p>This is the item with id {params.id}</p>
    </div>
);

export default PortfolioItem;