"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function UpdateMember({ params }) {
  const [memberData, setMemberData] = useState(null);

  const fetchMemberData = () => {
    axios.get(`http://127.0.0.1:5000/Members/detail/${params.member_id}`)
      .then((response) => {
        setMemberData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
      });
  };

  useEffect(() => {
    fetchMemberData();
  }, [params.member_id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMemberData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (memberData) {
      axios.put(`http://127.0.0.1:5000/Members/update/${params.member_id}`, memberData)
        .then((response) => {
          console.log('Book updated:', response.data);
        })
        .catch((error) => {
          console.error('Error updating book data:', error);
        });
    } else {
      console.log('No data found for Book_Id:', params.member_id);
    }
  };

  return (
    <>
      <div className="AddMember">
        <form className="d-flex flex-column mb-3" onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="form-group mb-3">
            <label htmlFor="Name" className="ml-2" style={{ marginBottom: '20px' }}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={memberData?.Title || ''}
              id="Name"
              name="Name"
              placeholder={memberData?.Name}
              onChange={handleChange}
            />
          </div>
          {/* Author Input */}
          <div className="form-group mb-3">
            <label htmlFor="Phone_No" className="ml-2" style={{ marginBottom: '20px' }}>
              Phone No
            </label>
            <input
              type="text"
              className="form-control"
              value={memberData?.Phone_No || ''}
              id="Phone_No"
              name="Phone_No"
              placeholder={memberData?.Phone_No}
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

export default UpdateMember;
