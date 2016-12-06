import React from 'react';
import { connect } from 'react-redux';
import { updateAddress } from '../actions';

let SearchBar = ({ dispatch }) => {
  let input;

  return (
  <div>
    <form onSubmit={ e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(updateAddress(input.value));
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
  </div>
)
}

SearchBar = connect()(SearchBar);

export default SearchBar;
