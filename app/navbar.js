"use client"
import Link from "next/link";
function Navbar (){
  return(
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAO5L4saM5DjT_Y-pvQItsxHNjNYmaYTASO6n2BaG6YdLfhbFObaRWUm-1FhF2yzu33vI&usqp=CAU" width="40px" height="90px" className="img-fluid"></img>
          <a className="navbar-brand fw-bold " href="#">LIBRARY MANAGMENT SYSTEM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-10px">
              <li className="nav-item mx-2">
                
                <Link href="/"  className="book link-offset-2 link-underline link-underline-opacity-0">Book</Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/Members" className="book link-offset-2 link-underline link-underline-opacity-0" >Members</Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/Transaction" className="book link-offset-2 link-underline link-underline-opacity-0">Transcation</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
    
  )
}

export default Navbar;