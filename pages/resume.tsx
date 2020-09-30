import React from "react";
import Menu from "../components/Menu";
import { GiGraduateCap } from "react-icons/gi";
import EducationCard from "../components/EducationCard";
import { MdWork } from "react-icons/md";
import { ImRocket } from "react-icons/im";
import SkillCard from "../components/SkillCard";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Footer from "../components/Footer";

//border-b-2 border-yikyak
const Resume = () => {
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
			imgSrc: "https://symbols-electrical.getvecta.com/stencil_261/6_aws-dynamodb.7c3cd3983c.png",
			name: "AWS DYNAMODB",
		},
	];

	const framworksAndLibrariesArray = [
		{
			imgSrc: "https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png",
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
			imgSrc:
				"https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1593769247/tailwind-css-logo.svg",
			name: "TailwindCSS",
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
			imgSrc:
				"https://images.vexels.com/media/users/3/166403/isolated/preview/a5a33bf3004830a2bd581e9fa65de660-javascript-programming-language-icon-by-vexels.png",
			name: "JavaScript",
		},
		{
			imgSrc:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png",
			name: "HTML",
		},
		{
			imgSrc:
				"https://banner2.cleanpng.com/20180704/qpr/kisspng-cascading-style-sheets-logo-css3-html-web-developm-5b3d40a4d013e0.7927254715307409008523.jpg",
			name: "CSS",
		},
		{
			imgSrc: "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
			name: "JAVA",
		},
		{
			imgSrc:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
			name: "PYTHON",
		},
		{
			imgSrc:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
			name: "TypeScript",
		},
	];

	const workArray = [
		{
			schoolName: "Full-Stack Software Developer Contractor",
			location: "remote start-up",
			degree: "TallySight",
			dates: "July 2020 - current",
			imgSrc:
				"https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/zbo6ohbkoda2dww7j7io",
			bullets: [
				"Currently working on the front-end of the new UI redesign release, with ReactJS and Next.js",
				"Revamped the uploading in admin portal, to reduce errors for the content team by implementing a dynamic excel-like table",
			],
			subColor: "#29AAE1",
		},
		{
			schoolName: "JavaScript Developer Contractor",
			location: "remote start-up",
			degree: "Scholars",
			dates: "May 2020 - current",
			imgSrc:
				"https://media-exp1.licdn.com/dms/image/C4E0BAQHPZloeKujdzw/company-logo_200_200/0?e=2159024400&v=beta&t=sPMZhft0EMlXU3cNUvnPpy0Kg46u5033VGQw7ex4nis",
			bullets: [
				"Utilized Firebase with data handling CSV parsers in JavaScript for our student-recruiting software that allows companies to upload, manage, and store talent through action creators in Redux.",
				"Designed platform podcast page and career guidance resources in ReactJS using Material UI and Tailwind CSS.",
				"Participated in weekly Scrum estimation meetings to plan projects and coordinate work assignments.",
			],
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
			schoolName: "Full-Stack Software Developer Intern",
			location: "Alpharetta, GA",
			degree: "Dispersive Networks, Inc.",
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
			degree: "Bachelor of Science in Computer Science",
			dates: "Aug. 2015 - May 2020",
			imgSrc: "https://emanuallan.github.io/img/gt-2.png",
			bullets: [
				"Graduated with High Honors and as a SanDisk Scholar",
				"Major GPA: 3.6, Cumulative GPA: 3.4",
				"Focuse: People & Media (HCI)",
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
		<div className="flex justify-center bg-charcoal ">
			<div className={`bg-charcoal min-h-screen h-full max-w-7xl w-full `}>
				<div className="sm:mx-10">
					<Menu />

					<div className="text-whippy uppercase tracking-widest">
						<div className="flex  justify-center">
							<a href="/docs/resume.pdf" target="_blank" download>
								<button className="text-whippy uppercase tracking-widest flex p-4">
									<AiOutlineCloudDownload className="text-2xl mr-2" />
									Download Resume
								</button>
							</a>
						</div>

						<div className="flex mb-10">
							<MdWork className="text-xl mr-2" />
							<p>Experience</p>
						</div>

						{workArray.map((work) => (
							<EducationCard
								key={work.schoolName}
								schoolName={work.schoolName}
								location={work.location}
								degree={work.degree}
								dates={work.dates}
								imgSrc={work.imgSrc}
								bullets={work.bullets}
								subColor={work.subColor}
							/>
						))}
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
								Graphic Design, Visual Medias, Video Production, Audio Production,
								Interpreting/Translating (Spanish/English)
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
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Resume;
