"use client"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./nav_bar.js";
import Book from "./Book_data.js";
import Members from "./Members.js";
import Transcation from "./Transaction.js";
const App =()=>{
    return(
        <>
          <div>
            <Navbar/>
            <Book/>
            <Members/>
            <Transcation/>
          </div>
        </>
    )
}
export default App;