import React from 'react';
import './App.css';
import Header from './header.jsx';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import Redux store

function App() {
  return (
    <Provider store={store}> {/* Redux Provider */}
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
