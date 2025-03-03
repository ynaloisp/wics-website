import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Mail } from "lucide-react";

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
        <div className="flex flex-col w-[45%] h-80 items-left justify-center items-center rounded-lg shadow-card padding-10 relative bg-white text-center mb-10 shadow-md">
            <span className="bg-[#f9679d] blur-3xl w-[100%] h-[100%] absolute top-0 left-0 z-0 opacity-25"></span>
            <span className="bg-white w-[95%] h-auto absolute top-0 left-0 justify-center rounded-lg z-2 shadow-xl"></span>
            <Image
                src={imageUrl}
                alt={title}
                className="rounded-[50%] w-32 h-32 shadow-card object-cover z-10"
                width={300}
                height={300}
            />
            <div className="card-content z-10">
                <h2 className="card-title z-10 text-black text-xl font-bold mt-3">
                    {title}
                </h2>
                <p className="card-description text-[#f9679d] text-sm font-normal mt-3">
                    {description}
                </p>
                <p className="card-description text-[#4B5563] text-sm font-normal mt-3">
                    {major}
                </p>
                <div className="flex justify-center mt-3">
                    <a
                        href="mailto: hunterwics@gmail.com"
                        target="_blank"
                        className="px-2"
                    >
                        <Mail className="hover:scale-150 hover:text-hotpink w-6 h-6  duration-1000 ease-in-out" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/hunterwics/"
                        target="_blank"
                        className="px-2"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="hover:scale-150 hover:text-hotpink w-6 h-6  duration-1000 ease-in-out"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/hunterwics/"
                        target="_blank"
                        className="px-2"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="hover:scale-150 hover:text-hotpink w-6 h-6  duration-1000 ease-in-out"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OfficerCard;
