"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ProductivitySection } from "@/components/productivity-section";
import { TrustedBy } from "@/components/trusted-by";
import SiteNav from "@/components/site-nav";
import FloatingTestimonial from "@/components/floating-testimonial";
import FeaturesSection from "@/components/features-section";
import WhyUsSection from "@/components/why-us-section";
import PricingSection from "@/components/pricing-section";
import CTASection from "@/components/cta-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-['Inter', sans-serif]">
      {/* Site Nav Section */}
      <SiteNav />

      {/* Hero Section */}

      <main className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex mx-auto justify-center text-center items-center py-5"
        >
          <Badge
            variant="secondary"
            className="px-4 mt-10 text-sm font-semibold bg-gradient-to-r from-lime-400/20 to-green-500/20 text-green-700 border-green-500/50"
          >
            Introducing Easy UI
          </Badge>
        </motion.div>
        <motion.h1
          className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 mt-0 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Open Source Collection of
          <br />
          <span className="bg-gradient-to-r from-lime-400 to-green-500 text-transparent bg-clip-text">
            {" "}
            50+ NextJS Web Templates
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl md:text-xl lg:text-2xl text-center text-gray-400 mb-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Easy UI templates empowers you to optimize your time, money
          <br />
          productivity and organization in every step of your projects.
        </motion.p>

        <motion.div
          className="flex justify-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex w-full max-w-md">
            <Input
              type="email"
              placeholder="Type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-l-md bg-gray-800 border-gray-700 text-white placeholder-gray-800 h-10" // Increased height from default to h-12
            />
            <Button className="rounded-r-md bg-gradient-to-r from-lime-400 to-green-500 text-gray-900 text-xs h-10 font-extrabold transition-colors duration-200 ml-0 lg:ml-2">
              START 7-DAY TRIAL
            </Button>
          </div>
        </motion.div>

        {/* Productivity Section */}
        <ProductivitySection />

        {/* Companies Section */}
        <TrustedBy />

        {/* Floating Testimonial Section */}
        <FloatingTestimonial />

        {/* Features Section */}
        <FeaturesSection />

        {/* Why Choose Us Section */}
        <WhyUsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* CTA Section */}
        <CTASection />

        {/* Footer */}
        <SiteFooter />
      </main>
    </div>
  );
}
