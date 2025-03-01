import React from "react";

interface EducationCardProps {
	schoolName: string;
	location: string;
	degree: string;
	dates: string;
	imgSrc: string;
	bullets: any[];
	subColor?: string;
	description?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
	schoolName,
	location,
	degree,
	dates,
	imgSrc,
	bullets,
	subColor,
	description,
}) => {
	return (
		<div className="mb-20">
			<div className="flex flex-wrap items-center ">
				<div className="w-full sm:w-auto flex justify-center">
					<img
						src={imgSrc}
						className="mr-0 sm:mr-10  mb-6  md:mb-0 h-24 w-24  rounded-full bg-whippy"
					/>
				</div>

				<div className="flex justify-center sm:justify-between flex-1 flex-wrap text-center sm:text-left">
					<p className="md:text-3xl text-2xl">
						{schoolName}{" "}
						<span className="text-lg ">
							<span className="whitespace-no-wrap w-full md:w-auto">
								{location}.
							</span>{" "}
							<br />{" "}
							<span className="font-semibold" style={{ color: subColor }}>
								{degree}
							</span>
						</span>
					</p>
					<p>{dates}</p>
				</div>
			</div>

			{bullets.length > 0 && (
				<div className="mt-10">
					<ul className="list-disc pl-10">
						{bullets?.map((bullet: string) => (
							<li key={bullet}>{bullet}</li>
						))}
					</ul>
				</div>
			)}

			{!!description && <div className="mt-10">{description}</div>}
		</div>
	);
};

export default EducationCard;
