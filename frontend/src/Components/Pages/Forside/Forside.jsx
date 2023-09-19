import React from 'react';
import style from './Forside.module.scss';

const Forside = () => {
  return (
    <div className={style.cotainer}>
      <div className={style.find}>
      <p>Find og anmeld genbrugsstationer</p>
    
    <div className={style.dubble}>
      <button className={style.first}>Find station</button>
      <button className={style.secound}>Log ind</button>
      </div>
      </div>
    

{/*den 1st section startes here*/}

    <section className={style.guide}>
      <figure>
        <h2 className={style.nab}>Din guide til sortering</h2>
       <p className={style.para}>Her kan du se hvordan du skal 
        sortere og hvad der skal i hvilke beholdere. 
        Du får også tips og tricks til, 
        hvordan du gør det nemt at sortere hjemme hos dig.</p>
      
        <button className={style.btn}>Se affaldsguide</button>
      <button className={style.Thewhite}>Bestil storskrald</button>
      </figure>
      
      <figure>
      <img className={style.papekase}src={require('../../../Assets/Images/Photos/medium/papkasse.jpg')} alt="papkasse" />
      </figure>
    </section>
    
    {/*den 2st section startes here*/}

    <section className={style.guide}>
      <figure>
        
        <img className={style.papekase} src={require('../../../Assets/Images/Photos/medium/papkasse.jpg')} alt="papkasse" />
      </figure>
      
      <figure>
      <h2 className={style.nab}>Bestil din nye affaldsbeholder</h2>
      <p className={style.para}>when an unknown 
        printer took a galley of type and scramble 
        it to make a type specimen book. 
        It has survived not only</p>
      
      <button className={style.btn3}>Bestil nu</button>
      </figure>
      
    </section>

<div>
<img className={style.wave} src={require('../../../Assets/Images/Layout/PNG/bg-wave-1.png')} alt="wave1" />
</div>
</div>
   
    
  )
}
export default  Forside
