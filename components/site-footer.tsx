import Link from 'next/link'
import React from 'react'

function SiteFooter() {
  return (
    <footer className="bg-gray-900 py-16 rounded-3xl" id="about-section">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-20">
              <div className="pl-10 lg:pl-20">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-lime-400 to-green-500 text-transparent bg-clip-text">
                  Easy UI
                </h3>
                <p className="text-gray-400">
                  Ready to Use 50+ NextJS Web Templates
                </p>
              </div>
              {["Product", "Company", "Legal"].map((section) => (
                <div key={section} className="pl-10">
                  <h4 className="text-lg font-semibold mb-4">{section}</h4>
                  <ul className="space-y-3">
                    {["Features", "Pricing", "Use Cases"].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-lime-400 transition-colors duration-200"
                        >
                          {item}
                        </Link>
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
  )
}

export default SiteFooter