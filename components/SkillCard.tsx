import React from "react";

interface SkillCardProps {
	name: string;
	icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
	return (
		<div className="inline-flex items-center px-3 py-2 m-1 rounded border border-gray-600">
			<span className="flex items-center justify-center mr-2 text-2xl leading-none">{icon}</span>
			<span className="text-sm normal-case tracking-normal">{name}</span>
		</div>
	);
};

export default SkillCard;
