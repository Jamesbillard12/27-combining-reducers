import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';


class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDelete} = this.props;
    return(
      <li>
        <h2>{category.title}</h2>
        <h3>{category.budget}</h3>
        <button className='deleteButton' onClick={()=>categoryDelete(category)}>x</button>
        <div className='editing'>
          <CategoryForm
            buttonText='update category'
            category={category}
            onComplete={categoryUpdate}
            />
        </div>
        <div className='add expense'>
          <CategoryForm
            buttonText='add expense'
            category={category}
            onComplete={categoryUpdate}
            />
        </div>
      </li>
    )
  }
}

let mapStateToProps = () =>({});

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
