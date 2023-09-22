import React, { useState } from 'react';
import style from './Expandable.module.scss'; 


//This content will expand and collapse when you click the arrow.

const ExpandableDiv = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-div ${expanded ? 'expanded' : ''}`}>
      <div className="header" onClick={toggleExpansion}>
        {title}
        <span className={`arrow ${expanded ? 'down' : 'up'}`}>&#9660;</span>
      </div>
      {expanded && <div className={style.content}>{children}</div>}
    </div>
  );
};

export default ExpandableDiv;


    
// {/* Render the data if available */}
// {mana && typeof mana === "object" && (
//   <div className={style.products}>
// {/* Display data properties here */}
//     <p className={style.name}>{mana.title}</p>
// {/* Loop through categories and render each one */}
//     {mana.categories.map((category) => (
//       <div key={category.id}>
//         <img className={style.pap}src={require(`../../../../Assets/Images/Guide/Guide/Icons/${category.icon_filename}`)} 
//       alt="pap" />
       
        
//       </div>
//     ))}
//   </div>
// )}