import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ExpandableDiv from '../AKDetaljer/Expandable/ExpandableDiv';
import style from './AKD.module.scss'
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
    <article className={style.wrapper}>
    <div className={style.protecter}>
     <div className={style.papair1}>
      <h3 className={style.klick}>papair</h3>
      <img 
        className={style.scrumple} 
        src={require('../../../../Assets/Images/Guide/Categories/papir-og-aviser.jpg')} 
        alt="scrumple " 
        />

      </div>


      <div className={style.papair2}>
      <img 
        className={style.pap} 
        src={require('../../../../Assets/Images/Icons/glasuld-stenuld_ut.png')} 
        alt="glas" 
        />
        <h3>Stenuld</h3>
      </div>


      <div className={style.papair2}>
      <img 
        className={style.pap} 
        src={require('../../../../Assets/Images/Icons/icon-asfalt.png')} 
        alt="asfalt" 
        />
        <h3>Asfalt</h3>
      </div>
    </div>
  <div>
   <img 
    className={style.wave} 
      src={require('../../../../Assets/Images/Layout/PNG/bg-wave-1.png')} 
      alt="waves" 
        />
     </div>
     </article>
    </>
  );
};

export default AKDetaljer;
