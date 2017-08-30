import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../action/expense-actions.js'


class ExpenseItem extends React.Component {
  render() {
    let {expenseUpdate, expenseDelete, expenseCreate, expense} = this.props;
    return(
      <li>
        <h2>{expense.title}</h2>
        <h3>{expense.budget}</h3>
        <button className='deleteButton' onClick={()=>expenseDelete(expense)}>x</button>
        <div className='editing'>
          <ExpenseForm
            buttonText='update expense'
            expense={expense}
            onComplete={expenseUpdate}
            />
        </div>
      </li>
    )
  }
}

let mapStateToProps = () =>({});

let mapDispatchToProps = dispatch => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
