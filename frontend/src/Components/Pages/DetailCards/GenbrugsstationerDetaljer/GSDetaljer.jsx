import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from './GSD.module.scss'

function GSDetaljer() {
  //state to store the data of the request as an object and not an array
  const [mana, setMana] = useState(null);

  //state to store the reviews of the request as an object
  const [reviews, setReviews] = useState(null);
  const [comment, setComment] = useState(""); // State for the comment
  const [stars, setStars] = useState(0); // State for star rating

  //get the id from the url using useParams
  const { id } = useParams();
  console.log("this is the id : ", id);

  //fetch data from the API when the component mounts
  useEffect(() => {
    // API URL with query parameters/
    const url = `http://localhost:4000/orgs/${id}`;
    //function to make the API request
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log("this is the result", result);
        //set the retrieved data in the state
        setMana(result.data);
        console.log(result.data); // Log the data object
      } catch (error) {
        console.log(error);
      }
    };

    //function to fetch reviews
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/reviews/${id}`);
        console.log("fetched reviews : ", response);
        setReviews(response.data);
        console.log("this is the response : ", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    //call the functions to fetch data and reviews
    getData();
    fetchReviews();
  }, [id]);

  const handleStarClick = (starValue) => {
    setStars(starValue);
  };

  const handleReviewSubmit = async () => {
    try {
// Submit the review using the comment and stars
 

      console.log("Comment:", comment);
      console.log("Stars:", stars);
      // Reset comment and stars
      setComment("");
      setStars(0);
    } catch (error) {
      console.log(error);
    }
  };

// Inside the GSDetaljer component
  const apiKey = "AIzaSyBWpWG3Wo-8pVMPcYXQXC7Zg7G2jBqlhGw";

  const getMapImage = () => {
    if (mana && mana.latitude && mana.longtitude) {
      const { latitude, longtitude } = mana;
      const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longtitude}&zoom=15&size=400x400&markers=color:red%7Clabel:A%7C${latitude},${longtitude}&key=${apiKey}`;
      return <img src={imageUrl} alt="Station Map" />;
    }
    return null;
  };

return (
<>
<article className={style.googleMap}>
<div className={style.markIt}>
      
        {getMapImage()}
        <img className={style.Map} src="https://cdn.wccftech.com/wp-content/uploads/2020/08/Google-Maps.jpg" alt="Map" />
     


     
     
        

  {/* Render the data if available */}
  {mana && typeof mana === "object" && (
    <div>
      {/* Display data properties here */}
      <p>{mana.name}</p>
      <div className={style.starts}>
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
      <p>{mana.address}</p>
      <p>{mana.zipcode}</p>
      <p>{mana.city}</p>
      <p>{mana.country}</p>
      <hr />
      <p>{mana.longitude}</p> {/* Fixed the typo here */}
      <p>{mana.latitude}</p>
    </div>
  )}

  <div>
   
    {reviews ? (
      reviews.map((review) => (
        <div key={review.id}>
          <p>By: {review.user.firstname}</p>
          <p>subject: {review.subject}</p>
          <p>num_stars: {review.num_stars}</p>
        </div>
      ))
    ) : (
      <p>No reviews available.</p>
    )}
  </div>

  <div>
  

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
          placeholder="Skriv en kommentar..."
        />
        <div className={style.lastClick}>
        <button  
          onClick={handleReviewSubmit}>
          Submit Review
        </button>
        </div>
         </div>
      </div>
  </article>
</>
);
}
export default GSDetaljer;
