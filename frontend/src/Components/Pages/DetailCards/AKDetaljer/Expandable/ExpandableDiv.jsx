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
