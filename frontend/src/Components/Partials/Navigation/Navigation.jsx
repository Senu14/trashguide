import { useRef } from 'react';
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
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/">Forside</a>
				<a href="/Sortering">Sortering</a>
				{/* <a href="/cards">CARDS</a> */}
				<a href="/Genbrugsstationer">Genbrugsstationer</a>
				<a href="/Bestilbeholder">Bestilbeholder</a>
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


























