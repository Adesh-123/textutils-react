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
  Route
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
  const removebodyclass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
  }
  const [text,setText]=useState('black');
   const [mode,stateMode]=useState('black');
   const toggleMode=(cls)=>{
     removebodyclass();
     document.body.classList.add('bg-'+cls)
     if(cls==='dark') {
     stateMode('white');
     setText('white');
     }
     else{
       stateMode('black');
       setText('black');
     }
    // if(mode==='dark'){
    //   stateMode('light');
    //   document.body.style.backgroundColor='white';
    //   showalert("light mode enable","success");
      // document.title="textutils light mode"
      // setTimeout(()=>{
      //    document.title="textutils"
      // },2000)
    // }
    // else{
    //   stateMode('dark');
    //   document.body.style.backgroundColor='grey';
    //   showalert("dark mode enable","success");
    //   document.title="textutils dark mode"
    //   setTimeout(()=>{
    //     document.title="textutils"
    //  },2000)
    // }
   }
  return (
  <>
  <Router>
    <Navbar mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
          <Textform text={text} className="my-3" heading ="ENTER YOUR TEXT FOR CHANGE" mode={mode} showalert={showalert}/>
          </Route>
    </Switch>
     {/* <About/> */}
  </div>
  </Router>
</>
  );
}

export default App;
