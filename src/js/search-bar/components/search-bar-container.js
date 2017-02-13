import { connect } from 'react-redux'
import SearchBar from './search-bar'
import { fetchWithAddress } from '../actions';

const mapStateToProps = (state) => {
  return {
    stat: state.userAddress.stat,
    dst: state.userAddress.dstAddress,
    org: state.userAddress.orgAddress
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (orgAddress, dstAddress) => {
      if(orgAddress.trim() || dstAddress.trim()) dispatch(fetchWithAddress(orgAddress, dstAddress))
    }
  }
};

const SearchAddress = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchAddress

