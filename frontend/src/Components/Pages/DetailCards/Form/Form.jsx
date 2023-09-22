import React, { useEffect, useState } from "react";
import style from "./Form.module.scss"; // Importing CSS styles
import axios from "axios";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
function Form(containerId ) {
// Define state variables for form inputs
const [events, setEvents] = useState([]);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setTelephone] = useState("");
const [address, setAddress] = useState("");
const [zipcode, setZipcode] = useState("");
const [city, setCity] = useState("");

const dispatch = useDispatch();
const selectedData = useSelector((state) => state.selectedValue);

const handleSend = async () => {
  const dataToSend = {
    fullname: name,
    address,
    zipcode,
    city,
    email,
    phone,
    container_id: containerId,  // Include the container_id (data.id)
  };

  console.log("here is my data ", dataToSend)
  try {
    const result = await axios.post("http://localhost:4000/orders", dataToSend);
    console.log("Data sent successfully:", result.data);
    // Reset the input fields after successful send
    setName("");
    setEmail("");
    setTelephone("");
    setAddress("");
    setZipcode("");
    setCity("");
  } catch (error) {
    console.error("Error sending data:", error.response);
  }
};


// useEffect to fetch data from the API when the component mounts
  useEffect(() => {

// Define the URL to fetch data from
    const url = `http://localhost:4000/containers`;

// Function to fetch data asynchronously
    const getData = async () => {
      try {
        const result = await axios.get(url);
//        dispatch(setSelectedValue(result.data)); // Update the Redux state with fetched data
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
          placeholder="phone"
          value={phone}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />        <input
        type="text"
        placeholder="zipcode"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />        <input
      type="text"
      placeholder="city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />

        {/* Button to send the data */}
        <button className={style.cuteB} 
        onClick={handleSend}>
        <Link > 
          Send
         </Link>
        </button>
      </div>
    </>
  );
}

export default Form;
