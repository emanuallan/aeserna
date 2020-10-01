import React from "react";
//import Link from "next/link";
import { RiLinkedinLine, RiGithubLine, RiTwitterLine, RiMailLine } from "react-icons/ri";

const Menu = () => {
	return (
		<div
			className={`pt-6 
    
		text-whippy 
	flex flex-wrap font-semibold tracking-widest uppercase mb-16 menuMin:mb-20 `}
		>
			<span className=" font-bold text-xl  text-center menuMin:float-left w-full menuMin:w-auto">
				ALLAN E. SERNA
			</span>
			<div
				className={`py-4 menuMin:py-0 w-full md:w-3/4 lg:w-1/2 mx-auto flex flex-wrap justify-around 
        text-whippy  font-thin`}
			>
				<a href="/">HOME</a>

				<a href="/projects">PROJECTS</a>

				{/* <img
          className="w-8 h-8 rounded-full"
          src="https://emanuallan.github.io/apple-touch-icon.png"
          alt="Avatar of Jonathan Reinink"
        /> */}
				{/* <span className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
					{darkMode && "🌝"}
					{!darkMode && "🌚"}
				</span> */}
				<a href="/resume">RESUME</a>
				{/* <Link href="/about">
					<a>BLOG</a>
				</Link> */}
				{/* <Link href="/about">
					<a>ABOUT</a>
				</Link> */}

				<a href="/contact">CONTACT</a>
			</div>
			<div className=" w-full menuMin:w-32 flex justify-center ">
				<div className="flex flex-wrap justify-between w-32">
					<a href="https://www.linkedin.com/in/allan-serna/" target="_blank">
						<RiLinkedinLine className={`w-6 h-6 text-whippy`} />
					</a>
					<a href="https://github.com/emanuallan/" target="_blank">
						<RiGithubLine className={`w-6 h-6 text-whippy`} />
					</a>
					<a href="https://twitter.com/allaneserna" target="_blank">
						<RiTwitterLine className={`w-6 h-6 text-whippy`} />
					</a>
					<a href="mailto:allanserna@gatech.edu" target="_blank">
						<RiMailLine className={`w-6 h-6 text-whippy`} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
