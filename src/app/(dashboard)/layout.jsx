import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen">
        {/* Sidebar */}
        <div className="col-span-2 bg-cyan-700 ">
          <ul className="flex flex-col justify-center items-center gap-2 text-white">
            <li className="mt-4">sidebar 1</li>
            <li>sidebar 2</li>
            <li>sidebar 3</li>
            <Link href="/">
              <li>Home</li>
            </Link>
          </ul>
        </div>

        {/* Main Content */}

        <div className="col-span-10 ml-5">{children}</div>
      </div>
    </div>
  );
}
