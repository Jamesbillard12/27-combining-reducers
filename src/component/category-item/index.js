import React from 'react';
import CategoryForm from '../category-form';


class CategoryItem extends React.Component {
  render() {
    return(
      <li>
        <h2>{this.props.category.title}</h2>
        <h3>{this.props.category.budget}</h3>
        <button className='deleteButton' onClick={()=>this.props.categoryDelete(this.props.category)}>x</button>
        <CategoryForm
          buttonText='update category'
          category={this.props.category}
          onComplete={this.props.categoryUpdate}
          />
      </li>
    )
  }
}

export default CategoryItem
