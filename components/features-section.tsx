import { motion } from "framer-motion";
import { Users, ChevronRight, BarChart2 } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

function FeaturesSection() {
  return (
    <section className="mb-20" id="workspace-section">
      <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Intuitive Interface",
            icon: Users,
            color: "from-blue-400 to-indigo-500",
          },
          {
            title: "Real-time Collaboration",
            icon: ChevronRight,
            color: "from-green-400 to-emerald-500",
          },
          {
            title: "Advanced Analytics",
            icon: BarChart2,
            color: "from-purple-400 to-pink-500",
          },
        ].map((feature) => (
          <motion.div
            key={feature.title}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg transition-all duration-200 h-full">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
