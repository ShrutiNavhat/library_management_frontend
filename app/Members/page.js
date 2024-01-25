"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Members = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://127.0.0.1:5000/Members/data')
      .then((response) => {
        const responseData = response.data.data;
        console.log('Fetched data:', responseData);
        setOriginalData(responseData);
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      const filteredData = originalData.filter((current) =>
        (current.Name && current.Name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (current.Phone_No && String(current.Phone_No).includes(searchQuery))
      );
      setData(filteredData);
    } else {
      setData(originalData);
    }
  };
  console.log('Rendered with data:', data);

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:5000/Members/delete/${id}`)
      .then((response) => {
        console.log(response.data.message);
        setData(prevList => prevList.filter(member => member.Member_Id !== id));
        setOriginalData(prevList => prevList.filter(member => member.Member_Id !== id));
      })
      .catch((error) => {
        console.error('Error deleting Member:', error);
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
          style={{ marginBottom: '20px' }}
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
              src="https://www.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600nw-1720665448.jpg"
              width="50px"
              height="100px"
              className="img-fluid"
              alt="User Icon"
            />
            members
          </h2>
        </caption>
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone-No</th>
            <th scope="col">Updates</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((current, key) => (
            <tr key={key}>
              <td>{current.Member_Id}</td>
              <td>{current.Name}</td>
              <td>{current.Phone_No}</td>
              <td>
                <div className="btn-group mx-0" role="group" aria-label="Book Actions">
                  <button type="button" className="btn btn-warning mx-2">
                    <Link href={`/member_data/${current.Member_Id}`} className="book link-offset-2 link-underline link-underline-opacity-0">
                      updates
                    </Link>
                  </button>
                  <button type="button" className="btn btn-danger mx-2" onClick={() => handleDelete(current.Member_Id)}>
                    delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary text-white mx-2">
        <Link href="/AddMember" className="book link-offset-2 link-underline link-underline-opacity-0">
          add
        </Link>
      </button>
    </div>
  );
};

export default Members;
