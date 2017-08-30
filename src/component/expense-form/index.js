import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.expense ? props.expense.title : '',
      price: props.expense ? props.expense.price : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value, type} = e.target;
    if (type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value),
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let expense = Object.assign({}, this.state);
    expense.categoryID = this.props.category.id
    this.props.onComplete(expense);
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />

        <input
          name='price'
          type='number'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange}
          />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm;
