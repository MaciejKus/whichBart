import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar/components/search-bar.js';
import Test from './search-bar/components/test-container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer'; 

let store = createStore(rootReducer);

const Main = () => {
    return (
      <div>
        <SearchBar/>
        <Test />
      </div>
    );
}

const app = document.getElementById('app');
ReactDOM.render(
   <Provider store={store}>
     <Main />
   </Provider>
, app);
