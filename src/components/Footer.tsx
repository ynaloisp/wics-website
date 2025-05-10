import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="text-black py-8">
            <div className="container mx-auto px-10">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <div className="flex flex-row justify-between w-[90%] mx-auto items-center gap-8 text-600">
                        <h3 className="text-black font-bold text-l">
                            <Link
                                className="hover:text-hotpink transition duration-1000 ease-in-out"
                                href="/"
                            >
                                Hunter WiCS
                            </Link>
                        </h3>
                        <ul className="flex flex-col sm:flex-row sm:gap-8 items-center gap-2 text-sm  text-[#4B5563]">
                            <li>
                                <Link
                                    className="hover:text-hotpink"
                                    href="/about"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-hotpink"
                                    href="/events"
                                >
                                    Events
                                </Link>
                            </li>
                            {/* <li>
                <Link className="hover:text-hotpink " href="/events">
                  Events
                </Link>
              </li> */}
                            <li>
                                <Link
                                    className="hover:text-hotpink "
                                    href="/resources"
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-hotpink "
                                    href="/about/officers"
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-hotpink "
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </li>
                            {/* <li>
                <Link className="hover:text-hotpink " href="/blog">
                  Blog
                </Link>
              </li> */}
                        </ul>
                        <div className="flex justify-center">
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
                                href="https://www.instagram.com/hunterwics/"
                                className="px-2"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="hover:scale-150 hover:text-hotpink w-6 h-6 duration-1000 ease-in-out"
                                />
                            </a>
                            <a
                                href="https://discord.gg/mw2ZxPu7"
                                className="px-2"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faDiscord}
                                    className="hover:scale-150 hover:text-hotpink w-6 h-6 duration-1000 ease-in-out"
                                />
                            </a>
                        </div>
                    </div>
                    <span className="block border-t border-[#4b55636b] my-4 w-[90%]"></span>
                    <h1 className=" text-[#4B5563] pb-2 text-sm">
                        © 2025 Hunter WiCS. All rights reserved.
                    </h1>
                </div>
            </div>
        </footer>
    );
}
