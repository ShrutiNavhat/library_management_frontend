"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Book = () => {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios.get('http://127.0.0.1:5000/books/data')
      .then((response) => {
        const responseData = response.data.data; 
        setOriginalList(responseData);
        setList(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });     
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      const filteredList = originalList.filter((current) =>
        current.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setList(filteredList);
    } else {
      setList(originalList);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:5000/books/delete/${id}`)
      .then((response) => {
        console.log(response.data.message);
        setList(prevList => prevList.filter(book => book.Book_Id !== id));
        setOriginalList(prevList => prevList.filter(book => book.Book_Id !== id));
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };
  return (
    <div>
      <form className="d-flex mx-auto mt-2" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <table className="table caption-top">
        <caption>
          <h2 className="text-dark fw-bold">
            <img
              src="https://banner2.cleanpng.com/20180630/chh/kisspng-computer-icons-library-biblioteca-5b375eabbb5219.5746495115303553717673.jpg"
              width="40px"
              height="90px"
              className="img-fluid"
              alt="Book Icon"
            />
            books
          </h2>
        </caption>
        <thead className="table-dark text-center">
          <tr style={{ border: 'solid 2px black' }}>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN No</th>
            <th scope="col">Quantity</th>
            <th scope="col">Publish Date</th>
            <th scope="col">Updates</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {list && list.map((current, key) => (
            <tr key={key}>
              <td className="col1">{current.Book_Id}</td>
              <td className="col2" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                {current.Title}
              </td>
              <td className="col3" style={{ paddingLeft: '50px', paddingRight: '30px' }}>
                {current.Author}
              </td>
              <td className="col4" style={{ paddingLeft: '30px', paddingRight: '15px' }}>
                {current.Isbn_No}
              </td>
              <td className="col5" style={{ paddingLeft: '50px', paddingRight: '40px' }}>
                {current.Quantity}
              </td>
              <td className="col6" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                {current.Publish_date}
              </td>
              <td className="col7" style={{ paddingLeft: '70px' }}>
                <div className="btn-group mx-0" role="group" aria-label="Book Actions">
                  <button type="button" className="btn btn-success link-underline-light mx-2">
                    return
                  </button>
                  <button type="button" className="btn btn-info mx-2">
                    <Link href={`/Issue_book/${current.Book_Id}`} className="book link-offset-2 link-underline link-underline-opacity-0">
                      issue
                    </Link>
                  </button>
                  <button type="button" className="btn btn-warning mx-2">
                    <Link href={`/book_data/${current.Book_Id}`} className="book link-offset-2 link-underline link-underline-opacity-0">
                      updates
                    </Link>
                  </button>
                  <button type="button" className="btn btn-danger mx-2" onClick={() => handleDelete(current.Book_Id)}>
                    delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary text-white mx-2">
        <Link href="/AddBook" className="book link-offset-2 link-underline link-underline-opacity-0">add</Link>
      </button>
    </div>
  );
};

export default Book;
