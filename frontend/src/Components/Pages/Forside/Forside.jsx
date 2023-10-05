import React from 'react';
import { Link } from 'react-router-dom'
import style from './Forside.module.scss';
import Carousel from '../DetailCards/SlideShow/Slide';


// Define the Forside component
const Forside = () => {
  return (
    <>
   <article>
    <div className={style.cotainer}>
    <Carousel />
     
      <div className={style.find}>
      <p className={style.find1}>Find og anmeld genbrugsstationer</p>
    
    <div className={style.dubble}>
      <button className={style.first}>
      <Link to={`/Genbrug`}>
        Find station
      </Link>
        </button>
      <button className={style.secound}>
      <Link to={`/log`}>
        Log ind
      </Link>
        </button>
      </div>
      </div>
    

{/*The 1st section startes here*/}

    <section className={style.guide}>
      <div className={style.lap2}>


          <h2 className={style.nab}><span>
            </span>Din guide til sortering</h2>
          
          
       <p className={style.para}>Her kan du se hvordan du skal 
        sortere og hvad der skal i hvilke beholdere. 
        Du får også tips og tricks til, 
        hvordan du gør det nemt at sortere hjemme hos dig.</p>
      
        <Link to={`/Sort`}> 
        <button className={style.btn}>
          Se affaldsguide
        </button>
        </Link>


          <Link to={`/Bestil`}>  
          <button className={style.Thewhite}>
            Bestil storskrald
          </button>
          </Link>
      </div>
      
      <div>
      <img className={style.splash}src={require('../../../Assets/Images/trashcan/pexels-markus-spiske-3806764.jpg')} alt="Spiske" />
      </div>
    </section>
    

{/*The 2nd section startes here*/}

    <section className={style.guide}>
      <div>
        <img className={style.papekase} src={require('../../../Assets/Images/trashcan/pexels-shvets-production-7512823.jpg')} alt="Production" />
      </div>
      
      <div className={style.lap2}>
      <h2 className={style.nab}>Bestil din nye affaldsbeholder</h2>
      <p className={style.para}>when an unknown 
        printer took a galley of type and scramble 
        it to make a type specimen book. 
        It has survived not only</p>
      
      <button className={style.btn3}>
      <Link to={`/Bestil`}>
        Bestil nu
      </Link>
      
        
        </button>
      </div>
      
    </section>

<div>
<img className={style.wave} src={require('../../../Assets/Images/Layout/PNG/bg-wave-1.png')} alt="wave1" />
</div>
</div>
</article>
</>
    
  )
}
export default  Forside
