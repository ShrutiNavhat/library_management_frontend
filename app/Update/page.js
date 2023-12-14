"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const UpdateBook = () => {
  const router = useRouter();
  const { Book_Id } = router.query; 
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    if (Book_Id) {
      axios.get(axios.get(`http://127.0.0.1:5000/books/detail/${Book_Id}`))
        .then((response) => {
          setBookData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching book data:', error);
        });
    }
  }, [Book_Id]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(axios.put(`http://127.0.0.1:5000/books/update/${Book_Id}`, bookData)
      ) 
      .then((response) => {
        console.log('Book updated:', response.data);
        router.push('/Book_data.js');
      })
      .catch((error) => {
        console.error('Error updating book data:', error);
      });
  };

  return (
    <>
      <div className="AddBook">
        <form className="d-flex flex-column mb-3" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="Book_Id" className="ml-2" style={{ marginBottom: '20px' }}>
              Book_Id
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData.Book_Id}
              id="Book_Id"
              name="Book_Id"
              placeholder="Enter..."
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Title" className="ml-2" style={{ marginBottom: '20px' }}>
              Title
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData.Title}
              id="Title"
              name="Title"
              placeholder="Enter..."
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Author" className="ml-2" style={{ marginBottom: '20px' }}>
              Author
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData.Author}
              id="Author"
              name="Author"
              placeholder="Enter..."
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Isbn_No" className="ml-2" style={{ marginBottom: '20px' }}>
              ISBN No
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData.Isbn_No}
              id="Isbn_No"
              name="Isbn_No"
              placeholder="Enter..."
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Quantity" className="ml-2" style={{ marginBottom: '20px' }}>
              Quantity
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData.Quantity}
              id="Quantity"
              name="Quantity"
              placeholder="Enter..."
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Publish_date" className="ml-2" style={{ marginBottom: '20px' }}>
              Publish Date
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData.Publish_date}
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

export default UpdateBook;