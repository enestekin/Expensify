import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import moment from 'moment';

function ExpenseListFilters(props) {

  const onStartDate = (e) => {
    const startDate = e.target.value;
    props.dispatch(setStartDate(moment(startDate)))
  }

  const onEndDate = (e) => {
    const endDate = e.target.value;
    props.dispatch(setEndDate(moment(endDate)))
  }

  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
            className="text-input" 
            placeholder="Search Expenses"
            type="text" 
            value={props.filters.text} 
            onChange={(e) => {
              props.dispatch(setTextFilter(e.target.value));
            }} 
          />
        </div>
        <div className="input-group__item">
          <select
            className="select" 
            value={props.filters.sortBy}
            onChange={(e) => {
            e.target.value === 'amount' ? props.dispatch(sortByAmount()) : props.dispatch(sortByDate());
          }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
          <input 
            className="text-input" 
            type="date" 
            value={props.filters.startDate.format('YYYY-MM-DD')} 
            onChange={onStartDate}
          />
        </div>
        <div className="input-group__item">
          <input
            className="text-input" 
            type="date" 
            value={props.filters.endDate.format('YYYY-MM-DD')} 
            onChange={onEndDate}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
