import { connect } from 'react-redux'
//import { toggleTodo } from '../actions'
import Test from './test'

const mapStateToProps = (state) => {
  console.log('state is ')
  console.log(state);
  return {
    address: state.updateAdd.address
  }
};

const TestContainer = connect(
  mapStateToProps
)(Test)

export default  TestContainer
