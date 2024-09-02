import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white text-pink py-8 shadow-footer">
            <div className="container mx-auto px-10">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <div className="flex flex-row items-center gap-8 text-pink">
                        <ul className="flex items-center gap-8">
                            <li>
                                <Link
                                    className="hover:text-lightp "
                                    href="/"
                                >
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
                            <li>
                                <Link
                                    className="hover:text-lightp "
                                    href="/events"
                                >
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-lightp " href="/corporate">
                                    Corporate
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-lightp "
                                    href="/Officers"
                                >
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
                    <h1 className="text-lightp">Hunter WiCS 2024</h1>                  
                </div>
                
            </div>
        </footer>
    )
}