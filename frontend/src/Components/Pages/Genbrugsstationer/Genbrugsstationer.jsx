import React, { useEffect, useState } from "react";
import style from './GS.module.scss'
import axios from 'axios'

 const Genbrugsstationer = () => {
   // State to store the list of events
   const [events, setEvents] = useState([]);

   // Fetch data from the API when the component mounts
   useEffect(() => {
    const fatchData = async () => {
      try { 
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const jsonData = await response.json();
        setEvents(jsonData.slice(0,6));
      }catch (error) { 
        console.log('error fetching data:', error);
      }
    };
    fatchData();
  }, []);

   return (
    <>
    <section>
   
      <div className={style.products}>
         {events &&
           events.map((data) => {
             console.log(data);
             return (
               <div className={style.wrappe} key={data.id}>
                 <img className={style.sortimg}
                     src={`http://localhost:4000/Assets/Images/Guide/Categories/${data.filename}`}
                     alt={data.title}
                   />
                 
                 
                 
                 
               </div>
             );
           })}
           
       </div>
       <div>
<img className={style.wave} src={require('../../../Assets/Images/Layout/PNG/bg-waves-1.png')} alt="waves" />
</div>
       </section>
      

</>
     
     
   );
 };

 export default Genbrugsstationer;


