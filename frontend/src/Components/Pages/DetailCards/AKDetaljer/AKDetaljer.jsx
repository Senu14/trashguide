import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



  const AKDetaljer = () => {
//state to store the result of the request as an object and not an array
  const [mana, setMana] = useState(null);

//get the id from the url using useParams
  const { id } = useParams();
  console.log("this is the id : ", id);

//fetch data from the API when the component mounts
        useEffect(() => {
// API URL with query parameters/
        const url = `http://localhost:4000/section/${id}`;
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

//call the function to fetch data
    getData();
  }, [id]);


  return (
    <>
      <h1>this is details page of garbage type</h1>
{/* Render the data if available */}
      {mana && typeof mana === "object" && (
        <div>
{/* Display data properties here */}
          <p>Title: {mana.title}</p>
          <p>Description: {mana.description}</p>
          <p>color: {mana.color}</p>
{/* Loop through categories and render each one */}
          {mana.categories.map((category) => (
            <div key={category.id}>
              <p>Category Title: {category.title}</p>
              <p>Icon Filename: {category.icon_filename}</p>
              <p>Image Filename: {category.image_filename}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AKDetaljer;
