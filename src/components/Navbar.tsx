"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import Menu from "@/components/Menu";

export default function Navbar() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <header className="bg-white text-pink py-4 drop-shadow-xl relative">
      <div className="container mx-auto px-6 w-full xl:w-6/12 lg:w-11/12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/WiCS-Logo.png"
              alt="WiCS Logo"
              width={40}
              height={40}
            />
            <h1 className="font-semibold text-xl ml-2">
              <Link href="/" className="hover:text-lightp">
                Hunter WiCS
              </Link>
            </h1>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-pink focus:outline-none"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-row items-center gap-4 text-pink">
            <ul className="flex flex-row items-center gap-4">
              <li className="pb-0.5">
                <Link
                  className="hover:text-lightp font-semibold text-sm"
                  href="/"
                  onClick={() => {
                    setAboutDropdownOpen(false);
                    setEventsDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  className="hover:text-lightp font-semibold text-sm flex items-center"
                  onClick={() => {
                    setAboutDropdownOpen(!aboutDropdownOpen);
                    setEventsDropdownOpen(false);
                  }}
                >
                  About
                  <ChevronDown className="ml-1 w-3" />
                </button>
                {aboutDropdownOpen && (
                  <ul className="absolute bg-white shadow-dropdown rounded mt-2 p-2 w-48 border border-black">
                    <li>
                      <Link
                        href="/about"
                        className="block px-4 py-2 hover:text-lightp"
                        onClick={() => setAboutDropdownOpen(false)}
                      >
                        What We Do
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/officers"
                        className="block px-4 py-2 hover:text-lightp"
                        onClick={() => setAboutDropdownOpen(false)}
                      >
                        Officers
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  className="hover:text-lightp font-semibold text-sm flex items-center"
                  onClick={() => {
                    setEventsDropdownOpen(!eventsDropdownOpen);
                    setAboutDropdownOpen(false);
                  }}
                >
                  Events
                  <ChevronDown className="ml-1 w-3" />
                </button>
                {eventsDropdownOpen && (
                  <ul className="absolute bg-white shadow-dropdown rounded mt-2 p-2 w-48 border border-black">
                    <li>
                      <Link
                        href="/events"
                        className="block px-4 py-2 hover:text-lightp"
                        onClick={() => setEventsDropdownOpen(false)}
                      >
                        Upcoming Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/events/past"
                        className="block px-4 py-2 hover:text-lightp"
                        onClick={() => setEventsDropdownOpen(false)}
                      >
                        Past Events
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="pb-0.5">
                <Link
                  className="hover:text-lightp font-semibold text-sm"
                  href="/corporate"
                  onClick={() => {
                    setAboutDropdownOpen(false);
                    setEventsDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Corporate
                </Link>
              </li>
              {user?.primaryEmailAddress?.emailAddress ===
                "hunterwics@gmail.com" && (
                <li className="pb-0.5">
                  <Link
                    className="hover:text-lightp font-bold text-sm"
                    href="/admin"
                    onClick={() => {
                      setAboutDropdownOpen(false);
                      setEventsDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Admin
                  </Link>
                </li>
              )}
              <li>
                <SignedOut>
                  <div className="bg-pink text-white px-3 py-2 rounded hover:bg-lightp transition duration-300">
                    <SignInButton />
                  </div>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
