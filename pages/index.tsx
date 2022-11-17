import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import EducationCard from "../components/EducationCard";
import { MdWork } from "react-icons/md";
import { ImRocket } from "react-icons/im";
import SkillCard from "../components/SkillCard";
import { AiOutlineCloudDownload } from "react-icons/ai";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiNextDotJs, SiMongodb, SiFirebase, SiTypescript } from "react-icons/si";

const Resume = () => {
	const CSSIcon = <FaCss3Alt className="text-4xl text-css" />;
	const ReactIcon = <FaReact className="text-4xl text-react" />;
	const NodeIcon = <FaNodeJs className="text-4xl text-node" />;
	const ReduxIcon = <SiRedux className="text-3xl text-redux" />;
	const NextJsIcon = <SiNextDotJs className="text-3xl text-black" />;
	const MongoIcon = <SiMongodb className="text-3xl text-mongo" />;
	const FirebaseIcon = <SiFirebase className="text-3xl text-firebase" />;
	const TailwindIcon = <SiTailwindcss className="text-3xl text-tailwind" />;
	const TypescriptIcon = <SiTypescript className="text-3xl text-css" />;

	const backendArray = [
		{
			imgSrc: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png",
			name: "Firebase",
		},
		{
			imgSrc: "https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png",
			name: "Mongo",
		},
		{
			imgSrc: "https://iconape.com/wp-content/files/za/33897/png/aws-api-gateway.png",
			name: "AWS API GateWay",
		},
		{
			imgSrc: "https://seeklogo.com/images/A/aws-lambda-logo-AE95CFC218-seeklogo.com.png",
			name: "AWS LAMBDA",
		},
		{
			imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png",
			name: "AWS DYNAMODB",
		},
		{
			imgSrc: "https://miro.medium.com/max/512/1*m5Wc6pyKsGIf2SnYbUH3PQ.png",
			name: "AWS COGNITO",
		},
	];

	const framworksAndLibrariesArray = [
		{
			imgSrc: "https://miro.medium.com/max/900/1*KANHihva9OdXx2-V5EDn3g.png",
			name: "React (JS & Native)",
		},
		{
			imgSrc: "https://cdn.iconscout.com/icon/free/png-512/redux-283024.png",
			name: "Redux",
		},
		{
			imgSrc: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
			name: "NodeJS",
		},
		{
			imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png",
			name: "TailwindCSS",
		},
		{
			imgSrc: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
			name: "Chakra UI",
		},
		{
			imgSrc: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
			name: "Next. JS",
		},

		{
			imgSrc: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png",
			name: "Express",
		},
		{
			imgSrc: "https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png",
			name: "Unity",
		},
		{
			imgSrc: "https://cdn.iconscout.com/icon/premium/png-512-thumb/selenium-2-570545.png",
			name: "Selenium",
		},
	];

	const programmingLanguagesArray = [
		{
			imgSrc: "https://images.vexels.com/media/users/3/166403/isolated/preview/a5a33bf3004830a2bd581e9fa65de660-javascript-programming-language-icon-by-vexels.png",
			name: "JavaScript",
		},
		{
			imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png",
			name: "HTML",
		},
		{
			imgSrc: "https://blog.artegrafico.net/wp-content/uploads/2019/02/css.png",
			name: "CSS",
		},
		{
			imgSrc: "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
			name: "JAVA",
		},
		{
			imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
			name: "PYTHON",
		},
		{
			imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
			name: "TypeScript",
		},
	];

	const workArray = [
		{
			schoolName: "Software Engineer",
			location: "ATLANTA, GA",
			degree: "GigLabs",
			dates: "November 2021 - current",
			imgSrc: "https://media-exp1.licdn.com/dms/image/C560BAQH9OoLPe6o9Mw/company-logo_200_200/0/1658379636694?e=1676505600&v=beta&t=In1F_k3hAih7XlBuv8vvYde3zngAKpKaFWe3ifyVsjA",
			bullets: [
				<div>
					Leading feature development of our{" "}
					<a href="https://www.gigantik.io/" target="_blank" style={{ textDecoration: "underline" }}>
						GIGANTIK Platform
					</a>{" "}
					which includes the consumer marketplace and CMS dashboard
				</div>,
			],
			subColor: "#34FFCC",
		},
		{
			schoolName: "Software Engineer G6",
			location: "SAN JOSE, CA",
			degree: "Cisco",
			dates: "JUNE 2021 - Nov. 2021",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Hz8USw_vwprOtrw4-QUhsrNquji_QMbF-nwmJ-7CzYI9Nrn2knvdoaZgjkI8AD7fH2I&usqp=CAU",
			bullets: [
				<div>
					Supported the{" "}
					<a
						href="https://github.com/webex/webex-js-sdk"
						target="_blank"
						style={{ textDecoration: "underline" }}
					>
						Open-Source JavaScript SDK
					</a>{" "}
					for Cisco Webex's web application platform
				</div>,
			],
			subColor: "#00BDEC",
		},
		{
			schoolName: "Software Development Engineer II",
			location: "IRVING, TX",
			degree: "MICHAELS",
			dates: "NOV. 2020 - jUNE 2021",
			imgSrc: "https://media.glassdoor.com/sqll/945/michaels-stores-squarelogo-1516299389115.png",
			bullets: [
				"FE Developer for Michaels product dispute flow and customer care portal in ReactJS & Redux",
				"Diagrammed user flows, planned data structures, and held weekly demo meetings with the company CIO",
				"Formed documentation for requirements, coding practices, and code reviews",
			],
			subColor: "#CF202F",
		},
		{
			schoolName: "Web Application Developer Freelancer",
			location: "remote start-up",
			degree: "Scholars",
			dates: "May 2020 - Nov. 2020",
			imgSrc: "https://media-exp1.licdn.com/dms/image/C560BAQFHW-IqiWlxtA/company-logo_200_200/0/1654722667861?e=1674086400&v=beta&t=Vba7bsz4ecbmVQfW-f0O-m6MyHm0V1BeqeP1tQ1ETTY",
			bullets: [
				"Significantly expanded the feature set of the Scholars web platform with React, Redux, Tailwind, and Firebase.",
				"Developed several high-level features on the application like the Blog (w/ full CRUD functionality), the Job Board, and all of the Student Resources and Company Profiles, amongst others.",
				"Integrated Greenhouse (ATS) onto the platform for companies so that they can connect their Greenhouse account to their Scholars account.",
				"Implemented imports from CSV and Greenhouse while also polishing the data to create a dashboard for data visualizations.",
			],
			subColor: "#C29DFB",
		},

		{
			schoolName: "Web Application Developer Freelancer",
			location: "remote start-up",
			degree: "TallySight",
			dates: "July 2020 - SEPT. 2020",
			imgSrc: "data:image/png;base64,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",
			bullets: [
				"Completely revamped Tallysight's web application with React, Next.js, React BootStrap, and TypeScript.",
				"Developed a custom image generator that allowed sports analysts to share their insights onto major social media platforms, bringing new traffic to the site.",
				"Implemented react components with the power to search, sort, and filter through large amounts of sports data.",
				"Developed a multi-upload tool for the content team, significantly improving their efficiency in uploading content onto the Mongo database.",
			],
			subColor: "#29AAE1",
		},

		{
			schoolName: "Front-End Web Developer Intern",
			location: "St. Louis, MO",
			degree: "New Balance",
			dates: "Aug. 2019 - Dec. 2019",
			imgSrc: "https://emanuallan.github.io/img/new-balance.jpg",
			bullets: [
				"Developed page banners, product headers, navigator tiles, and marketing emails using HTML, CSS, and JavaScript.",
				"Optimized product page load times by up to 25% by compressing graphics and minifying CSS.",
				"Peer-reviewed other team members' code, checking for responsiveness and cleanliness of code implementation.",
				"Scripted a web crawler with a Chrome Webdriver from Selenium that scans merchandise and detects price and stock changes through data handling and CSV file i/o with Python.",
			],
			subColor: "#E41737",
		},
		{
			schoolName: "Software Developer Intern",
			location: "Alpharetta, GA",
			degree: "Dispersive Networks",
			dates: "May. 2019 - Aug. 2019",
			imgSrc: "https://emanuallan.github.io/img/dispersive-logo.png",
			bullets: [
				"Built a CRUD web application with ReactJS and Redux that manages permissions for certain applications based on positions in a visual workflow tree, streamlining the onboarding process.",
				"Implemented various tree updating algorithms like insertion, deletion, editing, and drag & drop.",
				"Furthered the project by developing a dashboard that shared further info. and added search & sort functionality.",
				"Utilized RESTful API's with GoLang and performance-tested them with Postman.",
			],
			subColor: "#0183FD",
		},
	];

	const educationArray = [
		{
			schoolName: "Georgia Institute of Technology",
			location: "Atlanta, GA",
			degree: "Master of Science in Computer Science (OMSCS)",
			dates: "Aug. 2021 - CURRENT",
			imgSrc: "https://emanuallan.github.io/img/gt-2.png",
			bullets: [
				"Specializing in Computer Systems and Networks",
				"PROGRAM GPA: 3.7",
				"Courses taken so far: Computer Networks, Network Security, DB System Concepts & Design",
			],
			subColor: "#B3A26A",
		},
		{
			schoolName: "Georgia Institute of Technology",
			location: "Atlanta, GA",
			degree: "Bachelor of Science in Computer Science",
			dates: "Aug. 2015 - May 2020",
			imgSrc: "https://emanuallan.github.io/img/gt-2.png",
			bullets: [
				"Graduated with High Honors and as a SanDisk Scholar",
				"Major GPA: 3.6, Cumulative GPA: 3.4",
				"Focus: People & Media (HCI)",
				"Minor: Sports, Society, and Technology from the GT School of History and Sociology",
			],
			subColor: "#B3A26A",
		},
		{
			schoolName: "Hume-Fogg Academic High School",
			location: "Nashville, TN",
			degree: "High School and Cambridge Research Diploma",
			dates: "Aug. 2011 - May 2015",
			imgSrc: "https://emanuallan.github.io/img/hfa.jpg",
			bullets: [
				"Graduated Top 10% of the class from the #49 Nationally Ranked High School in the United States",
				"Performed a 2 year Cambridge Research on immigration patterns from Latin America to the United States",
				"2x All-District, 2x All-Regional, 2x All Mid-State, 1x All-State, 1x All-Star Athlete for Men's Varsity Soccer",
			],
			subColor: "#0468CC",
		},
	];

	return (
		<>
			<div className="text-whippy uppercase tracking-widest">
				<div className="h-screen md:h-auto">
					<div className="flex justify-center items-center">
						<a href="https://opensea.io/aeserna" target="_blank">
							<img
								src="/imgs/allan-nft.png"
								height="350px"
								width="350px"
								style={{ borderRadius: 1000, border: "15px solid white" }}
							/>
						</a>
					</div>
					<div className="flex  justify-center my-10">
						<a href="/docs/resume.pdf" target="_blank" download>
							<button className="text-whippy uppercase tracking-widest flex p-4">
								<AiOutlineCloudDownload className="text-2xl mr-2" />
								Download Resume
							</button>
						</a>
					</div>
				</div>

				<div className="flex mb-10">
					<MdWork className="text-xl mr-2" />
					<p>Experience</p>
				</div>

				{workArray.map((work) => {
					return (
						<>
							<EducationCard
								key={work.degree}
								schoolName={work.schoolName}
								location={work.location}
								degree={work.degree}
								dates={work.dates}
								imgSrc={work.imgSrc}
								bullets={work.bullets}
								subColor={work.subColor}
							/>
							{work.degree !== "Scholars" && work.degree !== "TallySight" ? null : work.degree ===
							  "Scholars" ? (
								<div className="mb-20">
									<FeaturedProjectCard
										imgSrc="https://secureservercdn.net/198.71.233.109/phy.b29.myftpupload.com/wp-content/uploads/2020/06/Match-Made.png"
										title={"Scholars"}
										info={
											"Scholars is a business recruiting platform that connects college students with employers for internships and entry-level positions."
										}
										icons={[ReactIcon, ReduxIcon, NodeIcon, TailwindIcon, FirebaseIcon]}
										color="#650CF5"
										logoUrl="https://media-exp1.licdn.com/dms/image/C560BAQFHW-IqiWlxtA/company-logo_200_200/0/1654722667861?e=1674086400&v=beta&t=Vba7bsz4ecbmVQfW-f0O-m6MyHm0V1BeqeP1tQ1ETTY"
										handle="scholars"
									/>
								</div>
							) : (
								<div className="mb-20">
									<FeaturedProjectCard
										imgSrc="https://tallysight.com/widget.png"
										title={"TallySight"}
										info="Tallysight is a next-generation platform that helps sports writers, analysts, & organizations showcase their insights and grow their brand."
										icons={[ReactIcon, NextJsIcon, TypescriptIcon, NodeIcon, CSSIcon, MongoIcon]}
										color="#29AAE1"
										handle="tallysight"
										logoUrl="data:image/png;base64,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"
									/>
								</div>
							)}
						</>
					);
				})}
			</div>

			<div className="text-whippy uppercase tracking-widest">
				<div className="flex mb-10 ">
					<GiGraduateCap className="text-2xl mr-2" />
					<p>Education</p>
				</div>

				{educationArray.map((edu) => (
					<EducationCard
						key={edu.schoolName}
						schoolName={edu.schoolName}
						location={edu.location}
						degree={edu.degree}
						dates={edu.dates}
						imgSrc={edu.imgSrc}
						bullets={edu.bullets}
						subColor={edu.subColor}
					/>
				))}
			</div>

			<div className="text-whippy uppercase tracking-widest pb-20">
				<div className="flex mb-10 ">
					<ImRocket className="text-xl mr-2" />
					<p>Skills</p>
				</div>
				<div className="pb-12">
					<div className="text-center pb-12">Programming Languages</div>

					<div className="flex justify-around flex-wrap">
						{programmingLanguagesArray.map((pl) => (
							<SkillCard key={pl.name} name={pl.name} imgSrc={pl.imgSrc} />
						))}
					</div>
				</div>
				<div className="pb-12">
					<div className="text-center pb-12">Frameworks & Libraries</div>

					<div className="flex justify-around flex-wrap">
						{framworksAndLibrariesArray.map((pl) => (
							<SkillCard key={pl.name} name={pl.name} imgSrc={pl.imgSrc} />
						))}
					</div>
				</div>
				<div className="pb-12">
					<div className="text-center pb-12">Back-end services</div>

					<div className="flex justify-around flex-wrap">
						{backendArray.map((pl) => (
							<SkillCard key={pl.name} name={pl.name} imgSrc={pl.imgSrc} />
						))}
					</div>
				</div>

				<div className="text-center ">
					<div className="pb-12">Additional Skills</div>

					<p>
						Graphic Design, Visual Medias, Video Production, Audio Production, Interpreting/Translating
						(Spanish/English)
					</p>
				</div>
			</div>

			<div className="flex  justify-center">
				<a href="/docs/resume.pdf" target="_blank" download>
					<button className="text-whippy p-4 ">
						<AiOutlineCloudDownload className="text-2xl" />
					</button>
				</a>
			</div>
			{/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
				<img className="w-full" src="https://emanuallan.github.io/img/allan.jpg" alt="Sunset in the mountains" />
				<div className="px-6 py-4 bg-whippy">
					<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
					<p className="text-gray-700 text-base ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
						Maiores et perferendis eaque, exercitationem praesentium.
					</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#photography
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#travel
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#winter
					</span>
				</div>
			</div> */}
		</>
	);
};

export default Resume;
