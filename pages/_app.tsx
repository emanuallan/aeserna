import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-146649922-1"
				/>

				<script
					dangerouslySetInnerHTML={{
						__html: `
            			window.dataLayer = window.dataLayer || [];
            			function gtag(){dataLayer.push(arguments);}
            			gtag('js', new Date());
            			gtag('config', 'UA-146649922-1');
        				`,
					}}
				/>
			</Head>
			<div
				style={{ backgroundColor: "#050614" }}
				className="flex justify-center"
			>
				<div
					style={{ backgroundColor: "#050614" }}
					className={`h-full min-h-screen max-w-7xl w-full`}
				>
					<div className="mx-4 sm:mx-10 h-full min-h-screen flex flex-col justify-between">
						<div>
							<Menu />
							<Component {...pageProps} />
						</div>
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}

export default MyApp;
