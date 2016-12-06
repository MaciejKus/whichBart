import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {address: this.props.searchAddress || ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.changeAddress(this.state.address);
  }

  handleChange(e) {
    this.setState({
      address: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Address..."
          value={this.state.address}
          onChange={this.handleChange}
        />
        <input 
          type="submit"
	  value="Submit"
	/>
      </form>
    );
  }
}

