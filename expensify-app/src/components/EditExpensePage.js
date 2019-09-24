import React from 'react';

const EditExpensePage = ({match: {params: par}}) => {
    return (
        <div>
            This is from my edit expense Component whit id: {par.id}
        </div>
    );
}

export default EditExpensePage;