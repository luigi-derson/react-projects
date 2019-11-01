import addExpenses from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
    const result = addExpenses([]);
    expect(result).toBe(0)
});

test("should correctly add up a single expense", () => {
    const result = addExpenses([expenses[0]]);
    expect(result).toBe(195);
});

test("should correctly add multiple expenses", () => {
    const result = addExpenses(expenses);
    expect(result).toBe(114195);
});
