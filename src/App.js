import React from 'react';
import Navbar from './components/Navbar'
import './App.css';


const Items=[{title:'Home'},{title:'Services', drop:["For entrepreneurs", "For Students", "For hobbiyist"]},{title:'Contact'}]
function App() {
  return (
    <div className="App">
     < Navbar menu={Items}/>
     
    </div>
  );
}

export default App;
