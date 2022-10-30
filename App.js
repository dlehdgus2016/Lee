import React from 'react'
import './App.css';
import Before_Cert from './components/Before_Cert'
import After_Cert from './components/After_Cert'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Before_Cert />
    </Router>
    </>
  );
}

export default App;