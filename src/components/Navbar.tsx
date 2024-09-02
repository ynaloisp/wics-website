import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white text-pink py-8 drop-shadow-2xl">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/WiCS-Logo.png" alt="WiCS Logo" width={50} height={50} />
            <h1 className="font-extrabold text-2xl">  
              <Link href="/" className="hover:text-lightp">Hunter WiCS</Link>
            </h1>
          </div>
          <div className="flex flex-row items-center gap-8 text-pink">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  className="hover:text-lightp font-bold"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-lightp font-bold"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-lightp font-bold"
                  href="/events"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link className="hover:text-lightp font-bold" href="/corporate">
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