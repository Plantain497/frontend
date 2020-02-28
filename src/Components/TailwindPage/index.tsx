import React, { FunctionComponent, ReactElement } from 'react';

const TailwindPage: FunctionComponent = (): ReactElement => {
  return (
    <body className="font-sans antialiased text-gray-900 bg-gray-100">
      <div>
        <div className="pb-32 bg-gray-800">
          <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="border-b border-gray-700">
                <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                        alt=""
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline ml-10">
                        <a
                          href="#"
                          className="px-3 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                        >
                          Dashboard
                        </a>
                        <a
                          href="#"
                          className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >
                          Team
                        </a>
                        <a
                          href="#"
                          className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >
                          Projects
                        </a>
                        <a
                          href="#"
                          className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >
                          Calendar
                        </a>
                        <a
                          href="#"
                          className="px-3 py-2 ml-4 text-sm font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                        >
                          Reports
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center ml-4 md:ml-6">
                      <button className="p-1 text-gray-400 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                        <svg
                          className="w-6 h-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          ></path>
                        </svg>
                      </button>
                      <div className="relative ml-3" x-data="{ open: false }">
                        <div>
                          <button className="flex items-center max-w-xs text-sm transition duration-150 ease-in-out rounded-full focus:outline-none focus:shadow-solid-white">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </button>
                        </div>
                        <div
                          x-show="open"
                          style={{ display: 'none' }}
                          // x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95"

                          className="absolute right-0 w-48 mt-2 -mr-1 origin-top-right rounded-md shadow-lg"
                        >
                          <div className="py-1 bg-white rounded-md shadow-xs">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                            >
                              Your Profile
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                            >
                              Settings
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                            >
                              Sign out
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    <button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="inline-flex"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                        <path
                          className="hidden"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden border-b border-gray-700 md:hidden">
              <div className="px-2 py-3 sm:px-3">
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Calendar
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Reports
                </a>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5 sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      Tom Cook
                    </div>
                    <div className="mt-1 text-sm font-medium leading-none text-gray-400">
                      tom@example.com
                    </div>
                  </div>
                </div>
                <div className="px-2 mt-3 sm:px-3">
                  <a
                    href="#"
                    className="block px-3 py-2 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 mt-1 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 mt-1 text-base font-medium text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <header className="py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
                    Back End Developer
                  </h2>
                  <div className="flex flex-col mt-1 sm:mt-0 sm:flex-row sm:flex-wrap">
                    <div className="flex items-center mt-2 text-sm leading-5 text-gray-300 sm:mr-6">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                      </svg>
                      Full-time
                    </div>
                    <div className="flex items-center mt-2 text-sm leading-5 text-gray-300 sm:mr-6">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Remote
                    </div>
                    <div className="flex items-center mt-2 text-sm leading-5 text-gray-300 sm:mr-6">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      $120k – $140k
                    </div>
                    <div className="flex items-center mt-2 text-sm leading-5 text-gray-300">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Closing on January 9, 2020
                    </div>
                  </div>
                </div>
                <div className="flex mt-5 lg:mt-0 lg:ml-4">
                  <span className="hidden rounded-md shadow-sm sm:block">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray focus:border-gray-800"
                    >
                      <svg
                        className="w-5 h-5 mr-2 -ml-1 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                      </svg>
                      Edit
                    </button>
                  </span>

                  <span className="hidden ml-3 rounded-md shadow-sm sm:block">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray focus:border-gray-800"
                    >
                      <svg
                        className="w-5 h-5 mr-2 -ml-1 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      View
                    </button>
                  </span>

                  <span className="rounded-md shadow-sm sm:ml-3">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600"
                    >
                      <svg
                        className="w-5 h-5 mr-2 -ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Publish
                    </button>
                  </span>

                  <span
                    x-data="{ open: false }"
                    className="relative ml-3 rounded-md shadow-sm sm:hidden"
                  >
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray focus:border-gray-800"
                    >
                      More
                      <svg
                        className="w-5 h-5 ml-2 -mr-1 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>

                    <div
                      x-show="open"
                      // x-transition:enter="transition ease-out duration-200" x-transition:enter-start="transform opacity-0 scale-90" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-90"

                      className="absolute left-0 w-48 mt-2 -ml-1 origin-top-left rounded-md shadow-lg"
                      style={{ display: 'none' }}
                    >
                      <div className="py-1 bg-white rounded-md shadow-xs">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>
        <main className="-mt-32">
          <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-4 pt-5 bg-white border-b border-gray-200 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Candidates
                </h3>
                <div className="pt-3 pb-4 sm:p-0">
                  <div className="sm:hidden">
                    <select className="block w-full text-gray-900 transition duration-150 ease-in-out border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                      <option>Applied</option>
                      <option>Phone screening</option>
                      <option selected={true}>Interview</option>
                      <option>Offer</option>
                      <option>Hired</option>
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div>
                      <nav className="flex -mb-px">
                        <a
                          href="#"
                          className="px-1 py-4 text-sm font-medium leading-5 text-gray-500 whitespace-no-wrap transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                        >
                          Applied
                        </a>
                        <a
                          href="#"
                          className="px-1 py-4 ml-8 text-sm font-medium leading-5 text-gray-500 whitespace-no-wrap transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                        >
                          Phone screening
                        </a>
                        <a
                          href="#"
                          className="px-1 py-4 ml-8 text-sm font-medium leading-5 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out border-b-2 border-indigo-500 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
                        >
                          Interview
                        </a>
                        <a
                          href="#"
                          className="px-1 py-4 ml-8 text-sm font-medium leading-5 text-gray-500 whitespace-no-wrap transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                        >
                          Offer
                        </a>
                        <a
                          href="#"
                          className="px-1 py-4 ml-8 text-sm font-medium leading-5 text-gray-500 whitespace-no-wrap transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                        >
                          Hired
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-5 pb-3 sm:px-6">
                <div>
                  <label
                    // for="filter"

                    className="sr-only"
                  >
                    Search candidates
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <div className="relative flex-grow focus-within:z-10">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        id="filter"
                        className="block w-full py-2 pl-10 pr-3 text-gray-900 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-none appearance-none rounded-l-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                        placeholder="John Doe"
                      />
                    </div>
                    <button className="relative flex items-center px-3 py-2 -ml-px text-sm leading-5 text-gray-900 transition duration-150 ease-in-out border border-gray-300 rounded-r-md bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2">Filter</span>
                    </button>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Ricardo Cooper
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">
                                ricardo@example.com
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-t border-gray-200">
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Kristen Ramos
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">
                                kristen@example.com
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-t border-gray-200">
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Ted Fox
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">ted@example.com</span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-t border-gray-200">
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Ricardo Cooper
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">
                                ricardo@example.com
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-t border-gray-200">
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Kristen Ramos
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">
                                kristen@example.com
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-t border-gray-200">
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Ted Fox
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">ted@example.com</span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-t border-gray-200">
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Ricardo Cooper
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">
                                ricardo@example.com
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-t border-gray-200">
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Kristen Ramos
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">
                                kristen@example.com
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-t border-gray-200">
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Ted Fox
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">ted@example.com</span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-t border-gray-200">
                  <a
                    href="#"
                    className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                              Ricardo Cooper
                            </div>
                            <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="truncate">
                                ricardo@example.com
                              </span>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <div className="text-sm leading-5 text-gray-900">
                                Applied on
                                <time

                                // datetime="2020-01-07"
                                >
                                  January 7, 2020
                                </time>
                              </div>
                              <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
                                <svg
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                Completed phone screening
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
                <div className="hidden sm:block">
                  <p className="text-sm leading-5 text-gray-700">
                    Showing
                    <span className="font-medium">&nbsp;1</span>
                    <span>&nbsp;to</span>
                    <span className="font-medium">&nbsp;10</span>
                    <span>&nbsp;of</span>
                    <span className="font-medium">&nbsp;20</span>
                    <span>&nbsp;results</span>
                  </p>
                </div>
                <div className="flex justify-between flex-1 sm:justify-end">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export { TailwindPage };
