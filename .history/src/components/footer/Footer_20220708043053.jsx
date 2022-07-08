import React from "react";

import "./footer.scss";

import { Link, Route, Switch } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faYoutube,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";
import Contact from "../contact/Contact";

const Footer = () => {
	return (
		<div className="footer" style={{ backgroundImage: `url(${bg})` }}>
			<div className="footer__content container">
				<div className="footer__content__logo">
					<div className="logo1">
						<img src={logo} alt="" />
						<Link to="/">BiTrailer</Link>
					</div>
				</div>
				<div className="social-links">
					<h1>Follow me on : </h1>
					<a className="icon" href="https://www.facebook.com/abhisn.kcl/">
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
					<a
						className="icon"
						href="https://www.youtube.com/channel/UCOG7tiFlYn16xFTAAOFuOMw"
					>
						<FontAwesomeIcon icon={faYoutube} />
					</a>
					<a className="icon" href="https://www.instagram.com/abhisn_gaming/">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</div>
				<div className="footer__content__menus">
					<div className="footer__content__menu">
						<Switch>
							<Route exact path="../contact/Contact.jsx" component={Contact} />
						</Switch>
					</div>
					<div className="footer__content__menu">
						<Link className="about" to="/">
							About me
						</Link>
					</div>
					<div className="footer__content__menu">
						<Link className="privacy" to="/">
							Privacy policy
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
