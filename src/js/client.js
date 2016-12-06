import React from 'react';
import ReactDOM from 'react-dom';
import SearchAddress from './search-bar/components/search-bar-container.js';
import BartStation from './station/components/station-container.js';
import GoogleMap from './map/components/map-container.js';
import BartInfoContainer from './bart-info/components/bart-info-container.js';
//import GMap from './map/components/map.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'; 

let store = applyMiddleware(thunk)(createStore)(rootReducer);
window.store = store;

const Main = () => {
    return (
      <div>
        <SearchAddress/>
        <BartStation />
        <GoogleMap />
        <BartInfoContainer />
      </div>
    );
}

const app = document.getElementById('app');
ReactDOM.render(
   <Provider store={store}>
     <Main />
   </Provider>
, app);
