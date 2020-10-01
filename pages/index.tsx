import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

//border-b-2 border-yikyak
const IndexPage = () => {
	return (
		<div className="flex justify-center bg-charcoal ">
			<div className={`bg-charcoal  h-full min-h-screen max-w-7xl w-full`}>
				<div className="mx-4 sm:mx-10 h-full min-h-screen flex flex-col justify-between">
					<div>
						<Menu />

						<div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1">
							<a href="/projects/tallysight">
								<img src="/gifs/social.gif" className="rounded  mx-auto" alt="Social Image Generator" />
							</a>
							<a href="/projects/scholars">
								<img src="/gifs/companysearch.gif" className="rounded   mx-auto" alt="Company Search" />
							</a>
							<a href="/projects">
								<img src="/gifs/newbalance.gif" className="rounded   mx-auto" alt="New Balance" />
							</a>

							<a href="/projects">
								<img src="/gifs/db-dispersive.gif" className="rounded   mx-auto" alt="Dispersive DB" />
							</a>

							<a href="/projects/scholars">
								<img
									src="/gifs/studentresources.gif"
									className="rounded   mx-auto"
									alt="Scholars
								"
								/>
							</a>
							<a href="/projects">
								<img
									src="/gifs/dispersivetree.gif"
									className="rounded  mx-auto"
									alt="Dispersive Interactive Tree"
								/>
							</a>
						</div>
					</div>

					<Footer />
				</div>
			</div>
		</div>
	);
};

export default IndexPage;
