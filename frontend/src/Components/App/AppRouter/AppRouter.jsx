import React from 'react';
import { Route, Routes } from 'react-router-dom';

//import All Pages

import Forside from '../../Pages/Forside/Forside';
import Sortering from '../../Pages/Affaldskategorier/Sortering';
import AKDetaljer from '../../Pages/DetailCards/AKDetaljer/AKDetaljer';
import ExpandableDiv from '../../Pages/DetailCards/AKDetaljer/Expandable/ExpandableDiv';
import Genbrugsstationer from '../../Pages/Genbrugsstationer/Genbrugsstationer';
import GSDetaljer from '../../Pages/DetailCards/GenbrugsstationerDetaljer/GSDetaljer';
import Bbestilling1 from '../../Pages/Beholderbestilling-1/BestilBeholder';
import Bbestilling2 from '../../Pages/DetailCards/Beholderbestilling-2/Bbestilling2';
import Login from '../../Pages/Login/Login';





const AppRouter = () => {
  return (
    <Routes>
      {/* The default route, leading to the "deferent" component */}
      <Route path="/" element={<Forside />} />
      <Route path="/Sort" element={<Sortering />} />
      {/* sort details page */}
      <Route path="/AKDetaljer/:id" element={<AKDetaljer />} />{" "}
      {/*going to maps page*/}
      <Route path="/Genbrug" element={<Genbrugsstationer />} />
      {/*going to maps page with details and where you can made a review*/}
      <Route path="/GSDetaljer/:id" element={<GSDetaljer />} />
      <Route path="/Expand" element={<ExpandableDiv />} />
      <Route path="/Bestil" element={<Bbestilling1 />} />
      <Route path="/Bbestil2" element={<Bbestilling2 />} />
      <Route path="/log" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
