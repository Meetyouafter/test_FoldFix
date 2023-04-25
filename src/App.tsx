import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import StartPage from './components/StartPage/StartPage';

const App = () => (
  <Provider store={store}>
    <StartPage />
  </Provider>
);

export default App;
