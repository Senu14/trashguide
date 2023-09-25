import React, { useEffect, useState } from "react";
import axios from "axios";
import style from './GSD.module.scss';
import { BiComment } from 'react-icons/bi';
import { useParams } from "react-router-dom";
import { useAuth } from "../../../App/AuthProvider/Auth";


function GSDetaljer() {
  //state to store the data of the request as an object and not an array
  const [mana, setMana] = useState(null);
 

  //state to store the reviews of the request as an object
  const [reviews, setReviews] = useState(null);
  const [comment, setComment] = useState(""); // State for the comment
  const [stars, setStars] = useState(0); // State for star rating
  const [subject, setSubject] = useState("");
  const [authToken, setAuthToken] = useState(null);
  const { loginData, setLoginData } = useAuth();
  console.log("here is your login data", loginData);
 
//get the id from the url using useParams
  const { id } = useParams();


  
//fetch data from the API when the component mounts
  useEffect(() => {
    const accessToken = loginData; // Check for the correct key
    if (accessToken) {
      setAuthToken(accessToken);
    } 
    
// API URL with query parameters/
    const url = `http://localhost:4000/orgs/${id}`;
//function to make the API request
    const getData = async () => {
      try {
        const result = await axios.get(url);
//set the retrieved data in the state
        setMana(result.data);
      } catch (error) {
        console.log(error);
      }
    };

 //function to fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/reviews/${id}`);
      setReviews(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    console.log("the token is ", loginData);

//call the functions to fetch data and reviews
    getData();
    fetchReviews();  // Call the fetchReviews function when the component mounts
}, [id, loginData]);

  const handleStarClick = (starValue) => {
    setStars(starValue);
  };


  const handleReviewSubmit = async () => {
    try {
      const Date_created = new Date().toISOString(); // Generate the current date and time
     
      const res = await axios.post(
        "http://localhost:4000/reviews",
        {
          comment,
          num_stars: stars,
          subject, // Include subject in the request body
          org_id: id,
          date: Date_created,
        },
        {
          headers: {
            authorization: `Bearer ${loginData}`, // Include the auth token in the request headers
          },
        }
      );
      setComment("");
      setStars(0);
      console.log("Review submitted successfully:", res.data);
    } catch (error) {
      console.log("Error submitting review:", error);
    }
  };

  //  // Inside the GSDetaljer component
  //  const apiKey = "AIzaSyBWpWG3Wo-8pVMPcYXQXC7Zg7G2jBqlhGw";

  //  const getMapImage = () => {
  //    if (mana && mana.latitude && mana.longtitude) {
  //      const { latitude, longtitude } = mana;
  //      const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longtitude}&zoom=15&size=400x400&markers=color:red%7Clabel:A%7C${latitude},${longtitude}&key=${apiKey}`;
  //      return <img src={imageUrl} alt="Station Map" />;
  //    }
  //    return null;
  //  };




  return (
    <>
      <div className={style.googleMap}>
      <div className={style.insideDiv}>
      {/* src={`https://maps.google.com/maps?q=${data.longtitude},${data.latitude}&hl=es;&output=embed`} */}

        <img  className={style.Map}src={require('../../../../Assets/Images/Photos/small/Capture.PNG')} 
        alt="capture" />
     
      {mana && typeof mana === "object" && (
        <div>
           <p>{mana.longitude}</p>
          <p>{mana.latitude}</p>
          <p className={style.name}>{mana.name}</p>

{/* Reating stars */}          
    <div className={style.gold}>
    {[1, 2, 3, 4, 5].map((starValue) => (
    <span
      key={starValue}
      onClick={() => handleStarClick(starValue)}
      style={{ cursor: "pointer" }}
      >
    {starValue <= stars ? "★" : "☆"}
    </span>
    ))}
    </div>
{/* Display data properties here */}
    <p>{mana.address}</p>
    <p>{mana.zipcode}</p>
    <p>{mana.city}</p>
    <p>{mana.country}</p>
         
  </div>
  )}
     
    
  <div >
    <input className={style.Me}
      type="text"
      placeholder="subject"
      onChange={(e) => setSubject(e.target.value)}
      />



  <div className={style.star}>
      {[1, 2, 3, 4, 5].map((starValue) => (
      <span
      key={starValue}
      onClick={() => handleStarClick(starValue)}
      style={{ cursor: "pointer" }}
      >
      {starValue <= stars ? "★" : "☆"}
      </span>
    ))}
  </div>
  

    <textarea
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder="Skrive en anmeldelse..."
      />
    
  <button className={style.Br} onClick={handleReviewSubmit}>
    <BiComment  className={style.Bi}  size={15} color="s.$green" />
    Kommenter</button>
    <div className={style.MyReviews}>
      
       
  {reviews ? (
  reviews.map((review) => (
    <div key={review.id}>
    <p>{review.user.firstname}</p>
    <p>{review.subject}</p>
    <p>{review.num_stars}</p>
    <p>{review.comment}</p> {/* Log the comment here */}
    </div>
    ))
    ) : (
    <p className={style.comment}>No reviews available.</p>
    )}
  </div> 
  </div>
  </div>
 </div>
    </>
    
  );
}

export default GSDetaljer;




