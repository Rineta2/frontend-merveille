"use client";

import React from "react";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar">
      <li>
        <Link href={"/"}>
          Lokasi Toko <ChevronRight />
        </Link>
      </li>

      <li>
        <Link href={"/"}>Lokasi Toko</Link>
        <Link href={"/"}>Tracking</Link>
      </li>
    </div>
  );
}
