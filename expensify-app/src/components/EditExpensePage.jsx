import React from "react";

const EditExpensePage = ({ match: { params } }) => (
  <div>This is from my 'edit' expense Component whit id: {params.id}</div>
);

export default EditExpensePage;
