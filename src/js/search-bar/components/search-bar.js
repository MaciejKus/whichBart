import React from 'react';
import { connect } from 'react-redux';

let SearchBar = (props) => {
//  console.log(props)
  let input;

  return (
  <div>
    <form onSubmit={ e => {
      e.preventDefault();
      props.onClick(input.value);
    }}>
        <input
          ref = {node => {
            input = node;
        }}/>
        <input 
          type="submit"
	  value="Submit"
	/>
      </form>
      Address: { props.address } 
      <p> { props.stat } </p>
  </div>
)
}

export default SearchBar;
