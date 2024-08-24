"use client";

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from './ui/card'

function FloatingTestimonial() {
  return (
    <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-200 rounded-3xl overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="absolute top-4 left-4 text-lime-400">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <p className="text-xl italic mb-6 pl-12 text-white">
                "Easy UI has revolutionized how people build templates. It's high quality,
                powerful, and has significantly boosted team's
                productivity."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">KM</span>
                </div>
                <div>
                  <p className="font-bold text-white">Kathan Mehta</p>
                  <p className="text-gray-400">Founder of Easy UI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
  )
}

export default FloatingTestimonial