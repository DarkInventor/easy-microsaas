import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function SiteNav() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-lime-400 rounded-full" />
        <span className="text-xl font-semibold">Easy UI</span>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link
          href="/#about-section"
          className="hover:text-lime-400 transition-colors duration-200"
        >
          About Us
        </Link>
        <Link
          href="/#solutions-section"
          className="hover:text-lime-400 transition-colors duration-200"
        >
          Solutions
        </Link>
        <Link
          href="/#pricing-section"
          className="hover:text-lime-400 transition-colors duration-200"
        >
          Pricing
        </Link>
        <Link
          href="/#workspace-section"
          className="hover:text-lime-400 transition-colors duration-200"
        >
          Workspace
        </Link>
      </nav>
      <Button
        variant="secondary"
        className="bg-gradient-to-r from-lime-400/20 to-green-500/20 text-green-700 border-green-500/50 hover:bg-gray-300 transition-colors duration-200"
      >
        Get Started Now
      </Button>
    </header>
  );
}

export default SiteNav;
