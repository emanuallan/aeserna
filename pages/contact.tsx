import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Menu from "../components/Menu";
import { SiMinutemailer } from "react-icons/si";
import Footer from "../components/Footer";
import { AiOutlineCheck } from "react-icons/ai";
import { BiError } from "react-icons/bi";

export default function ContactUs() {
	const [messageSent, setMessageSent] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	useEffect(() => setMessageSent(false), []);

	const errorMessage =
		"Oops! Something went wrong, please try again. If the error persists please use your preferred email provider and contact me at allanserna@gatech.edu";

	function sendEmail(e: any) {
		e.preventDefault();

		console.log(e.target);
		emailjs.sendForm("aeserna", "default", e.target, "user_PBmz8R5lkvlqA013lzgF7").then(
			(result) => {
				console.log(result.text);
				setMessageSent(true);
			},
			(error) => {
				console.log(error.text);
				setShowErrorMessage(true);
			}
		);
	}

	return (
		<div className="flex justify-center bg-charcoal ">
			<div className={`bg-charcoal min-h-screen h-full max-w-7xl w-full `}>
				<div className="mx-4 sm:mx-10 h-screen flex flex-col justify-between">
					<div>
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

								{messageSent ? (
									<span className=" mt-12 text-center text-xl uppercase flex justify-center tracking-widest">
										<span className="flex">
											Message has been sent <AiOutlineCheck className="ml-2 mt-2" />
										</span>{" "}
									</span>
								) : (
									<input
										className="mt-12 rounded bg-transparent text-3xl uppercase tracking-widest cursor-pointer"
										type="submit"
										value="Send"
									/>
								)}
								{showErrorMessage && !messageSent && (
									<span className=" mt-12 text-center text-xl lowercase flex justify-center tracking-widest">
										<BiError className=" text-4xl" />
										{errorMessage}
									</span>
								)}
							</div>
						</form>
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
}
