import React, { useEffect, useState } from "react";
import style from './Bbestilling1.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios'

 const Bbestilling1 = () => {
// State to store the list of events
   const [events, setEvents] = useState([]);

// Fetch data from the API when the component mounts
   useEffect(() => {
// API URL with query parameters/     
     const url = `http://localhost:4000/containers`;
// Function to make the API request
     const getData = async () => {
       try {
         const result = await axios.get(url);
        console.log(result);
// Set the retrieved data in the state
         setEvents(result.data);
       } catch (err) {
        console.error(err);
      }
     };

// Call the function to fetch data
   getData();
  }, [setEvents]);

   return (
    <>
    <article>
      <div className={style.collecter}>
      <div className={style.greenfild}>
      <img className={style.caunt}
          src={require('../../../Assets/Images/Layout/PNG/water-bottle.png')} 
          alt="Unsplashs" />
                   
 
      </div>
    <div className={style.products}>
    <div className={style.type}>
  <span>Trin 1</span>
    <h4>Vælg type</h4>
    <p>Tation argumentum et usu, dicit viderer 
      evertitur te has. Eu dictas concludaturque usu, 
      facete detracto patrioque an per, lucilius 
      pertinacia eu vel.</p>
    </div>

    <div className={style.sort3}>
         {events &&
           events.slice(0, 4).map((data) => {
             console.log(data);
             return (
               <figure key={data.id}>
                
                 <img className={style.sortimg}
                     src={`http://localhost:4000/Assets/Images/Icons/${data.icon_filename}`}
                     alt={data.name}
                   />
                    <label htmlFor={`data_${data.id}`}>
                    {data.name}
                    <input className="clickOnit"
                      type="radio"
                      name="data"
                      id={`data_${data.id}`}
                    />
                  </label>

               </figure>
             );
           })}
          </div>
          <button className={style.free}>
          <Link to={`/Bbestil2`}>
            Videre
          </Link>
          </button>
       </div>
       
       </div>
       <div>
<img className={style.wave} src={require('../../../Assets/Images/Layout/PNG/bg-wave-1.png')} alt="wave1" />
</div>

       </article>
      

</>
     
     
   );
 };

 export default Bbestilling1;



