"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from "axios";

const Members =()=>{
    const [data,setData]=useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/Members/data')
          .then((response) => {
            const responseData = response.data.data; 
            setData(responseData);
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
            <table class="table caption-top">
            <caption><h2 className="text-dark fw-bold"><img src="https://www.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600nw-1720665448.jpg" width="50px" height="100px" className="img-fluid"></img>members</h2></caption>
            <thead className="table-dark text-center">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Phone-No</th>
                <th scope="col">Updates</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {data.map((current,key) => (
                    <tr key={key}>
                        <td>{current.Member_Id}</td>
                        <td>{current.Name}</td>
                        <td>{current.Phone_No}</td>
                        <td>
                        <div className="btn-group mx-0" role="group" aria-label="Book Actions">
                            <button type="button" className="btn btn-warning mx-2">
                                <Link href="/update" className="book link-offset-2 link-underline link-underline-opacity-0">Updates</Link></button>
                            <button type="button" className="btn btn-danger mx-2">Delete</button>
                        </div>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            <button type="button" className="btn btn-primary text-white mx-2">
                <Link href="/AddMember" className="book link-offset-2 link-underline link-underline-opacity-0">Add</Link>
            </button>
        </div>
    )
}
export default Members;