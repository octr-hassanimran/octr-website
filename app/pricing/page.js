'use client';

import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const multiply = (price) => (annual ? price * 12 * 0.9 : price); // 10% discount annual

  return (
    <main className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Pricing</h1>
          <p className="text-xl opacity-95">
            Transparent pricing per building. Performance-based options available.
          </p>
        </div>
      </section>

      {/* Toggle */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white rounded-full shadow px-2 py-1">
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                !annual ? 'bg-teal-600 text-white' : 'text-gray-700'
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                annual ? 'bg-teal-600 text-white' : 'text-gray-700'
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual (10% off)
            </button>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Small */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-teal-500">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Small Building</h2>
            <p className="text-gray-600 mb-4">Up to ~5,000 m²</p>
            <p className="text-4xl font-bold text-teal-600 mb-2">
              ${multiply(1500).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              {annual ? 'per building / year (paid annually)' : 'per building / month'}
            </p>
            <ul className="space-y-3 text-gray-700 mb-6 text-sm">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>HVAC Energy Optimizer (core algorithms)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Basic ESG & energy reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Email support and monthly reports</span>
              </li>
            </ul>
            <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700">
              Talk to Sales
            </button>
          </div>

          {/* Medium */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-emerald-500 scale-105">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Portfolio Building</h2>
            <p className="text-gray-600 mb-4">5,000 – 20,000 m²</p>
            <p className="text-4xl font-bold text-teal-600 mb-2">
              ${multiply(3500).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              {annual ? 'per building / year (paid annually)' : 'per building / month'}
            </p>
            <ul className="space-y-3 text-gray-700 mb-6 text-sm">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Full HVAC Energy Optimizer suite</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>AloT Sensor Network integration (where deployed)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Advanced ESG dashboard and multi-building reports</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Dedicated customer success manager</span>
              </li>
            </ul>
            <button className="w-full bg-emerald-500 text-white py-3 rounded-lg font-bold hover:bg-emerald-600">
              Request Proposal
            </button>
          </div>

          {/* Large */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-slate-500">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Large / Campus</h2>
            <p className="text-gray-600 mb-4">20,000+ m² or multi-building campus</p>
            <p className="text-4xl font-bold text-teal-600 mb-2">Custom</p>
            <p className="text-sm text-gray-500 mb-6">
              Performance-based and portfolio pricing available.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6 text-sm">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Bespoke optimization strategy across multiple systems</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Custom ESG & investor reporting integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Optional performance-based pricing linked to savings</span>
              </li>
            </ul>
            <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-bold hover:bg-slate-900">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Simple ROI Estimator (static) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Simple ROI Example</h2>
          <p className="text-lg text-gray-700 mb-6">
            If a building spends $500,000 per year on energy and OCTR delivers 20% savings,
            that’s $100,000 per year in savings.  
            Even at $3,500/month (~$42,000/year), net benefit is ~$58,000/year.
          </p>
          <p className="text-sm text-gray-500">
            Actual savings will depend on baseline performance, climate, and building type.  
            We provide a tailored estimate for each building.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Get a Custom Pricing Proposal</h2>
          <p className="text-xl mb-8 opacity-95">
            Share your building details and we’ll prepare a tailored ROI and pricing model.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Request Custom Quote
          </a>
        </div>
      </section>
    </main>
  );
}
