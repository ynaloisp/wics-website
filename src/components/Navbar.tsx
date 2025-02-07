"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import Menu from "@/components/Menu";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

export default function Navbar() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    async function fetchPoints() {
      if (user) {
        const userDocRef = doc(db, "users", user.id);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setPoints(userData.points);
        }
      }
    }
    fetchPoints();
  }, [user]);

  const path = usePathname();
  console.log(path);
  return (
    <div className="bg-[#fef8f8]">
      <header className="bg-white text-pink py-4 shadow-[0px_6px_13.3px_rgba(0,0,0,0.25)] relative rounded-full mt-[2%] mx-auto font-inter font-semibold w-fit pl-8 pr-8">
        <div className="container">
          <div className="flex justify-center items-center">
            {/* <div className="flex items-center">
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
          </div> */}
            {/* <div className="md:hidden">
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
          </div> */}

            <div className="hidden md:flex md:flex-row items-center text-grey ">
              <ul className="flex flex-row items-center gap-10 md:text-lg lg:text-xl">
                <li className="pb-0.5">
                  <Link
                    className={`font-semibold ${
                      path == "/" ? "text-hotpink" : "text-grey"
                    }`}
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

                <li className="pb-0.5">
                  <Link
                    className={`font-semibold ${
                      path == "/events" ? "text-hotpink" : "text-grey"
                    }`}
                    href="/events"
                    onClick={() => {
                      setAboutDropdownOpen(false);
                      setEventsDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Events
                  </Link>
                </li>

                <li className="pb-0.5">
                  <Link
                    className={`font-semibold ${
                      path == "/resources" ? "text-hotpink" : "text-grey"
                    }`}
                    href="/resources"
                    onClick={() => {
                      setAboutDropdownOpen(false);
                      setEventsDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Resources
                  </Link>
                </li>

                <li className="pb-0.5">
                  <Link
                    className={`font-semibold ${
                      path == "/team" ? "text-hotpink" : "text-grey"
                    }`}
                    href="/team"
                    onClick={() => {
                      setAboutDropdownOpen(false);
                      setEventsDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Team
                  </Link>
                </li>

                {/* <li className="relative">
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
              </li> */}
                {/* <li className="relative">
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
              </li> */}
                {/* <li className="pb-0.5">
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
                    className="hover:text-lightp font-semibold text-sm"
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
                  <div className="flex">
                    <Badge className="items-center w-auto m-2">
                      {points} Points
                    </Badge>
                    <UserButton />
                  </div>
                </SignedIn>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </header>
    </div>
  );
}
