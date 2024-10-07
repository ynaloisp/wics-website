import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Menu from "@/components/Menu";

export default function Footer() {
  return (
    <footer className="bg-white text-pink py-8 shadow-footer">
      <div className="container mx-auto px-10">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-row items-center gap-8 text-pink">
            <ul className="flex items-center gap-8">
              <li>
                <Link className="hover:text-lightp " href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-lightp" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-lightp " href="/events">
                  Events
                </Link>
              </li>
              <li>
                <Link className="hover:text-lightp " href="/corporate">
                  Corporate
                </Link>
              </li>
              <li>
                <Link className="hover:text-lightp " href="/about/officers">
                  Officers
                </Link>
              </li>
              <li>
                <Link className="hover:text-lightp " href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <h1 className="text-lightp pb-2">Hunter WiCS © 2024</h1>
          <div className="flex justify-center">
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
