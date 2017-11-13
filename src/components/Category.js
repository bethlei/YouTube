import React, { Component } from 'react'

class Category extends Component {
  render() {
    return (
      <div className="category">
        <span>Filter by category</span>
        <select className="category-filter">
          <option>qqq</option>
          <option>www</option>
          <option>eee</option>
          <option>rrr</option>
        </select>
      </div>
    )
  }
}

export default Category
