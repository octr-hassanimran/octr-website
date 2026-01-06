'use client';

import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Buildings That Optimize Themselves
          </h1>
          <p className="text-2xl mb-8 opacity-95">
            15-30% energy savings with AI-powered autonomous HVAC optimization.
            <br />
            Zero capital investment. Positive cash flow in 6-18 months.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Schedule Demo
            </Link>
            <Link href="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION - 3 PILLAR CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Why OCTR?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl font-bold text-teal-600 mb-4">15-30%</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Energy Savings</h3>
              <p className="text-gray-700">
                Proven autonomous optimization reduces energy costs without capital investment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl font-bold text-teal-600 mb-4">6-18M</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Payback Period</h3>
              <p className="text-gray-700">
                Immediate ROI with performance-based pricing. You only pay for results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl font-bold text-teal-600 mb-4">AI</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Explainable AI</h3>
              <p className="text-gray-700">
                Physics-informed neural networks. No black box. Every decision is transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">The Problem</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Buildings Waste Energy at Scale</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <FiCheck className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
                  <span>40% of global carbon emissions come from buildings</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
                  <span>Most commercial buildings run on 20+ year-old manual protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
                  <span>10-30% of energy is pure waste from inefficient scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
                  <span>Energy expertise is rare and expensive</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
                  <span>ESG compliance is a regulatory headache</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-12 rounded-xl h-96 flex items-center justify-center text-center">
              <div className="text-gray-600">
                <p className="text-6xl font-bold text-red-600 mb-2">40%</p>
                <p className="text-xl">of global emissions from buildings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION - 3 PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-6 text-gray-900">Three Integrated Products</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            One unified platform. Three ways to optimize.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1: HVAC */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">HVAC Energy Optimizer</h3>
              <p className="mb-6 text-teal-100">
                AI-powered autonomous control using reinforcement learning and physics-informed neural networks.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>10-30% energy savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Works with existing BAS systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>No hardware replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Maintains comfort (±0.5°C)</span>
                </li>
              </ul>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="text-sm opacity-90">Typical payback</p>
                <p className="text-2xl font-bold">7-12 months</p>
              </div>
            </div>

            {/* Product 2: AloT */}
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AloT Sensor Network</h3>
              <p className="mb-6 text-cyan-100">
                Multi-physics wireless sensors providing real-time building intelligence.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>15-25% additional savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Predictive maintenance alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Wireless mesh network</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>5+ year battery life</span>
                </li>
              </ul>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="text-sm opacity-90">Equipment lifespan</p>
                <p className="text-2xl font-bold">+10-15%</p>
              </div>
            </div>

            {/* Product 3: ESG */}
            <div className="bg-gradient-to-br from-teal-500 to-green-600 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">ESG Asset Management</h3>
              <p className="mb-6 text-teal-100">
                Unified carbon accounting and compliance reporting for investors.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Automated carbon tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Investor-ready reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>LEED/WELL compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Green financing support</span>
                </li>
              </ul>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="text-sm opacity-90">Portfolio wide</p>
                <p className="text-2xl font-bold">Real-time</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/solutions" className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition">
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - METRICS */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-teal-400 mb-2">50+</div>
              <p className="text-lg">Buildings Deployed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-400 mb-2">$15M+</div>
              <p className="text-lg">Client Savings</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-400 mb-2">1500+</div>
              <p className="text-lg">MT CO₂ Avoided</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-400 mb-2">96%</div>
              <p className="text-lg">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">Ready to Transform Your Buildings?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 50+ leading asset managers and facility teams optimizing operations with OCTR.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition">
              Schedule a Demo
            </Link>
            <Link href="/pricing" className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
