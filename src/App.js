// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React ,{useState} from 'react'
import Alert from './components/Alert';
// import { Router } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [alert,setAlert] =useState(null);
  const showalert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
         setAlert(null);
    },1500);
  }
   const [mode,stateMode]=useState('light');
   const toggleMode=()=>{
    if(mode==='dark'){
      stateMode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode enable","success");
      document.title="textutils light mode"
      setTimeout(()=>{
         document.title="textutils"
      },2000)
    }
    else{
      stateMode('dark');
      document.body.style.backgroundColor='grey';
      showalert("dark mode enable","success");
      document.title="textutils dark mode"
      setTimeout(()=>{
        document.title="textutils"
     },2000)
    }
   }
  return (
  <>
  <Router>
    <Navbar mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform heading ="ENTER YOUR TEXT FOR CHANGE" mode={mode} showalert={showalert}/>
          </Route>
    </Switch>
     {/* <About/> */}
  </div>
  </Router>
</>
  );
}

export default App;
