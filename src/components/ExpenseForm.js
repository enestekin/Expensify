import React, { useState } from 'react'
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function ExpenseForm(props) {

  const useStyles = makeStyles((theme) => ({
    textField: {
      width: 1088,
      height: 50,
    },
  }));

  const classes = useStyles();

  const [state, setState] = useState({
    description: props.expense ? props.expense.description : '',
    note: props.expense ? props.expense.note : '',
    amount: props.expense ? (props.expense.amount / 100).toString() : '',
    createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
    error: ''
  })

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setState((prevState) => ({...prevState, description}))
  }
  const onNoteChange = (e) => {
    const note = e.target.value;
    setState((prevState) => ({...prevState, note}))
  }
  const onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setState((prevState) => ({ ...prevState, amount}))
    }
  }
  const onDateChange = (e) => {
    const createdAt = e.target.value;

    setState((prevState) => ({...prevState, createdAt: moment(createdAt) }));
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if (!state.description || !state.amount) {
      setState((prevState) => ({ ...prevState, error: 'Please provide description and amount.' }));
    } else {
      setState((prevState) => ({ ...prevState, error: '' }));
      props.onSubmit({
        description: state.description,
        amount: parseFloat(state.amount, 10)*100,
        createdAt: state.createdAt.valueOf(),
        note: state.note
      })
    }
  }
  
  return (
    <form className="form container" onSubmit={onSubmit}>
      {state.error && <p className="form__error">{state.error}</p>}
      <input
        className="text-input" 
        type="text"
        placeholder="Description"
        autoFocus
        value={state.description}
        onChange={onDescriptionChange}
      />
      <input
        className="text-input" 
        type="text"
        placeholder="Amount"
        value={state.amount}
        onChange={onAmountChange}
      />
      <TextField
        className={classes.textField} 
        type="date"
        defaultValue={moment().format('YYYY-MM-D')}
        onChange={onDateChange}
      />
      <textarea
        className="textarea"
        placeholder="Add a note for your expense (optional)"
        value={state.note}
        onChange={onNoteChange}
      >
      </textarea>
      <div>
        <button className="button">Save Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
