// import React from "react";
// import  style from "./Form.module.scss";
// import { Link, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateFormObject } from "../../../redux/actions";

// const BuyTicket = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const formObject = useSelector((state) => state.formObject);




//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateFormObject({ ...formObject, [name]: value }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     console.log("Submit button clicked.");
//     console.log("Form data:", formObject);
//     // Submit the form data or perform any other actions here


//   };

//   return (
//     <>
//       <div className={style.newForm}>
//         <h2>Køb billet</h2>
//         <hr /> <hr />
//         <form className="Buy-Form" onSubmit={onSubmit}>
//           <div className="Buy-group">
//             <label htmlFor="firstname">Name</label>
//             <input
//               id="firstname"
//               name="firstname"
//               value={formObject.firstname}
//               onChange={handleInputChange}
//             />
//           </div>
         
          
//           <div className="Buy-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               id="email"
//               name="email"
//               value={formObject.email}
//               onChange={handleInputChange}
//             />
//           </div>{" "}

//           <div className="Buy-group">
//             <label htmlFor="telefon">Telefon:</label>
//             <input
//               id="telefon"
//               name="telefon"
//               value={formObject.telefon}
//               onChange={handleInputChange}
//             />
//           </div>{" "}

//           <div className="Buy-group">
//             <label htmlFor="address">VEJNAVN & NR:</label>
//             <input
//               id="address"
//               name="address"
//               value={formObject.address}
//               onChange={handleInputChange}
//             />
//           </div>{" "}
     
          
//             <div className="min-para">
//               <p>FIELDS MUST BE FILLED</p>
//             </div>
//           </div>
//           <div className="BuyB">
//             <Link to={`/confirme/${id}`}>
//               <button type="submit">SEND</button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default BuyTicket;
