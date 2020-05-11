import React from 'react';
import Header from './components/Header/Header';
import PokemonList from './components/PokemonList/PokemonList';
import Info from './components/Info/Info';

import './App.css'

import { Provider } from 'react-redux'
import store from './store'


const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <div className="content">
        <PokemonList />
        <div className="about"><Info /></div>
      </div>
    </div>
  </Provider>
)

export default App;
