import React from 'react';
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { shallow } from "enzyme";

test("should correctly render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23545784} />);
    expect(wrapper).toMatchSnapshot();
});


