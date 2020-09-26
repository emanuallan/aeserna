import React, { useState } from "react";
import emailjs from "emailjs-com";
import Menu from "../components/Menu";
import { SiMinutemailer } from "react-icons/si";

export default function ContactUs() {
	const [darkMode, setDarkMode] = useState(true);

	function sendEmail(e: any) {
		e.preventDefault();

		console.log(e.target);
		emailjs.sendForm("aeserna", "default", e.target, "user_PBmz8R5lkvlqA013lzgF7").then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	return (
		<div className="flex justify-center bg-charcoal ">
			<div className={`${darkMode ? "bg-charcoal" : "bg-whippy"} h-screen max-w-7xl w-full `}>
				<div className="mx-10">
					<Menu />
					<form className="contact-form uppercase tracking-widest text-whippy" onSubmit={sendEmail}>
						<input type="hidden" name="contact_number" />
						<SiMinutemailer className="text-4xl mx-auto mb-8" />
						<div className="flex flex-col">
							<label>Name</label>
							<input
								autoFocus
								required
								className="bg-charcoal border-2 border-whippy rounded "
								type="text"
								name="user_name"
							/>
						</div>
						<div className="flex flex-col my-8">
							<label>Email</label>
							<input
								required
								className="bg-charcoal border-2 border-whippy rounded "
								type="email"
								name="user_email"
							/>
						</div>
						<div className="flex flex-col">
							<label>Message</label>
							<textarea
								required
								rows={7}
								className="bg-charcoal border-2 border-whippy rounded "
								name="message"
							/>

							<input
								className="mt-12 rounded bg-transparent text-3xl uppercase tracking-widest cursor-pointer"
								type="submit"
								value="Send"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
