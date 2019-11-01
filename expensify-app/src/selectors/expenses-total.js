export default (expenses) => expenses.reduce((acc, { amount }) => acc + amount, 0);
