"use client"
import React, { useState } from 'react';
import axios from 'axios'; 

function AddBook() {
  const [inputs, setInputs] = useState({
    Book_Id:'',
    Title: '',
    Author: '',
    Isbn_No: '',
    Quantity: '',
    Publish_date: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://127.0.0.1:5000/books/add', inputs)
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
                <label htmlFor="title" className="ml-2" style={{ marginBottom: '20px' }}>
                Book_Id
                </label>
                <input
                type="text"
                className="form-control"
                id="Book_Id"
                name="Book_Id"
                placeholder="Enter..."
                onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="title" className="ml-2" style={{ marginBottom: '20px' }}>
                Title
                </label>
                <input
                type="text"
                className="form-control"
                id="Title"
                name="Title"
                placeholder="Enter..."
                onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="author" className="ml-2" style={{ marginBottom: '20px' }}>
                Author
                </label>
                <input
                type="text"
                className="form-control"
                id="Author"
                name="Author"
                placeholder="Enter..."
                onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="isbn" className="ml-2" style={{ marginBottom: '20px' }}>
                ISBN No
                </label>
                <input
                type="text"
                className="form-control"
                id="Isbn_No"
                name="Isbn_No"
                placeholder="Enter..."
                onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="quantity" className="ml-2" style={{ marginBottom: '20px' }}>
                Quantity
                </label>
                <input
                type="text"
                className="form-control"
                id="Quantity"
                name="Quantity"
                placeholder="Enter..."
                onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="publishDate" className="ml-2" style={{ marginBottom: '20px' }}>
                Publish Date
                </label>
                <input
                type="text"
                className="form-control"
                id="Publish_date"
                name="Publish_date"
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

export default AddBook;