import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../action/expense-actions.js'


class ExpenseItem extends React.Component {
  render() {
    let {expenseUpdate, expenseDelete, expense, category} = this.props;
    return(
      <li>
        <h2>{expense.title}</h2>
        <h3>{expense.price}</h3>
        <button className='deleteButton' onClick={()=>expenseDelete(expense)}>x</button>
        <div className='editing'>
          <ExpenseForm
            buttonText='update expense'
            category={category}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
