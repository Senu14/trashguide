import React, { useEffect, useState } from "react";
import style from './Bbestilling2.module.scss';
import { Link } from 'react-router-dom';
import NewForm from "../Form/NewForm";
import axios from 'axios'

 const Bbestilling2 = () => {
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
      <h1>this is my page</h1>
      <div className={style.collecter}>
      <div className={style.greenfild}>
      <img className={style.caunt}
          src={require('../../../../Assets/Images/Layout/PNG/bottle.png')} 
          alt="bottle" />
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

    <div className={style.NewOne}>
    <NewForm />
          </div>
          
       </div>
       
       </div>
       <div>
<img className={style.wave} src={require('../../../../Assets/Images/Layout/PNG/bg-wave-1.png')} alt="wave1" />
</div>

       </article>
      

</>
     
     
   );
 };

 export default Bbestilling2;




