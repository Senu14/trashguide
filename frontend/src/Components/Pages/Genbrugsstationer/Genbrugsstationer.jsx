import React, { useEffect, useState } from "react";
import style from "./GS.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";


const Genbrugsstationer = () => {
  // State to store the list of events
  const [events, setEvents] = useState([]);
  const [stars, setStars] = useState(0); // State for star rating

  

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // API URL with query parameters/
    const url = `http://localhost:4000/orgs?attributes=id,name,address,zipcode,city,longtitude,latitude`;
    const fatchData = async () => {
      try {
        const response = await axios.get(url);
        // const jsonData = await response.json();
        console.log(response);
        setEvents(response.data);
        // setEvents(jsonData.slice(0, 6));
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };
    fatchData();
  }, [setEvents]);

//define handleStarClick function  
  const handleStarClick = (starValue) => {
    setStars(starValue);
  };


  return (
    <>
     <article>
      
      <div className={style.contents}>
         
      {events &&
        events.slice(0, 6).map((data) => {
          console.log(data);
            return (
              
              <div className={style.data} key={data.id}>
                <Link to={`/GSDetaljer/${data.id}`}> 
              <img  className={style.mapImg}src={require('../../../Assets/Images/Photos/small/Capture.PNG')} 
        alt="capture" />
              {/* <p>{data.longtitude}</p>
              <p>{data.longtitude}</p>  */}
              <p className={style.station}>{data.name}</p>
              <p>{data.address}</p>
              <p>{data.zipcode}</p>
              <p>{data.city}</p>
              </Link>
                  <hr />
                  

{/* Reating stars    */}

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
  </div>

);
})}
</div>
  <div>
    <img
    className={style.cold}
    src={require("../../../Assets/Images/Layout/PNG/bg-wave-1.png")}
            alt="bg.wave"
          />
       </div>
      </article>
    </>
  );
};

export default Genbrugsstationer;