import React, { useState } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

/**
 * Menu Component
 *
 * Renders the mobile navigation menu with links and optional submenus.
 * Features:
 *   - Main links: Home, Corporate, Admin (conditional)
 *   - Dropdown submenu for About with "What We Do" and "Officers"
 *   - Optional dropdowns for Events and Blog (currently commented)
 *   - Uses Clerk's useUser to show admin link for authorized users
 *
 * @constant {Array} mainLinks - Array of main navigation links, each containing:
 *   @property {string} href - URL path for the link
 *   @property {string} label - Display label for the link
 *
 * @constant {Array} aboutLinks - Array of About submenu links, each containing:
 *   @property {string} href - URL path for the link
 *   @property {string} label - Display label for the link
 *
 * @param {boolean} isOpen - Determines whether the menu is visible
 * @param {Function} onClose - Callback to close the menu
 *
 * Author: Vincent Zhong
 * Date: 2025-08-31
 */

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/corporate', label: 'Corporate' },
];

const aboutLinks = [
  { href: '/about', label: 'What We Do' },
  { href: '/about/officers', label: 'Officers' },
];

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const { user } = useUser();

  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
      <ul className="flex flex-col items-center gap-4 py-4 border border-black border-3">
        {/* Main links */}
        {mainLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onClose}
              className="hover:text-lightp font-semibold text-sm"
            >
              {label}
            </Link>
          </li>
        ))}

        {/* About dropdown */}
        <li className="text-center">
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="hover:text-lightp font-semibold text-sm"
          >
            About
          </button>
          {aboutOpen && (
            <ul className="flex flex-col items-center gap-2 py-2">
              {aboutLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => {
                      onClose();
                      setAboutOpen(false);
                    }}
                    className="hover:text-lightp text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Admin link, visible only to authorized user */}
        {user?.primaryEmailAddress?.emailAddress === 'hunterwics@gmail.com' && (
          <li className="pb-0.5">
            <Link
              href="/admin"
              onClick={() => {
                onClose();
                setAboutOpen(false);
              }}
              className="hover:text-lightp font-semibold text-sm"
            >
              Admin
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
