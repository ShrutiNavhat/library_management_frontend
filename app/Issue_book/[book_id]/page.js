"use client"
import React, { useState } from 'react';
import axios from 'axios'; 

function Issue() {
  const [inputs, setInputs] = useState({
        Id: '',
        Book_Id: '',
        Member_Id: '',
        Amount_paid: '',
        Quantity: '',
        Issue_date: '',
        Return_date: '',
      });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://127.0.0.1:5000/transactions/add', inputs)
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
                <label htmlFor="Id" className="ml-2" style={{ marginBottom: '20px' }}>
                Id
                </label>
                <input
                type="text"
                className="form-control"
                id="Id"
                name="Id"
                placeholder="Enter..."
                onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="Book_Id" className="ml-2" style={{ marginBottom: '20px' }}>
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
                <label htmlFor="Amount paid" className="ml-2" style={{ marginBottom: '20px' }}>
                Amount paid
                </label>
                <input
                type="text"
                className="form-control"
                id="Amount paid"
                name="Amount paid"
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
                id="Quantity"
                name="Quantity"
                placeholder="Enter..."
                onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="Return_date" className="ml-2" style={{ marginBottom: '20px' }}>
                Return_date
                </label>
                <input
                type="text"
                className="form-control"
                id="Return_date"
                name="Return_date"
                placeholder="Enter..."
                onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="Issue_date" className="ml-2" style={{ marginBottom: '20px' }}>
                Issue_date
                </label>
                <input
                type="text"
                className="form-control"
                id="Issue_date"
                name="Issue_date"
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

export default Issue;













// "use client"
// import { useEffect, useState } from "react";
// import axios from 'axios';

// const Issue = () => {
//   const [members, setMembers] = useState([]);
//   const [inputs, setInputs] = useState({
//     Id: '',
//     Book_Id: '',
//     Member_Id: '',
//     Amount_paid: '',
//     Quantity: '',
//     Issue_date: '',
//     Return_date: '',
//   });



//   // const handleMemberChange = (event) => {
//   //   const { value } = event.target;
//   //   setMembers((prevValues) => ({ ...prevValues, Member_Id: value }));
//   // };


//   // useEffect(() => {
//   //   axios.get('http://127.0.0.1:5000/Members/data')
//   //     .then((response) => {
//   //       const responseData = response.data.data;
//   //       console.log(responseData);
//   //       setMembers(responseData);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error fetching members data:', error);
//   //     });
//   // }, []);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setInputs((prevValues) => ({ ...prevValues, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post('http://127.0.0.1:5000/transactions/add', inputs)
//       .then((response) => {
//         console.log('Transaction added:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error adding transaction:', error);
//       });
//   };

//   return (
//     <>
//       <div className="Isuue_book">
//         <form className="d-flex flex-column mb-3" onSubmit={handleSubmit}>
//         <div className="form-group mb-3">
//             <label htmlFor="Id" className="ml-2" style={{ marginBottom: '20px' }}>
//             Id
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="Id"
//               name="Id"
//               placeholder="Enter..."
//               onChange={handleChange}
//               value={inputs.Id}
//             />
//         </div>
//         <div className="form-group mb-3">
//             <label htmlFor="Book_Id" className="ml-2" style={{ marginBottom: '20px' }}>
//             Book_Id
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="Book_Id"
//               name="Book_Id"
//               placeholder="Enter..."
//               onChange={handleChange}
//               value={inputs.Book_Id}
//             />
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="Member_Id" className="ml-2" style={{ marginBottom: '20px' }}>
//               Member_Id
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="Member_Id"
//               name="Member_Id"
//               placeholder="Enter..."
//               onChange={handleChange}
//               value={inputs.Member_Id}
//             />
//               {/* {members && members.map((member) => (
//                 <option key={member.Member_Id} value={member.Member_Id}>
//                   {member.Member_Id}
//                 </option> */}
//               {/* ))} */}
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="Amount_paid" className="ml-2" style={{ marginBottom: '20px' }}>
//             Amount_paid
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="Amount_paid"
//               name="Amount_paid"
//               placeholder="Enter..."
//               onChange={handleChange}
//               value={inputs.Amount_paid}
//             />
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="Amount_paid" className="ml-2" style={{ marginBottom: '20px' }}>
//             Quantity
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="Quantity"
//               name="Quantity"
//               placeholder="Enter..."
//               onChange={handleChange}
//               value={inputs.Quantity}
//             />
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="Issue_date" className="ml-2" style={{ marginBottom: '20px' }}>
//               Issue_date
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="Issue_date"
//               name="Issue_date"
//               placeholder="Enter..."
//               onChange={handleChange}
//               value={inputs.Issue_date}
//             />
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="Return_date" className="ml-2" style={{ marginBottom: '20px' }}>
//               Return_date
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="Return_date"
//               name="Return_date"
//               placeholder="Enter..."
//               onChange={handleChange}
//               value={inputs.Return_date}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary my-3">
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default Issue;
