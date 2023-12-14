"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios";


const Transaction =()=>{
    const [data,setData]=useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/transactions/data')
          .then((response) => {
            const responseData = response.data.data; 
            setData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
    return(
        <div>
            <form className="d-flex mx-auto mt-2" >
                <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" style={{marginButtom:'20'}}></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <table class="table caption-top ">
            <caption><h2 className="text-dark fw-bold"><img src="https://thenounproject.com/api/private/icons/1613310/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" width="50px" height="100px" className="img-fluid"></img>transaction</h2></caption>
            <thead className="table-dark text-center">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Book Id</th>
                <th scope="col">Member Id</th>
                <th scope="col">Amount Paid</th>
                <th scope="col">Return Date</th>
                <th scope="col">Issue Date</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                
                {data.map((current) => (
                    <tr key={current.Id}>
                        <td>{current.Id}</td>
                        <td>{current.Book_id}</td>
                        <td>{current.Member_id}</td>
                        <td>{current.Amount_paid}</td>
                        <td>{current.Return_date}</td>
                        <td>{current.issue_date}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}
export default Transaction;