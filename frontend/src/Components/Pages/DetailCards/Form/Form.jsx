import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';// Used as react-hook-form
import style from "./Form.module.scss"; // Importing CSS styles
import axios from "axios";
import { Link } from 'react-router-dom'
import { setSelectedValue } from "../../../../redux/actions"; // Importing Redux action

function Form() {
// Define state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [address, setAddress] = useState("");

// Redux setup
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.selectedValue);

// Function to handle form submission
  const handleSend = async () => {
    const dataToSend = {
      fullname: name,
      email,
      telefon,
      address,
    };

// Send data to a backend server using AXIOS
    const result = await axios
      .post("http://localhost:4000/orders", dataToSend)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        // Reset the input fields after successful send
        setName("");
        setEmail("");
        setTelefon("");
        setAddress("");
      })
      .catch((error) => {
        console.error("Error sending data:", error.response);
      });
  };



// useEffect to fetch data from the API when the component mounts
  useEffect(() => {

// Define the URL to fetch data from
    const url = `http://localhost:4000/containers`;

// Function to fetch data asynchronously
    const getData = async () => {
      try {
        const result = await axios.get(url);
        dispatch(setSelectedValue(result.data)); // Update the Redux state with fetched data
      } catch (err) {
        console.error(err);
      }
    };

// Call the function to fetch data when the component mounts
    getData();
  }, [dispatch]);

  return (
    <>
  
      {/* Inputs for name, email, telefon, and address */}
      <div className={style.One}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Telefon"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* Button to send the data */}
        <button className={style.cuteB} 
        onClick={handleSend}>
        <Link to={`/`}> 
          Send
         </Link>
        </button>
      </div>
    </>
  );
}

export default Form;
