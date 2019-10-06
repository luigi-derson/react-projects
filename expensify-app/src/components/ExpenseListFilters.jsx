/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={({target: {value: text}}) => {
                        this.props.dispatch(setTextFilter(text));
                }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={({target: {value: option}}) => {
                        if(option === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if (option === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    displayFormat={"DD/MM/YYYY"}
                />
            </div>
        );
    }
};

const mapStatetoProps = (state) => ({
    filters: state.filters
});

export default connect(mapStatetoProps)(ExpenseListFilters);