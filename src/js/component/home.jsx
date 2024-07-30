import React from "react";
import Nav from "./nav.jsx";
import { Card } from "./card.jsx"
import { JumboTron } from "./jumbotron.jsx"
import { Footer } from "./footer.jsx"
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Nav />
			<JumboTron />
			<div className="d-flex">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
