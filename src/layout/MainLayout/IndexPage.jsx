import React from "react";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <>
      <div className="flex flex-col justify-between bg-black">
        <div className="px-4 py-6">
          {/* Your other navigation code */}
          <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
            {/* Links with dots */}
            <Link
              to="/"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Home </span>
            </Link>
            <Link
              to="/tee-times"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Tee Times </span>
            </Link>
            {/* ... Other links ... */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              {/* ... Details and nested links ... */}
            </details>
            {/* ... Other links ... */}

            {/* Links with dots */}
            <Link
              to="/event"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Event Venue </span>
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> About Us </span>
            </Link>

            {/* Adding the dot separator with CSS */}
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700 relative"
            >
              <span className="text-sm font-medium"> Contact </span>
              <span className="absolute right-2 w-1 h-1 bg-gray-300 rounded-full"></span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
