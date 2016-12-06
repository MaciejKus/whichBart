import { combineReducers } from 'redux'
import userAddress from './search-bar/reducer'
import station from './search-bar/station-reducer'
import toBart from './map/reducer'

const rootReducer = combineReducers({
  userAddress,
  station,
  toBart
})

export default rootReducer
