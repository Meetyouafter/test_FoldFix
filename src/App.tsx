import React from 'react';
import { Provider } from 'react-redux';
import StartPage from './components/StartPage/StartPage';
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <StartPage />
  </Provider>
);

export default App;
