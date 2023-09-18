import React from 'react';
import { Route, Routes } from 'react-router-dom';

//import All Pages
// import Home from '../../Pages/Home/Home';
import Forside from '../../Pages/Forside/Forside';
import Sortering from '../../Pages/Affaldskategorier/Sortering';
import AKDetaljer from '../../Pages/AK_Detaljer/AKDetaljer';
import Genbrugsstationer from '../../Pages/Genbrugsstationer/Genbrugsstationer';
import GSDetaljer from '../../Pages/GenbrugsstationerDetaljer/GSDetaljer';
import Bbestilling1 from '../../Pages/Beholderbestilling-1/BestilBeholder';
import Bbestilling2 from '../../Pages/Beholderbestilling-2/Bbestilling2';
import Login from '../../Pages/Login/Login';


//Layouts that wrapped the other pages
import Navigation from '../../Partials/Navigation/Navigation';

const AppRouter = () => {
  return (
    <Routes>
          {/* <Route index path="/" element={<Home />} /> */}
          <Route path= "/" element={<Forside />} />
          <Route path="/Sortering" element={<Sortering/>} />
          <Route path="/AKDetaljer" element={<AKDetaljer/>} />
          <Route path="/Genbrugsstationer" element={<Genbrugsstationer/>} />
          <Route path="/GSDetaljer" element={<GSDetaljer/>} />
          <Route path="/Bestilbeholder" element={<Bbestilling1/>} />
          <Route path="/Bbestilling2" element={<Bbestilling2/>} />
          <Route path="/log" element={<Login/>} />
         
    </Routes>
  )
}

export default AppRouter;
