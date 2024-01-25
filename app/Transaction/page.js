"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transaction = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/transactions/data')
        .then((response) => {
          console.log('Data from server:', response.data.data);
          setData(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
  return (
    <div>
      <form className="d-flex mx-auto mt-2">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ marginBottom: '20px' }}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <table className="table caption-top">
        <caption>
          <h2 className="text-dark fw-bold">
            <img
              src="https://thenounproject.com/api/private/icons/1613310/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
              width="50px"
              height="100px"
              className="img-fluid"
              alt="icon"
            />
            Transaction
          </h2>
        </caption>
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
        <tbody className="text-center">
          {data && data.map((currents, key) => (
            <tr key={currents.Id}>
              <td className="col1">{currents.Id}</td>
              <td className="col2" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                {currents.Book_Id}
              </td>
              <td className="col3" style={{ paddingLeft: '50px', paddingRight: '30px' }}>
                {currents.Member_Id}
              </td>
              <td className="col4" style={{ paddingLeft: '30px', paddingRight: '15px' }}>
                {currents.Amount_paid}
              </td>
              <td className="col5" style={{ paddingLeft: '50px', paddingRight: '40px' }}>
                {currents.Return_date}
              </td>
              <td className="col6" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                {currents.Issue_date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
