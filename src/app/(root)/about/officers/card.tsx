import React from "react";
import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    major: string;
    imageUrl: string;
}

const OfficerCard: React.FC<CardProps> = ({
    title,
    description,
    major,
    imageUrl,
}) => {
    return (
        <div className="flex flex-col w-[40%] h-80 items-left justify-center items-center rounded-lg shadow-card padding-10 relative bg-white text-center">
            <span className="bg-[#f9679d] blur-xl w-[100%] h-[100%] absolute top-0 left-0 z-0 opacity-25"></span>
            <span className="bg-white w-[95%] h-auto absolute top-0 left-0 opacity-80 justify-center rounded-lg z-2"></span>
            <Image
                src={imageUrl}
                alt={title}
                className="rounded-[50%] w-[30%] shadow-card object-cover z-10"
                layout="responsive"
                width={300}
                height={300}
            />
            <div className="card-content z-10">
                <h2 className="card-title z-10 text-black text-xl font-bold">
                    {title}
                </h2>
                <p className="card-description text-[#f9679d] text-sm font-normal">
                    {description}
                </p>
                <p className="card-description text-[#4B5563] text-sm font-normal">
                    {major}
                </p>
            </div>
        </div>
    );
};

export default OfficerCard;
