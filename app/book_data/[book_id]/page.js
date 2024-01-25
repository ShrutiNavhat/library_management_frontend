"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function UpdateBook({ params }) {
  const [bookData, setBookData] = useState(null);

  const fetchBookData = () => {
    axios.get(`http://127.0.0.1:5000/books/detail/${params.book_id}`)
      .then((response) => {
        setBookData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
      });
  };

  useEffect(() => {
    fetchBookData();
  }, [params.book_id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (bookData) {
      axios.put(`http://127.0.0.1:5000/books/update/${params.book_id}`, bookData)
        .then((response) => {
          console.log('Book updated:', response.data);
        })
        .catch((error) => {
          console.error('Error updating book data:', error);
        });
    } else {
      console.log('No data found for Book_Id:', params.book_id);
    }
  };

  return (
    <>
      <div className="AddBook">
        <form className="d-flex flex-column mb-3" onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="form-group mb-3">
            <label htmlFor="Title" className="ml-2" style={{ marginBottom: '20px' }}>
              Title
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData?.Title || ''}
              id="Title"
              name="Title"
              placeholder={bookData?.Title}
              onChange={handleChange}
            />
          </div>
          {/* Author Input */}
          <div className="form-group mb-3">
            <label htmlFor="Author" className="ml-2" style={{ marginBottom: '20px' }}>
              Author
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData?.Author || ''}
              id="Author"
              name="Author"
              placeholder={bookData?.Author}
              onChange={handleChange}
            />
          </div>
          {/* Isbn_No Input */}
          <div className="form-group mb-3">
            <label htmlFor="Isbn_No" className="ml-2" style={{ marginBottom: '20px' }}>
              ISBN No
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData?.Isbn_No || ''}
              id="Isbn_No"
              name="Isbn_No"
              placeholder={bookData?.Isbn_No}
              onChange={handleChange}
            />
          </div>
          {/* Quantity Input */}
          <div className="form-group mb-3">
            <label htmlFor="Quantity" className="ml-2" style={{ marginBottom: '20px' }}>
              Quantity
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData?.Quantity || ''}
              id="Quantity"
              name="Quantity"
              placeholder={bookData?.Quantity}
              onChange={handleChange}
            />
          </div>
          {/* Publish_date Input */}
          <div className="form-group mb-3">
            <label htmlFor="Publish_date" className="ml-2" style={{ marginBottom: '20px' }}>
              Publish Date
            </label>
            <input
              type="text"
              className="form-control"
              value={bookData?.Publish_date || ''}
              id="Publish_date"
              name="Publish_date"
              placeholder={bookData?.Publish_date}
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
