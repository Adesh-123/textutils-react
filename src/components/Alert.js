import React from 'react'

export default function Alert(props) {
    const capatilasation=(word)=>{
        let str=word.toLowerCase();
        return str.charAt(0).toUpperCase()+ str.slice(1);
    }
    return (
       <div style={{height: '3px'}}>
      { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capatilasation(props.alert.type)}!</strong> : {props.alert.msg}
            </div>}
      </div>
    )
}
