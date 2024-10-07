
import './App.css';
import Navbar from './Navbar';

import {BrowserRouter , Link , Route ,Routes } from 'react-router-dom';


function App() {
  return (<header className="App-header">
        <h1> A Single Page Application </h1>
       <Navbar/>
      </header>
  
  );
}

export default App;
