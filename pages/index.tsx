import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import EducationCard from "../components/EducationCard";
import { MdWork } from "react-icons/md";
import { ImRocket } from "react-icons/im";
import SkillCard from "../components/SkillCard";
import { AiOutlineCloudDownload } from "react-icons/ai";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import {
	SiRedux,
	SiTailwindcss,
	SiNextDotJs,
	SiMongodb,
	SiFirebase,
	SiTypescript,
} from "react-icons/si";
import Testimonial from "../components/Testimonial";
import {
	backendArray,
	educationArray,
	framworksAndLibrariesArray,
	programmingLanguagesArray,
	workArray,
} from "./content";

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
	// const MySqlIcon = <SiMysql className="text-4xl text-css" />;

	return (
		<>
			<div className="text-whippy uppercase tracking-widest">
				<div className="h-screen md:h-auto">
					<div className="flex justify-center items-center">
						{/* <a href="https://opensea.io/aeserna" target="_blank"> */}
						<img
							src="/imgs/allan-nft.png"
							style={{
								objectFit: "cover",
								objectPosition: "top",
								height: 400,
								width: 400,
								borderRadius: 1000,
								border: "15px solid white",
							}}
						/>
						{/* </a> */}
					</div>
					<div className="flex  justify-center my-10">
						<a href="/docs/AllanSernaResume.pdf" target="_blank" download>
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
							{work.degree === "Gigantik (formerly GigLabs)" && (
								<div className="mb-20">
									<div className="flex flex-wrap md:flex-no-wrap  justify-center">
										<Testimonial
											name="Andrew Roberts"
											title="Gigantik Senior Technical Lead"
											email="drew@gigantik.io"
											statement="I worked very closely with Allan Serna for two years. He worked as a member of the development team at GigLabs while I was one of the lead developers. During this time, Allan proved himself to be a valuable team member by demonstrating not only excellent technical skills but also demonstrating the ability to work as a team to achieve common goals. Allan always strived to deliver high quality software and consistently went above and beyond his regular duties to ensure this high level of quality was met. 

							When Allan joined GigLabs, he was a recent college graduate. Our expectations for Allan were for his contributions to the team to be in line with a junior developer role. However, over the course of two years Allan demonstrated not only the ability to learn new skills quickly but to also apply them in the necessary situations. By the end of his time at GigLabs, Allan was contributing to the team in a senior developer capacity. His contributions to our platform will have a lasting impact for years to come.
							
							Allan is a very talented developer and I’m confident that Allan has the intelligence, work ethic, and communication skills to be a key contributor wherever he works. I couldn't recommend Allan more highly."
											imgSrc="https://media.licdn.com/dms/image/C4D03AQHHEyPMK6SctQ/profile-displayphoto-shrink_100_100/0/1575423275731?e=1705536000&v=beta&t=t_oWr2rtKK8xlJ3WOZh3GSNTHo6kPxYt1T_sWiSmPTc"
										/>

										<Testimonial
											name="Vince Oswalt"
											title="Gigantik Head of Engineering"
											email="vince@gigantik.io"
											statement="I had the pleasure to work with Allan for several years and I recommend him without reservation. Allan can handle anything you throw at him and he always impressed me with his ability to exceed expectations. Allan is a fantastic person and will definitely be an asset to any team fortunate enough to have him onboard. "
											imgSrc="https://media.licdn.com/dms/image/C4D03AQGnNKzRjvHZtQ/profile-displayphoto-shrink_100_100/0/1576517981087?e=1705536000&v=beta&t=-Hz8uujWoVterpDcmiaPuE4mJ_1hOVH9emopIcKwq6U"
										/>
									</div>
									{/* <FeaturedProjectCard
										imgSrc="/imgs/gigantik.png"
										title={"GIGANTIK"}
										info={
											"Gigantik is a platform that allows entertainment brands to bring their IP to life in the web3 space."
										}
										icons={[ReactIcon, ReduxIcon, NodeIcon, MySqlIcon]}
										color="#A680FF"
										logoUrl="/imgs/gigantik_logo.jpg"
										site="https://www.gigantik.io/sports-sponsors"
									/> */}
								</div>
							)}
							{work.degree === "Abode (formerly Scholars)" && (
								<div className="mb-20">
									<FeaturedProjectCard
										imgSrc="/imgs/scholars_widget.png"
										title={"Abode"}
										info={
											"Abode is a business recruiting platform that connects college students with employers for internships and entry-level positions."
										}
										icons={[
											ReactIcon,
											ReduxIcon,
											NodeIcon,
											TailwindIcon,
											FirebaseIcon,
										]}
										color="#03321E"
										logoUrl="/imgs/abode_logo.jpg"
										handle="abode"
									/>
								</div>
							)}
							{work.degree === "TallySight" && (
								<div className="mb-20">
									<FeaturedProjectCard
										imgSrc="/imgs/tallysight_widget.png"
										title={"TallySight"}
										info="Tallysight is a next-generation platform that helps sports writers, analysts, & organizations showcase their insights and grow their brand."
										icons={[
											ReactIcon,
											NextJsIcon,
											TypescriptIcon,
											NodeIcon,
											CSSIcon,
											MongoIcon,
										]}
										color="#29AAE1"
										handle="tallysight"
										logoUrl="/imgs/tallysight_logo.jpg"
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
						Graphic Design, Visual Medias, Video Production, Audio Production,
						Interpreting/Translating (Spanish/English)
					</p>
				</div>
			</div>

			<div className="flex  justify-center">
				<a href="/docs/AllanSernaResume.pdf" target="_blank" download>
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
