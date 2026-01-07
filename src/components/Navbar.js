import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    
    <div> 
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item"> */}

            {/* <Link className="nav-link" to="/about us">{props.about}</Link> */}
            {/* <a className="nav-link" href="/about us">{props.about}</a>

          </li> */}
        </ul>
        <form className="d-flex" role="search">
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button> */}

          <div className={`form-check form-switch text-${props.navbartxt}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.theme_func}/>
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable dark mode</label>
      </div>
        </form>
      </div>
    </div>
  </nav>

        
    </div>
  )
}



Navbar.propTypes={
  title:PropTypes.string,
  func:PropTypes.string.isRequired,
  about:PropTypes.string,
  work:PropTypes.string
}

Navbar.defaultProps={
  title:"write the title here",
  func:"write the func here",
  about:"heyy yoo this is bout us",
  work:"ayy yoo work with us"
};
