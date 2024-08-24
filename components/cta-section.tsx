import React from "react";
import { Button } from "./ui/button";

function CTASection() {
  return (
    <section className="mb-20 text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl py-16 px-8">
      <h2 className="text-4xl font-bold mb-6">
        Ready to Use 50+ NextJS Web Templates
      </h2>
      <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Start your 7-day free trial today and experience the power of Easy UI.
        No credit card required.
      </p>
      <Button className="bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-xl py-6 px-12 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
        Get Started Now
      </Button>
    </section>
  );
}

export default CTASection;
