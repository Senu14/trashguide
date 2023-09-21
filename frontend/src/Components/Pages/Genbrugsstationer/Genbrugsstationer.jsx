import React, { useEffect, useState } from "react";
import style from "./GS.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Genbrugsstationer = () => {
  // State to store the list of events
  const [events, setEvents] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // API URL with query parameters/
    const url = `http://localhost:4000/orgs?attributes=id,name,address,zipcode,city`;
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


  return (
    <>
     <article>
      
       
          <div className={style.contents}>
            {events &&
              events.slice(0, 6).map((data) => {
                console.log(data);
                return (
                   <Link to={`/GSDetaljer/${data.id}`}>
                    <div className={style.data} key={data.id}>
                      <p>{data.name}</p>
                      <p>{data.address}</p>
                      <p>{data.zipcode}</p>
                      <p>{data.city}</p>
                      <hr />
                      
                     </div>
                    </Link>
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