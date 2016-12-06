import React from 'react';
import ReactDOM from 'react-dom';
import SearchAddress from './search-bar/components/search-bar-container.js';
import BartStation from './search-bar/components/station-container.js';
import GoogleMap from './map/components/map-container.js';
import BartInfoContainer from './bart-info/components/bart-info-container.js';
//import GMap from './map/components/map.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer'; 

let store = createStore(rootReducer);
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
