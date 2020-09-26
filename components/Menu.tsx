import React, { useState } from "react";
import Link from "next/link";
import { RiLinkedinLine, RiGithubLine, RiTwitterLine, RiMailLine } from "react-icons/ri";

const Menu = () => {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div
			className={`py-3 
    ${darkMode ? "text-whippy" : "text-charcoal"} flex flex-wrap font-semibold tracking-widest uppercase mb-20 `}
		>
			<span className=" font-bold text-xl  text-center menuMin:float-left w-full menuMin:w-auto">
				ALLAN E. SERNA
			</span>
			<div
				className={`py-4 menuMin:py-0 w-full md:w-3/4 lg:w-1/2 mx-auto flex flex-wrap justify-around 
        ${darkMode ? "text-whippy" : "text-charcoal"} font-thin`}
			>
				<Link href="/">
					<a>HOME</a>
				</Link>
				<Link href="/projects">PROJECTS</Link>

				{/* <img
          className="w-8 h-8 rounded-full"
          src="https://aeserna.com/apple-touch-icon.png"
          alt="Avatar of Jonathan Reinink"
        /> */}
				{/* <span className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
					{darkMode && "🌝"}
					{!darkMode && "🌚"}
				</span> */}
				<Link href="/resume">RESUME</Link>
				{/* <Link href="/about">
					<a>BLOG</a>
				</Link> */}
				{/* <Link href="/about">
					<a>ABOUT</a>
				</Link> */}
				<Link href="/contact">
					<a>CONTACT</a>
				</Link>
			</div>
			<div className=" w-full menuMin:w-32 flex justify-center ">
				<div className="flex flex-wrap justify-between w-32">
					<a href="https://www.linkedin.com/in/allan-serna/" target="_blank">
						<RiLinkedinLine className={`w-6 h-6 ${darkMode ? "text-whippy" : "text-charcoal"}`} />
					</a>
					<a href="https://github.com/emanuallan/" target="_blank">
						<RiGithubLine className={`w-6 h-6 ${darkMode ? "text-whippy" : "text-charcoal"}`} />
					</a>
					<a href="https://twitter.com/allaneserna" target="_blank">
						<RiTwitterLine className={`w-6 h-6 ${darkMode ? "text-whippy" : "text-charcoal"}`} />
					</a>
					<a href="mailto:allanserna@gatech.edu" target="_blank">
						<RiMailLine className={`w-6 h-6 ${darkMode ? "text-whippy" : "text-charcoal"}`} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
