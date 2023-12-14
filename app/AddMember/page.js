"use client"
import React, { useState } from 'react';
import axios from 'axios'; 



function AddMember() {
    const [inputs, setInputs] = useState({
      Member_Id: '',
      Name: '',
      Phone_No: ''
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputs((prevValues) => ({ ...prevValues, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post('http://127.0.0.1:5000/Members/add', inputs)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error('Error:', error);
        });
    };
  
    return (
      <>
        <div className="AddBook">
          <form className="d-flex flex-column mb-3" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                  <label htmlFor="Member_Id" className="ml-2" style={{ marginBottom: '20px' }}>
                  Member_Id
                  </label>
                  <input
                  type="text"
                  className="form-control"
                  id="Member_Id"
                  name="Member_Id"
                  placeholder="Enter..."
                  onChange={handleChange}
                  />
              </div>
              <div className="form-group mb-3">
                  <label htmlFor="Name" className="ml-2" style={{ marginBottom: '20px' }}>
                  Name
                  </label>
                  <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="Name"
                  placeholder="Enter..."
                  onChange={handleChange}
                  />
              </div>
              <div className="form-group mb-3">
                  <label htmlFor="Phone_No" className="ml-2" style={{ marginBottom: '20px' }}>
                  Phone_No
                  </label>
                  <input
                  type="text"
                  className="form-control"
                  id="Phone_No"
                  name="Phone_No"
                  placeholder="Enter..."
                  onChange={handleChange}
                  />
              </div>
              <button type="submit" className="btn btn-primary my-3">
                  Submit
              </button>
          </form>
        </div>
      </>
    );
  }
  
  export default AddMember;
  