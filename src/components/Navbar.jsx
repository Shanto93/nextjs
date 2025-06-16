"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  let isAdmin = false;

  console.log(pathname.includes("dashboard"));

  if (pathname.includes("dashboard")) {
    <div></div>;
  } else {
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
          {isAdmin ? (
            <Link href="/admin-dashboard">
              <li>Dashboard</li>
            </Link>
          ) : (
            <Link href="/user-dashboard">
              <li>Dashboard</li>
            </Link>
          )}
        </ul>
      </div>
    );
  }
}
