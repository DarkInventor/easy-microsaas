'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'
import { ChevronRight, Star, Users, BarChart2, DollarSign, Clock, CheckSquare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Companies } from '@/components/companies-section'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-['Inter', sans-serif]">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-lime-400 rounded-full" />
          <span className="text-xl font-semibold">Easy UI</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/#about-section" className="hover:text-gray-300 transition-colors duration-200">About Us</Link>
          <Link href="/#solutions-section" className="hover:text-gray-300 transition-colors duration-200">Solutions</Link>
          <Link href="/#pricing-section" className="hover:text-gray-300 transition-colors duration-200">Pricing</Link>
          <Link href="/#workspace-section" className="hover:text-gray-300 transition-colors duration-200">Workspace</Link>
        </nav>
        <Button variant="secondary" className="bg-gradient-to-r from-lime-400/20 to-green-500/20 text-green-700 border-green-500/50 hover:bg-gray-300 transition-colors duration-200">Get Started Now</Button>
      </header>

      <main className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex mx-auto justify-center text-center items-center py-5"
      >
        <Badge variant="secondary" className="px-4 mt-10 text-sm font-semibold bg-gradient-to-r from-lime-400/20 to-green-500/20 text-green-700 border-green-500/50">
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
          <span className="bg-gradient-to-r from-lime-400 to-green-500 text-transparent bg-clip-text">  50+ NextJS Web Templates</span>
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
              className="rounded-l-md bg-gray-800 border-gray-700 text-white placeholder-gray-500 h-10" // Increased height from default to h-12
            />
            <Button className="rounded-r-md bg-gradient-to-r from-lime-400 to-green-500 text-gray-900 text-xs h-10 font-extrabold transition-colors duration-200 ml-0 lg:ml-2">
              START 7-DAY TRIAL
            </Button>
          </div>
        </motion.div>

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
              <CheckSquare size={20} className="text-gray-900" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-lime-400 to-green-500 text-transparent bg-clip-text">INCREASE PRODUCTIVITY</span>
          </div>
          <span className="text-gray-400 text-sm">Product of the Year</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-end mb-6">
              <Card className="bg-gray-700 p-6 rounded-2xl shadow-inner mr-4">
                <h2 className="text-6xl font-bold text-lime-400 mb-2">58K</h2>
                <p className="text-gray-300">People with us</p>
              </Card>
              <Card className="bg-gray-700 p-6 rounded-2xl shadow-inner">
                <h2 className="text-5xl font-bold text-green-500 mb-2">32K</h2>
                <p className="text-gray-300">Tasks solved</p>
              </Card>
            </div>
            <div className="space-x-4">
              <Button variant="outline" className="bg-gray-700 text-white border-gray-600 hover:bg-gray-600 hover:border-gray-500 transition-all duration-200 shadow-md hover:shadow-lg">
                LEARN MORE
              </Button>
              <Button className="bg-gradient-to-r from-lime-500 to-green-600 text-white hover:from-lime-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
                TRY FREE
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Flexible Team Interactions</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empower your team with our flexible functions and capabilities. Seamlessly interact, plan tasks, and track progress with ease. Our intuitive builder allows you to design custom workflows tailored to your project's specific needs.
            </p>
            <div className="flex items-center space-x-2 text-lime-400 hover:text-green-500 transition-colors duration-200 cursor-pointer group">
              <span className="font-semibold">EXPLORE DETAILS</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>

       {/* Companies Section */}
      <section className="mb-20 py-10 bg-gray-800 rounded-3xl">
        <h2 className="text-4xl font-bold text-center mb-15">Trusted by Leading Companies</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Companies />
        </div>
      </section>

      {/* Floating Testimonial Section */}
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
            <p className="text-xl italic mb-6 pl-12 text-white">"Easy UI has revolutionized our workflow. It's intuitive, powerful, and has significantly boosted our team's productivity."</p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-gray-900">JD</span>
              </div>
              <div>
                <p className="font-bold text-white">John Doe</p>
                <p className="text-gray-400">CEO of TechCorp</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Features Section */}
      <section className="mb-20" id="workspace-section">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Intuitive Interface', icon: Users, color: 'from-blue-400 to-indigo-500' },
            { title: 'Real-time Collaboration', icon: ChevronRight, color: 'from-green-400 to-emerald-500' },
            { title: 'Advanced Analytics', icon: BarChart2, color: 'from-purple-400 to-pink-500' }
          ].map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg transition-all duration-200 h-full">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12" id="solutions-section">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Easy UI?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { title: 'Increased Productivity', icon: BarChart2, color: 'bg-blue-500' },
            { title: 'Cost-Effective', icon: DollarSign, color: 'bg-green-500' },
            { title: 'Scalable Solution', icon: Users, color: 'bg-purple-500' },
            { title: '24/7 Support', icon: Clock, color: 'bg-pink-500' }
          ].map((reason) => (
            <div key={reason.title} className="flex items-start space-x-6">
              <div className={`w-12 h-12 ${reason.color} rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg`}>
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-20" id="pricing-section">
        <h2 className="text-4xl font-bold text-center mb-12">Flexible Pricing Plans</h2>
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`text-lg ${!isYearly ? 'text-lime-400' : 'text-gray-400'}`}>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="bg-gray-700"
          />
          <span className={`text-lg ${isYearly ? 'text-lime-400' : 'text-gray-400'}`}>Yearly</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Basic', price: { monthly: 9, yearly: 90 }, features: ['Feature A', 'Feature D', 'Feature G'] },
            { name: 'Pro', price: { monthly: 19, yearly: 190 }, features: ['Feature B', 'Feature E', 'Feature H'] },
            { name: 'Enterprise', price: { monthly: 29, yearly: 290 }, features: ['Feature C', 'Feature F', 'Feature I'] }
          ].map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-xl transition-all duration-200 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lime-400 to-green-500" />
                <CardHeader>
                  <CardTitle className="text-2xl mb-4 text-white">{plan.name}</CardTitle>
                  <p className="text-4xl font-bold mb-2 text-white">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                    <span className="text-lg text-gray-400">/{isYearly ? 'year' : 'month'}</span>
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8 text-white">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <ChevronRight className="w-5 h-5 text-lime-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 transition-all duration-200 text-white font-semibold py-3">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-20 text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl py-16 px-8">
        <h2 className="text-4xl font-bold mb-6">Ready to Use 50+ NextJS Web Templates</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Start your 7-day free trial today and experience the power of Easy UI. No credit card required.</p>
        <Button className="bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-xl py-6 px-12 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
          Get Started Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 rounded-3xl" id="about-section">
        <div className="container mx-auto px-4"> 
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-lime-400 to-green-500 text-transparent bg-clip-text">Easy UI</h3>
              <p className="text-gray-400">Ready to Use 50+ NextJS Web Templates</p>
            </div>
            {['Product', 'Company', 'Legal'].map((section) => (
              <div key={section}>
                <h4 className="text-lg font-semibold mb-4">{section}</h4>
                <ul className="space-y-3">
                  {['Features', 'Pricing', 'Use Cases'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-200">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 Easy UI. All rights reserved.
          </div>
        </div>
      </footer>
      </main>
    </div>
  
  )
}