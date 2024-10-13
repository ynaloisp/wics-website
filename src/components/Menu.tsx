import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const { user } = useUser();

  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
      <ul className="flex flex-col items-center gap-4 py-4 border border-black border-3">
        <li>
          <Link
            href="/"
            onClick={onClose}
            className="hover:text-lightp font-semibold text-sm "
          >
            Home
          </Link>
        </li>
        <li className="text-center">
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="hover:text-lightp font-semibold text-sm"
          >
            About
          </button>
          {aboutOpen && (
            <ul className="flex flex-col items-center gap-2 py-2">
              <li>
                <Link
                  href="/about"
                  onClick={() => {
                    onClose();
                    setAboutOpen(false);
                  }}
                  className="hover:text-lightp text-sm"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/about/officers"
                  onClick={() => {
                    onClose();
                    setAboutOpen(false);
                  }}
                  className="hover:text-lightp text-sm"
                >
                  Officers
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* <li>
          <button
            onClick={() => setEventsOpen(!eventsOpen)}
            className="hover:text-lightp font-semibold text-sm"
          >
            Events
          </button>
          {eventsOpen && (
            <ul className="flex flex-col items-center gap-2 py-2">
              <li>
                <Link
                  href="/events"
                  onClick={onClose}
                  className="hover:text-lightp text-sm"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  href="/events/past-events"
                  onClick={onClose}
                  className="hover:text-lightp text-sm"
                >
                  Past Events
                </Link>
              </li>
            </ul>
          )}
        </li> */}
        <li>
          <Link
            href="/corporate"
            onClick={() => {
              onClose();
              setAboutOpen(false);
            }}
            className="hover:text-lightp font-semibold text-sm"
          >
            Corporate
          </Link>
        </li>
        {user?.primaryEmailAddress?.emailAddress === "hunterwics@gmail.com" && (
          <li className="pb-0.5">
            <Link
              className="hover:text-lightp font-semibold text-sm"
              href="/admin"
              onClick={() => {
                onClose();
                setAboutOpen(false);
              }}
            >
              Admin
            </Link>
          </li>
        )}
        {/* <li>
          <Link
            href="/blog"
            onClick={onClose}
            className="hover:text-lightp font-semibold text-sm"
          >
            Blog
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
