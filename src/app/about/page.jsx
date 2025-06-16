import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-3xl">About</h1>
      <Link href="/about/address">
        Navigate Address Page
      </Link>
    </div>
  );
}
