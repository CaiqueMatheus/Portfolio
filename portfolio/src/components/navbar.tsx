import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faBehanceSquare,
  faArtstation,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faBehanceSquare,
  faArtstation,
  faGithub
);

export default function sideNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray">
        <div className="max-w-7xl mx-1 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a
                      href="#"
                      className="hover:bg-gray-500 hover:text-violet-300 text-gray-200 px-3 py-2 rounded-md 
                    text-sm font-medium"
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="#">
                    <a
                      href="#"
                      className="hover:bg-gray-500 hover:text-violet-300 text-gray-200 
                    px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </a>
                  </Link>
                  <Link href="/codes/dashboard">
                    <a
                      href="#"
                      className="hover:bg-gray-500 hover:text-violet-300
                    text-gray-200 px-3 py-2
                    rounded-md text-sm font-medium"
                    >
                      Codes
                    </a>
                  </Link>
                  <Link href="/#">
                    <a
                      href="#"
                      className="text-gray-200 hover:bg-gray-500 hover:text-violet-300
                    px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Designs
                    </a>
                  </Link>
                  <Link href="/#">
                    <a
                      href="#"
                      className="text-gray-200 hover:bg-gray-500 hover:text-violet-300
                    px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md 
                text-gray-100 hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2
                focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-500 hover:text-violet text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="hover:bg-gray-500 hover:text-violet text-gray-200 block 
                px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="hover:bg-gray-500 hover:text-violet text-gray-200 block 
                px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="hover:bg-gray-500 hover:text-violet text-gray-200 block 
                px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="hover:bg-gray-500 hover:text-violet text-gray-200 block 
                px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
