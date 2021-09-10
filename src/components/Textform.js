// import React from 'react'
import React, {useState} from 'react';


export default function Textform(props) {
    const changetolowercase=()=>{
        console.log("clickonlowercase");
        let newtext= text.toLowerCase();
        setText(newtext);
        props.showalert("Text converted to lowercase","success");
    }
    const changetouppercase=()=>{
        console.log("clickonlowercase");
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showalert("Text converted to uppercase","success");
    }
    const textchange=(event)=>{
        console.log("try to change text");
        setText(event.target.value);
    }
    const clear=()=>{
        let cleartext=" ";
        setText(cleartext);
        props.showalert("Text clear","success");
    }
    const[text,setText] =useState('');
    return (
        <>
       <div className ="container"  style={{color:props.mode==='light'?'black':'white'}}>
           <h3>{props.heading}</h3>
       <div>
         <div className="mb-3">     
          <textarea className="form-control" value={text} onChange={textchange} style ={{backgroundColor: props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} placeholder="Enter your text" rows="9" ></textarea>
           </div> 
           <button className="btn btn-primary" onClick={changetolowercase} >convert to lowercase</button>
           <button className="btn btn-primary  mx-3"  onClick={changetouppercase} >convert to Uppercase</button>
           <button className="btn btn-primary  mx-3"  onClick={clear} >Clear</button>
        </div>
       </div>
       <div style={{color:props.mode==='light'?'black':'white'}}>
       <h3>your text summary</h3>
       <p>{text.split(" ").length} words and {text.length} character</p>
       <p>{0.008*text.split(" ").length} minute read</p>
       <h3>preview</h3>
       <p>{text.length>0?text:"please write the text in above box"}</p>
       </div>
       </>
    )
}
