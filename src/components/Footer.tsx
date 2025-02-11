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
        <footer className="text-black py-8 ">
            <div className="container mx-auto px-10">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <div className="flex flex-row items-center gap-8 text-600">
                        <h3 className="text-black font-bold">Hunter WiCS</h3>
                        <ul className="flex flex-col sm:flex-row sm:gap-8 items-center gap-2">
                            <li>
                                <Link className="hover:text-lightp" href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-lightp"
                                    href="/about"
                                >
                                    About
                                </Link>
                            </li>
                            {/* <li>
                <Link className="hover:text-lightp " href="/events">
                  Events
                </Link>
              </li> */}
                            <li>
                                <Link
                                    className="hover:text-lightp "
                                    href="/corporate"
                                >
                                    Corporate
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-lightp "
                                    href="/about/officers"
                                >
                                    Officers
                                </Link>
                            </li>
                            {/* <li>
                <Link className="hover:text-lightp " href="/blog">
                  Blog
                </Link>
              </li> */}
                        </ul>
                    </div>
                    <h1 className="text-lightp pb-2">Hunter WiCS © 2024</h1>
                    <div className="flex justify-center">
                        <a
                            href="mailto: hunterwics@gmail.com"
                            target="_blank"
                            className="px-2"
                        >
                            <Mail className="hover:scale-150 hover:text-lightp w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/hunterwics/"
                            target="_blank"
                            className="px-2"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="hover:scale-150 hover:text-lightp w-6 h-6"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/hunterwics/"
                            className="px-2"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="hover:scale-150 hover:text-lightp w-6 h-6"
                            />
                        </a>
                        <a
                            href="https://discord.gg/mw2ZxPu7"
                            className="px-2"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faDiscord}
                                className="hover:scale-150 hover:text-lightp w-6 h-6"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
