import React from 'react';
import Cities from './screens/Cities';
import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp';
import Itineraries from './screens/Itineraries'
import Activities from './screens/Activities';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer';

const App= () => {

const store = createStore(mainReducer, applyMiddleware(thunk))


  return (
     <Provider store={store}>
      {/* <Home />
      <SignIn />
      <SignUp />
      <Activities />
      <Itineraries />*/}
      
      <Cities /> 
     </Provider>
     
  );
}

export default App
