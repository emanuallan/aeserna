import React from "react";
import FeatureCard from "../../components/FeatureCard";
import {
	FaReact,
	FaNodeJs,
	FaCss3Alt,
	FaStar,
	// FaHtml5,
	// FaPython,
	// FaTrophy,
} from "react-icons/fa";
import {
	SiNextDotJs,
	SiTypescript,
	SiMongodb,
	// SiFirebase,
	// SiUnity,
	// SiD3DotJs,
	// SiAdobephotoshop,
	// SiJavascript,
	// SiRedux,
	// SiTailwindcss,
} from "react-icons/si"; //got from https://react-icons.github.io/search
import FeaturedProjectCard from "../../components/FeaturedProjectCard";
import Testimonial from "../../components/Testimonial";

//border-b-2 border-yikyak
const Scholars = () => {
	// const PythonIcon = <FaPython className="text-4xl text-python" />;
	// const FirebaseIcon = <SiFirebase className="text-3xl text-firebase" />;
	// const UnityIcon = <SiUnity className="text-3xl text-black" />;
	// const D3Icon = <SiD3DotJs className="text-3xl text-d3" />;
	// const PhotoshopIcon = <SiAdobephotoshop className="text-3xl text-react" />;
	// const TailwindIcon = <SiTailwindcss className="text-3xl text-tailwind" />;
	// const HTMLIcon = <FaHtml5 className="text-4xl text-html" />;
	// const ReduxIcon = <SiRedux className="text-3xl text-redux" />;
	// const JavascriptIcon = <SiJavascript className="text-3xl text-javascript" />;
	const CSSIcon = <FaCss3Alt className="text-4xl text-css" />;
	const ReactIcon = <FaReact className="text-4xl text-react" />;
	const NodeIcon = <FaNodeJs className="text-4xl text-node" />;
	const NextJsIcon = <SiNextDotJs className="text-3xl text-black" />;
	const MongoIcon = <SiMongodb className="text-3xl text-mongo" />;
	const TypescriptIcon = <SiTypescript className="text-3xl text-css" />;

	const features = [
		{
			title: "Custom Image Generator",
			tags: "Social Media Content Sharing",
			info: "Feature for Analysts on the platform that allows them to share picks for inidividual games or events (ex. NFL week 2). The generator creates a nice graphic for the Analyst based on their preferences which then allows them to download it and share it on social media platforms. This tool features the npm package html-to-image which also needed a proxy to work.",
			imgSrc: "/gifs/graphic-generator.gif",
			icons: [ReactIcon],
			code: "https://github.com/emanuallan/weather-app",
			demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
		},
		{
			title: "Game Analysis Filters",
			tags: "Data Filter, Search, and Sort",
			info: "Feature for site users that allows them to view game, spread, and over/under predictions from hundreds of analysts. Since games can feature so many analyst insights, I implemented functionalities that assist users to find what they need. Therefore, they can search for a particular analyst, see who picked a certain team, filter analysts to those of a particular organization, and more!",
			imgSrc: "/gifs/other-pros-modal.gif",
			icons: [ReactIcon],
			code: "https://github.com/emanuallan/weather-app",
			demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
		},
		{
			title: "Analyst Tools",
			tags: "Custom Components, Valid Input",
			info: "I had a part in implementing many of the fundamental tools for the Analysts on our platform; the Upcoming Events tab where an analyst can see all the games they're subscribed to (decided by the sports they follow) so they can submit their insight. This meant that I had to check for valid input from Analysts (valid links, valid scores, etc.) before they could submit. In addition, the Past Insights tab, where Analysts can see the records of their submitted insights and share them with a custom graphics generator.",
			imgSrc: "/gifs/analyst-tools.gif",
			icons: [ReactIcon],
			code: "https://github.com/emanuallan/weather-app",
			demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
		},
		{
			title: "Admin Portal",
			tags: "Multi-Upload, Efficiency",
			info: "Revamped the uploading in the site's admin portal, to reduce upload errors for the content team by implementing an excel-like table (using react handson table) that filters the proceeding column's dropdown options within each row. In other words, each cell has its own dropdown options which is dependent on the option selected in the cell right before it. This required data handling in our Express app which connected to our Mongo db.",

			icons: [ReactIcon],
			code: "https://github.com/emanuallan/weather-app",
			demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
		},
		{
			title: "Rankings",
			tags: "Dynamic Sorting",
			info: "Feature for users that allows them to filter through sports or events and allows them to view rankings of those analysts whom gave predictions, to ultimately discover who performed the best. Rankings and percentiles change as you filter by organization so you can see the top performers within each organization.",
			imgSrc: "/gifs/ranking.gif",
			icons: [ReactIcon],
			code: "https://github.com/emanuallan/weather-app",
			demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
		},
		{
			title: "Analyst Profile",
			tags: "Next.js Routing, Params, Queries",
			info: "The Analyst Profile page is perhaps the most exciting features of the platform as users can gather insights from a specific analyst all on one page (many of the components spoken in the 'Analyst Tools' card are featured here). This page allows users to search and filter through the insights, which is reflected in the URL. By sharing this URL, other users who click on it will arrive to an insights page with all the filters applied by the user who shared the link.",
			imgSrc: "/gifs/analyst-profile.gif",
			icons: [ReactIcon],
			code: "https://github.com/emanuallan/weather-app",
			demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
		},
	];

	return (
		<div className="text-whippy flex flex-col items-center">
			<div className=" w-full  mt-10 ">
				<div className="w-full">
					<FeaturedProjectCard
						imgSrc="https://tallysight.com/widget.png"
						title={"TallySight"}
						info="Tallysight is a next-generation platform that helps sports writers, analysts, & organizations showcase their insights and grow their brand."
						icons={[ReactIcon, NextJsIcon, TypescriptIcon, NodeIcon, CSSIcon, MongoIcon]}
						color="#29AAE1"
						handle="tallysight"
						logoUrl="data:image/png;base64,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"
					/>

					<div className="flex flex-wrap md:flex-no-wrap  justify-center">
						<Testimonial
							name="Masheed Ahadi"
							title="TallySight CTO"
							email="masheed@tallysight.com"
							statement="Allan is a talented and bright engineer that not only was a pleasure to work with everyday but has an amazing level of drive you rarely see in people.

										He was an incredible addition to our engineering team and was able to quickly execute and ship several high-impact features to help scale our product. Allan jumped right in to take on any task and was quickly able to grasp concepts and learn new technologies on the fly.
										
										He works extremely hard to become a better and better engineer, and it's been a pleasure to work with him and watch him grow over the past several months. I'm confident that he can tackle any problem thrown his way, and recommend him to any team without reservation. I would love for the opportunity to work with Allan to join my team again."
							imgSrc="https://pbs.twimg.com/profile_images/1291167402315587584/Rw4deqFL_400x400.jpg"
						/>
						{/* <Testimonial
										name="Francisco Jimenez"
										title="Scholars Head of Engineering"
										email="evan@quikfixjobs.com"
										statement="Allan was able to quickly jump into the Scholars platform and add high-level features. He has proved to be a reliable developer with a great understanding for React and Redux. His programming skills, matched with his enthusiasm, would make a great addition to any team!"
										imgSrc="https://ca.slack-edge.com/T3DUW6V2Q-U0177LCNVLH-d46bcf70b5b8-512"
									/> */}
					</div>
				</div>
			</div>

			<div className="flex self-start mt-10 mb-6 uppercase tracking-widest">
				<FaStar className="text-xl mr-2 " />
				<p>Features</p>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-1">
				{features?.map((f) => (
					<FeatureCard
						key={f.info}
						info={f.info}
						tags={f.tags}
						imgSrc={f.imgSrc}
						title={f.title}
						icons={f.icons}
						code={f.code}
						demo={f.demo}
					/>
				))}
			</div>
			<div className="flex self-start mt-16 mb-6 uppercase tracking-widest">
				<FaStar className="text-xl mr-2 " />
				<p>Top Partners</p>
			</div>
			<div className=" bg-white w-full min-h-64 p-10 flex flex-wrap md:flex-no-wrap items-center text-charcoal">
				<div className="flex items-center justify-around md:w-1/2 w-full flex-wrap sm:flex-no-wrap">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SportsIllustrated.svg/800px-SportsIllustrated.svg.png"
						alt="Sports Illustrated"
						className="h-16 w-auto my-4"
					/>
					<img
						src="https://media.pff.com/2018/06/PFFBall_Black-e1530132578167.png"
						alt="Pro Football Focus"
						className="h-10 sm:h-16 w-auto my-4"
					/>
				</div>
				<div className="items-center flex justify-around md:w-1/2 w-full flex-wrap sm:flex-no-wrap">
					<img
						src="https://www.sportradar.com/wp-content/uploads/sites/8/2014/06/fb_sp_logo.png"
						alt="SportsRadar"
						className="h-20 w-auto my-4"
					/>

					<img
						src="https://www.nlgja.org/2019/wp-content/uploads/sites/14/2019/07/ESPN-logo-2015-1.png"
						alt="ESPN"
						className="h-8 w-auto my-4"
					/>
				</div>
			</div>
		</div>
	);
};

export default Scholars;
