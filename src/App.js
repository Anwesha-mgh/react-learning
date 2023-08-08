import React from 'react';
import './style.css';
import Counter from './components/Counter';
import Cake_Shop from './components/Cake_Shop';
import CakeContainer from './cakes/CakeContainer';
import { Provider } from 'react-redux';
import store from './cakes/store';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
        {/* <Counter /> */}
        {/* <Cake_Shop /> */}
        {<CakeContainer />}
      </div>
    </Provider>
  );
}
