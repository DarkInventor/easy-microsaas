"use client";

import { motion } from "framer-motion";
import { CheckSquare, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ProductivitySection() {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 mb-20 shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/pattern.svg')] opacity-5"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
              {/* Assuming CheckSquare is imported elsewhere in the project */}
              <CheckSquare size={20} className="text-gray-900" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-lime-400 to-green-500 text-transparent bg-clip-text">
              INCREASE PRODUCTIVITY
            </span>
          </div>
          <span className="text-gray-400 text-sm">Product of the Year</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-end mb-6">
              {/* Assuming Card is imported elsewhere in the project */}
              <Card className="bg-gray-700 p-6 rounded-2xl shadow-inner mr-4">
                <h2 className="text-6xl font-bold text-lime-400 mb-2">
                  58K
                </h2>
                <p className="text-gray-300">People with us</p>
              </Card>
              <Card className="bg-gray-700 p-6 rounded-2xl shadow-inner">
                <h2 className="text-5xl font-bold text-green-500 mb-2">
                  32K
                </h2>
                <p className="text-gray-300">Tasks solved</p>
              </Card>
            </div>
            <div className="space-x-4">
              {/* Assuming Button is imported elsewhere in the project */}
              <Button
                variant="outline"
                className="bg-gray-700 text-white border-gray-600 hover:bg-gray-600 hover:border-gray-500 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                LEARN MORE
              </Button>
              <Button className="bg-gradient-to-r from-lime-500 to-green-600 text-white hover:from-lime-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
                TRY FREE
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Flexible Team Interactions
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empower your team with our flexible templates and
              capabilities. Seamlessly interact, plan tasks, and track
              progress with ease. Our intuitive builder allows you to design
              custom landing pages tailored to your project's specific needs.
            </p>
            <div className="flex items-center space-x-2 text-lime-400 hover:text-green-500 transition-colors duration-200 cursor-pointer group">
              <span className="font-semibold">EXPLORE DETAILS</span>
              {/* Assuming ChevronRight is imported elsewhere in the project */}
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
