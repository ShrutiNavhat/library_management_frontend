
"use client"
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar.js";
import Book from "./Book_data.js";
const App =()=>{
    return(
          <div >
            <Navbar/>
            <Book/>
           
          </div>
    )
}
export default App;