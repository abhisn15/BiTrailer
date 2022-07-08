import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

import Routes from "./config/Routes";

function App() {
	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<>
						<Contact />
						<Header {...props} />
						<Routes />
						<Footer />
					</>
				)}
			/>
		</BrowserRouter>
	);
}

export default App;
