"use client"
import { useEffect } from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Navbar (){
  return(
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">LIBRARY MANAGMENT SYSTEM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active"  href="/Book">Book</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Members</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " >Transcation</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <form className="d-flex mx-auto" >
        <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" style={{marginButtom:'20'}}></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
    
  )
}

export default Navbar;