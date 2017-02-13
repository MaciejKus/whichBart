import React from 'react';
import { connect } from 'react-redux';

let SearchBar = (props) => {
//  console.log(props)
  let orgInput;
  let dstInput;

  return (
  <div>
    <form onSubmit={ e => {
      e.preventDefault();
      props.onClick(orgInput.value, dstInput.value);
    }}>
        <input
          ref = {node => {
            orgInput = node;
        }}/>
        <input
          ref = {node => {
            dstInput = node;
        }}/>
        <input 
          type="submit"
	  value="Submit"
	/>
      </form>
      Origin Address: { props.org.address} 
      <br />
      Destination Address: { props.dst.address } 
      <p> { props.stat } </p>
  </div>
)
}

export default SearchBar;
