"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white text-pink py-4 drop-shadow-xl">
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
                <Link
                  className="hover:text-lightp font-bold text-sm"
                  href="/"
                  onClick={() => {
                    setAboutDropdownOpen(false);
                    setEventsDropdownOpen(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  className="hover:text-lightp font-bold text-sm flex items-center"
                  onClick={() => {
                    setAboutDropdownOpen(!aboutDropdownOpen);
                    setEventsDropdownOpen(false);
                  }}
                >
                  About
                  <ChevronDown className="ml-1 w-3.5" />
                </button>
                {aboutDropdownOpen && (
                  <ul className="absolute bg-white shadow-dropdown rounded mt-2 p-2 w-48 border border-black">
                    <li>
                      <Link
                        className="block px-4 py-2 hover:text-lightp text-sm"
                        href="/about"
                        onClick={() => {
                          setAboutDropdownOpen(false);
                          setEventsDropdownOpen(false);
                        }}
                      >
                        What We Do
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 hover:text-lightp text-sm"
                        href="/about/officers"
                        onClick={() => {
                          setAboutDropdownOpen(false);
                          setEventsDropdownOpen(false);
                        }}
                      >
                        Officers
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  className="hover:text-lightp font-bold text-sm flex items-center"
                  onClick={() => {
                    setEventsDropdownOpen(!eventsDropdownOpen);
                    setAboutDropdownOpen(false);
                  }}
                >
                  Events
                  <ChevronDown className="ml-1 w-3.5" />
                </button>
                {eventsDropdownOpen && (
                  <ul className="absolute bg-white shadow-dropdown rounded mt-2 p-2 w-48 border border-black">
                    <li>
                      <Link
                        className="block px-4 py-2 hover:text-lightp text-sm"
                        href="/events"
                        onClick={() => {
                          setAboutDropdownOpen(false);
                          setEventsDropdownOpen(false);
                        }}
                      >
                        Upcoming Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 hover:text-lightp text-sm"
                        href="/events/past-events"
                        onClick={() => {
                          setAboutDropdownOpen(false);
                          setEventsDropdownOpen(false);
                        }}
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
                  onClick={() => {
                    setAboutDropdownOpen(false);
                    setEventsDropdownOpen(false);
                  }}
                >
                  Corporate
                </Link>
              </li>
              <li>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
