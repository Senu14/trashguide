import React, { useEffect, useState } from "react";
import style from './Bbestilling2.module.scss';
import Form from "../Form/Form";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';// Used as react-hook-form
import { setSelectedValue } from "../../../../redux/actions";

const Bbestilling2 = () => {
  const [events, setEvents] = useState([]);
  const selectedData = useSelector((state) => state.selectedValue);
  console.log("Selected Data:", selectedData);

  useEffect(() => {
    const url = `http://localhost:4000/containers`;

    const getData = async () => {
      try {
        const result = await axios.get(url);
        setEvents(result.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [setEvents]);
  const containerId = selectedData ? selectedData.id : null;

   return (
    <>
    <article>

      <div className={style.collecter}>
      <div className={style.greenfild}>
      <img className={style.caunt}
          src={require('../../../../Assets/Images/Layout/PNG/bottle.png')} 
          alt="bottle" />
      </div>


    <div className={style.product}>
    <div className={style.type}>
  <span>Trin 2</span>
    <h4>Hvor skal den leveres?</h4>
    <p>Tation argumentum et usu, 
      dicit viderer evertitur te has. 
      Eu dictas concludaturque usu, 
      facete detracto patrioque an per, 
      lucilius pertinacia eu vel.</p>
    </div>

    <div className={style.NewOne}>
          <Form containerId={selectedData.id} />
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




