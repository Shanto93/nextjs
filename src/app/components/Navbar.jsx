import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul className="flex justify-center gap-10 bg-slate-200 py-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}
