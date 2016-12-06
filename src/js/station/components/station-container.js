import { connect } from 'react-redux'
import Station from './station'

const mapStateToProps = (state) => {
  return {
   station : state.station.name
  }
};

const BartStation = connect(
  mapStateToProps
)(Station)

export default BartStation

