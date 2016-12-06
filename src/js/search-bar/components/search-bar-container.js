import { connect } from 'react-redux'
import SearchBar from './search-bar'
import { fetchWithAddress } from '../actions';

const mapStateToProps = (state) => {
  return {
    stat: state.userAddress.stat,
    address: state.userAddress.address
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (address) => {
      dispatch(fetchWithAddress(address))
    }
  }
};

const SearchAddress = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchAddress

