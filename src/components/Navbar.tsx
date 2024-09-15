"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);

  return (
    <header className="bg-white text-pink py-4 shadow-navbar">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/WiCS-Logo.png"
              alt="WiCS Logo"
              width={40}
              height={40}
            />
            <h1 className="font-extrabold text-xl ml-2">
              <Link href="/" className="hover:text-lightp">
                Hunter WiCS
              </Link>
            </h1>
          </div>
          <div className="flex flex-row items-center gap-4 text-pink">
            <ul className="flex items-center gap-4">
              <li>
                <Link className="hover:text-lightp font-bold text-sm" href="/">
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  className="hover:text-lightp font-bold text-sm"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                >
                  About
                </button>
                {aboutDropdownOpen && (
                  <ul className="absolute bg-white shadow-dropdown rounded mt-2">
                    <li>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-200 text-sm"
                        href="/about"
                      >
                        What We Do
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-200 text-sm"
                        href="/about/officers"
                      >
                        Officers
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  className="hover:text-lightp font-bold text-sm"
                  onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                >
                  Events
                </button>
                {eventsDropdownOpen && (
                  <ul className="absolute bg-white shadow-dropdown rounded mt-2">
                    <li>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-200 text-sm"
                        href="/events/upcoming"
                      >
                        Upcoming Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-200 text-sm"
                        href="/events/past"
                      >
                        Past Events
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  className="hover:text-lightp font-bold text-sm"
                  href="/corporate"
                >
                  Corporate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
