import React from "react";
import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const OfficerCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="flex flex-col w-[40%] h-64 items-left justify-center items-center rounded-lg shadow-card padding-10 relative bg-white text-center">
            <span className="bg-[#f9679d] blur-xl w-[100%] h-[100%] absolute top-0 left-0 z-0 opacity-25"></span>
            <span className="bg-white w-[95%] h-auto absolute top-0 left-0 opacity-80 justify-center rounded-lg z-2"></span>
            <Image
                src={imageUrl}
                alt={title}
                className="card-image rounded-[50%] w-[30%] shadow-card object-cover"
                layout="responsive"
                width={10}
                height={10}
            />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default OfficerCard;
