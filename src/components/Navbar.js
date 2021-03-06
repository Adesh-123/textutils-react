import React from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div >Toggle mode</div>
        <div class="  mb-2 bg-primary text-white" onClick={()=>{props.toggleMode('primary')}} style={{height: '24px', width: '23px', marginLeft:'3px',marginRight:'3px'}}></div>
         <div class="  mb-2 bg-secondary text-white"onClick={()=>{props.toggleMode('secondary')}} style={{height: '24px', width: '23px' , marginLeft:'3px',marginRight:'3px'}}></div>
         <div class="  mb-2 bg-success text-white" onClick={()=>{props.toggleMode('success')}} style={{height: '24px', width: '23px', marginLeft:'3px',marginRight:'3px'}}></div>
         <div class="  mb-2 bg-danger text-white"onClick={()=>{props.toggleMode('danger')}} style={{height: '24px', width: '23px', marginLeft:'3px',marginRight:'3px'}}></div>
         <div class="  mb-2 bg-warning text-dark"onClick={()=>{props.toggleMode('warning')}} style={{height: '24px', width: '23px', marginLeft:'3px',marginRight:'3px'}}></div>
         <div class="  mb-2 bg-info text-white" onClick={()=>{props.toggleMode('info')}} style={{height: '24px', width: '23px', marginLeft:'3px',marginRight:'3px'}}></div>
         <div class="  mb-2 bg-light text-dark" onClick={()=>{props.toggleMode('light')}} style={{height: '24px', width: '23px', marginLeft:'3px',marginRight:'3px'}}></div>
         <div class="  mb-2 bg-dark text-white"  onClick={()=>{props.toggleMode('dark')}} style={{height: '24px', width: '23px', marginLeft:'3px',marginRight:'3px'}}></div>
         {/* <div class="  mb-2 bg-white text-dark"onClick={props.toggleMode} style={{height: '24px', width: '23px', marginLeft:'3px',marginRight:'3px'}}></div> */}


        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
           <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}}  id="flexSwitchCheckDefault"/>
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mde</label>
       </div> */}
    </div>
  </div>
</nav>
        </div>
    )
}

// Navbar.propTypes={
//     title: PropTypes.string,
//     about: PropTypes.string
// }

Navbar.defaultProps={
    title: 'main file',
    about: 'about'
};