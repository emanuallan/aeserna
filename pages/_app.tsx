import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-146649922-1" />

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
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
