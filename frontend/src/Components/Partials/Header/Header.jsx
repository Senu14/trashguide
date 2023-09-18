import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

export default function Header() {
  return (
    <div className='collected-Nav'>
      <header>
        <Navigation />
      
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
