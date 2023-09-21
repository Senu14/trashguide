import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import './Navigation.scss';



function Navigation () {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>

     <Link to={`/`}>
			<div className="top-logo">
      <img className="logo" src={require('../../../Assets/Images/Layout/PNG/logo.png')} alt="logo" />
      <span>Affaldsguiden</span> 
      </div>
	</Link>
			<nav className='navbar' ref={navRef}>
				<a href="/">Forside</a>
				<a href="/Sort">Sortering</a>
				{/* <a href="/cards">CARDS</a> */}
				<a href="/Genbrug">Genbrugsstationer</a>
				<a href="/Bestil">Bestilbeholder</a>
				<img className="dowmLock" src={require('../../../Assets/Images/Layout/PNG/icon-unlock.png')} alt="unlock" /> 
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			
		</header>
	);
}

export default Navigation;


























