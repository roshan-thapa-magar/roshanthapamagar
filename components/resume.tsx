"use client";

import Image from "next/image";
import { useState } from "react";

export default function Resume() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden shadow-2xl">
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
              <p className="text-sm text-gray-300">Software Engineer</p>
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
                      roshanmagar.vercel.app
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
                  roshanmagar.vercel.app
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
        </div>

        <div className="bg-gray-50 flex-1 lg:w-2/3 lg:overflow-y-auto hide-scrollbar lg:h-screen shadow-2xl">
          <div className="p-6 lg:p-8">
            <div className="mb-8 hidden lg:block">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                ROSHAN THAPA MAGAR
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Software Engineer
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2 inline-block">
                Personal Profile
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                A self-taught and resilient software engineer with a strong
                belief in continuous learning. Skilled in developing fast,
                scalable, and user-friendly applications, with expertise in both
                UI/UX design and backend development. Committed to writing
                clean, maintainable code and delivering high-quality solutions
                through collaboration and innovation.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                Experience
              </h2>

              <div className="relative">
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
                        <p className="text-gray-600">Octspace IT Company</p>
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
                          Specialized in Software Engineering and Web
                          Development
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          Pursuing First Class Honours - A great achievement in
                          UK degree system
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
                  {/* Game Development Project */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              Game Development
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            Developed interactive games using modern frameworks
                          </p>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Built engaging gameplay mechanics and user
                              interfaces
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Implemented game logic and state management
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Website Development Project */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              Website Development
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            Built responsive and dynamic websites with modern
                            tech stack
                          </p>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Created responsive designs with modern CSS
                              frameworks
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Integrated APIs and database functionality
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QR Code Ordering System Project */}
                  <div className="relative">
                    <div className="absolute left-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="ml-10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              QR Code Ordering System
                            </h3>
                            <svg
                              className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">
                            Created a digital ordering system with QR code
                            integration
                          </p>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Developed QR code generation and scanning
                              functionality
                            </li>
                            <li className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              Built order management and payment processing
                              system
                            </li>
                          </ul>
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
