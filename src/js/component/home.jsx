import React from "react";
import Nav from "./nav.jsx";
import { Card } from "./card.jsx"
import { JumboTron } from "./jumbotron.jsx"
import { Footer } from "./footer.jsx"
import Anything from "./anything.js";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Nav />
			<JumboTron />
			<div className="d-flex justify-content-center">
				<Card src="https://picsum.photos/600/400?random=1" title="Random 1" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis. Quod tenetur delectus laboriosam"/>
				<Card src="https://picsum.photos/600/400?random=2" title="Random 2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis. Quod tenetur delectus laboriosam"/>
				<Card src="https://picsum.photos/600/400?random=3" title="Random 3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis. Quod tenetur delectus laboriosam"/>
				<Card src="https://picsum.photos/600/400?random=4" title="Random 4" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis. Quod tenetur delectus laboriosam"/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
