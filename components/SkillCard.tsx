import React from "react";

interface SkillCardProps {
	name: string;
	icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
	return (
		<div
			style={{ minWidth: "20em" }}
			className="flex flex-col items-center justify-center px-4 py-4 m-4 mt-4 bg-whippy border border-gray-300 rounded sm:mt-0"
		>
			<div className="w-24 h-24 mb-6 flex items-center justify-center">{icon}</div>
			<p className="text-lg text-center text-charcoal font-semibold">{name}</p>
		</div>
	);
};

export default SkillCard;
