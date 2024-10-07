import React, { useState } from "react";
import Link from "next/link";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
      <ul className="flex flex-col items-center gap-4 py-4">
        <li>
          <Link
            href="/"
            onClick={onClose}
            className="hover:text-lightp font-semibold text-sm"
          >
            Home
          </Link>
        </li>
        <li>
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
                  onClick={onClose}
                  className="hover:text-lightp text-sm"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/about/officers"
                  onClick={onClose}
                  className="hover:text-lightp text-sm"
                >
                  Officers
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
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
        </li>
        <li>
          <Link
            href="/corporate"
            onClick={onClose}
            className="hover:text-lightp font-semibold text-sm"
          >
            Corporate
          </Link>
        </li>
        <li>
          <Link
            href="/about/officers"
            onClick={onClose}
            className="hover:text-lightp font-semibold text-sm"
          >
            Officers
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            onClick={onClose}
            className="hover:text-lightp font-semibold text-sm"
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}
