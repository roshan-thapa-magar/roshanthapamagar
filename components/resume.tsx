"use client";

import Image from "next/image";
import { useState } from "react";

export default function Resume() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl  overflow-hidden shadow-2xl">
      <div className="flex flex-col lg:flex-row ">
        {/* Mobile Header - Profile and Name side by side */}
        <div className="lg:hidden">
          <div
            className="bg-slate-800 text-white p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-700 transition-colors border-b border-gray-700"
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
              <Image
                src="/roshan-profile.png"
                alt="Roshan Thapa Magar"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-bold">ROSHAN THAPA MAGAR</h1>
              <p className="text-sm text-gray-300">Software & AI/ML Engineer</p>
            </div>
            <div className="flex-shrink-0">
              <svg
                className={`w-5 h-5 transition-transform ${
                  isSidebarExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Expandable Sidebar Content for Mobile */}
          {isSidebarExpanded && (
            <div className="bg-slate-800 text-white p-6 max-h-auto rounded-b-md overflow-y-auto">
              {/* Personal Details Section */}
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3 border-b border-gray-700 pb-2">
                  Personal Details
                </h2>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="relative">
                    <div className="absolute left-0 w-4 h-4 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="ml-8">
                      <p className="text-gray-300 text-sm">
                        Siddalek-4 Dhading
                      </p>
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="relative">
                    <div className="absolute left-0 w-4 h-4 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                      </svg>
                    </div>
                    <div className="ml-8">
                      <p className="text-gray-300 text-sm">July 6, 2004</p>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="relative">
                    <div className="absolute left-0 w-4 h-4 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <div className="ml-8">
                      <p className="text-gray-300 text-sm">20 years</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3 border-b border-gray-700 pb-2">
                  Contact
                </h2>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">9742531161</p>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <p className="text-gray-300 break-all text-sm">
                      roshanthapamagar004@gmail.com
                    </p>
                  </div>

                  {/* Personal Website */}
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <a
                      href="https://roshanmagar.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 text-sm hover:text-white transition-colors underline"
                    >
                     Visit Portfolio
                    </a>
                  </div>
                </div>
              </div>

              {/* Languages Section */}
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3 border-b border-gray-700 pb-2">
                  Languages
                </h2>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-300">English</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-300">Nepali</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-300">Hindi</p>
                  </div>
                </div>
              </div>

              {/* <CHANGE> Added social media icons section for mobile */}
              <div className="mb-6">
                <div className="flex justify-center gap-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/roshan-thapa-magar-a1886a367/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/roshanthapamagar_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/roshan-thapa-magar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://x.com/RoshanThap21156"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Left Sidebar - Hidden on mobile */}
        <div className="hidden lg:block bg-slate-800 text-white p-6 lg:w-1/3 lg:overflow-y-auto lg:h-screen">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-300">
              <Image
                src="/roshan-profile.png"
                alt="Roshan Thapa Magar"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 border-b border-gray-500 pb-2">
              Personal Details
            </h2>

            <div className="space-y-4">
              {/* Address */}
              <div className="relative">
                <div className="absolute left-0 w-4 h-4 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <p className="text-gray-300 text-sm">Siddalek-4 Dhading</p>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="relative">
                <div className="absolute left-0 w-4 h-4 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <p className="text-gray-300 text-sm">July 6, 2004</p>
                </div>
              </div>

              {/* Age */}
              <div className="relative">
                <div className="absolute left-0 w-4 h-4 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="ml-8">
                  <p className="text-gray-300 text-sm">20 years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 border-b border-gray-500 pb-2">
              Contact
            </h2>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">9742531161</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <p className="text-gray-300 break-all text-sm">
                  roshanthapamagar004@gmail.com
                </p>
              </div>

              {/* Personal Website */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <a
                  href="https://roshanmagar.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-white transition-colors underline"
                >
                 Visit Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 border-b border-gray-500 pb-2">
              Languages
            </h2>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-300">English</p>
              </div>

              <div>
                <p className="text-sm text-gray-300">Nepali</p>
              </div>

              <div>
                <p className="text-sm text-gray-300">Hindi</p>
              </div>
            </div>
          </div>

          {/* <CHANGE> Added social media icons section for desktop */}
          <div className="mb-6">
            <div className="flex justify-center gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/roshan-thapa-magar-a1886a367/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/roshanthapamagar_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/roshan-thapa-magar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/RoshanThap21156"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-gray-50 flex-1 lg:w-2/3 lg:overflow-y-auto hide-scrollbar lg:h-screen shadow-2xl">
          <div className="p-6 lg:p-8">
            <div className="mb-8 hidden lg:block">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                ROSHAN THAPA MAGAR
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Software & AI/ML Engineer | Computer Science Graduate
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2 inline-block">
                Personal Profile
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {
                  "A self-taught and resilient software engineer with a strong belief in continuous learning. Skilled in developing fast, scalable, and user-friendly applications, with expertise in both UI/UX design and backend development. As an AI/ML Engineer and Computer Science graduate, I specialize in building intelligent systems that bridge the gap between human needs and technological capabilities. Passionate about transforming ideas into data-driven, innovative solutions that push the boundaries of what's possible."
                }
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                Experience
              </h2>

              <div className="relative space-y-4">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                <div className="relative">
                  <div className="absolute left-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                  <div className="ml-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          Software Development Intern
                        </h3>
                        <p className="text-gray-600">
                          Octspace (IT Services & Consulting)
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        3 Months
                      </span>
                    </div>
                    <ul className="text-gray-700 text-sm space-y-1 mt-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        Gained hands-on experience in full-stack development
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        Worked on real-world projects using modern web
                        technologies
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            Final Year Project (FYP) - Solo Project
                          </h3>
                          <p className="text-gray-600">
                            QR Code Restaurant Ordering & Management System
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          8 Months
                        </span>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-1 mt-2">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Designed and developed a full-stack restaurant
                          management system with QR code ordering.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Implemented role-based dashboards for admin, kitchen,
                          waiter, and customer.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Independently handled project planning, design,
                          development, and testing under supervisor guidance.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Technologies used: React, Tailwind CSS, Node.js, and
                          database integration.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                Education
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                <div className="space-y-8">
                  {/* Bachelor's Degree */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-gray-800 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            BSc (Hons) Computer Science
                          </h3>
                          <p className="text-gray-600">
                            Herald College Kathmandu, Naxal
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          2022 – 2025
                        </span>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-1 mt-2">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Specialized in Software Engineering, Web & Mobile
                          Application Development.
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Currently pursuing First Class Honours, reflecting a
                          strong academic performance in the UK degree system.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* +2 Management */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-gray-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            +2 Management
                          </h3>
                          <p className="text-gray-600">
                            Nilkantha Secondary School, Dhading
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          2020 – 2022
                        </span>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-1 mt-2">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Studied business fundamentals and management
                          principles
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Developed analytical and problem-solving skills
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* SLC/10th Grade */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-gray-400 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            SLC/10th Grade
                          </h3>
                          <p className="text-gray-600">
                            Kalidevi Mabi, Siddalek-4, Dhading
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          2020
                        </span>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-1 mt-2">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Completed secondary education with strong academic
                          foundation
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Built fundamental knowledge in mathematics and
                          sciences
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                Projects
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                <div className="space-y-8">
                  {/* Course Management System */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              Course Management System
                            </h3>
                            <a
                              href="https://github.com/roshan-thapa-magar/course-management-system"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </a>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            Comprehensive educational platform built with Java
                            for managing courses, students, and academic
                            operations
                          </p>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Developed student enrollment and course
                              registration system
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Implemented grade management and academic progress
                              tracking
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Built admin dashboard for course and user
                              management
                            </li>
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                              Java
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                              MySQL
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Restaurant Management System */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              Restaurant Management System
                            </h3>
                            <a
                              href="https://github.com/roshan-thapa-magar/Restaurant-Management-System"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </a>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            Full-stack MERN application with QR code ordering
                            system for modern restaurant operations
                          </p>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Developed QR code-based digital menu and ordering
                              system
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Built real-time order management and kitchen
                              dashboard
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Integrated payment processing and inventory
                              management
                            </li>
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                              MongoDB
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                              Express.js
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                              React
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                              Node.js
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Autonomous Vehicle System */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              Autonomous Vehicle System
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-600"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            Intelligent self-driving car system with automatic
                            path detection and navigation capabilities
                          </p>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Implemented computer vision for real-time path
                              detection
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Developed obstacle avoidance and route
                              optimization algorithms
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Built web-based control interface and monitoring
                              dashboard
                            </li>
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                              C#
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                              Unity
                            </span>

                            <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">
                              AI algorithms
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Website Development */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              Professional Website Development
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-600"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            Modern, responsive websites and web applications
                            with focus on user experience and performance
                          </p>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Created responsive designs with modern CSS
                              frameworks and animations
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Integrated APIs, databases, and third-party
                              services
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Optimized for SEO, accessibility, and
                              cross-browser compatibility
                            </li>
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                              React
                            </span>
                            <span className="px-2 py-1 bg-black text-white rounded text-xs">
                              Next.js
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                              TypeScript
                            </span>
                            <span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded text-xs">
                              Tailwind CSS
                            </span>
                            <span className="px-2 py-1 bg-cyan-200 text-cyan-800 rounded text-xs">
                              ShadCN
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                Technical Skills
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                <div className="space-y-8">
                  {/* Frontend Development */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Frontend Development
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          HTML/CSS
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          Next.js
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          React
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          Tailwind CSS
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          ShadCN
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Backend Development */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Backend Development
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          FastAPI
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          Node.js
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          Express
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          PHP
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          NestJs
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Database & Cloud */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Database & Cloud
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          MongoDB
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          MySQL
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          Firebase
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          Supabase
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          postgresql
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile & Design */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Mobile & Design
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                          Flutter
                        </span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                          React Native
                        </span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                          Swift
                        </span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                          Figma
                        </span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                          Responsive Design
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hobbies Section - Moved to right side */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                Hobbies & Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Research
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Read Books
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Learn New Technology
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Listening Music
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
