import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './GSD.module.scss'
import axios from "axios";

function GSDetaljer() {
  // state to store the data of the request as an object and not an array
  const [mana, setMana] = useState(null);

  // state to store the reviews of the request as an object
  const [reviews, setReviews] = useState(null);

  // get the id from the url using useParams
  const { id } = useParams();
  console.log("this is the id : ", id);

  // fetch data from the API when the component mounts
  useEffect(() => {
    // API URL with query parameters/
    const url = `http://localhost:4000/orgs/${id}`;
    // function to make the API request
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log("this is the result", result);
        // set the retrieved data in the state
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

// call the functions to fetch data and reviews
getData();
fetchReviews();
}, [id]);

return (
<>
<article className={style.wrap}>
<div className={style.pro}>
<div className={style.papair}>
      <h3>papair</h3>
     
        

      </div>
  {/* Render the data if available */}
  {mana && typeof mana === "object" && (
    <div>
      {/* Display data properties here */}
      <p>name: {mana.name}</p>
      <p>address: {mana.address}</p>
      <p>zipcode: {mana.zipcode}</p>
      <p>city: {mana.city}</p>
      <p>country: {mana.country}</p>
      <p>longitude: {mana.longitude}</p> {/* Fixed the typo here */}
      <p>latitude: {mana.latitude}</p>
    </div>
  )}

  <div>
    <h3>fetching the reviews for this one here : </h3>
    {reviews && Array.isArray(reviews) && reviews.length > 0 ? (
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
  </div>
  </article>
</>
);
}
export default GSDetaljer;
