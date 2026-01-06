'use client';

import { FiTrendingDown, FiClock, FiSmile } from 'react-icons/fi';

export default function CaseStudies() {
  return (
    <main className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl opacity-95">
            Real buildings. Real savings. Measurable ROI.
          </p>
        </div>
      </section>

      {/* G Valley Bizplex */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">G Valley Bizplex – Seoul, Korea</h2>
            <p className="text-lg text-gray-700 mb-4">
              Large mixed-use office complex with high energy costs and growing ESG pressure.
              Existing BAS was underutilized and operated with static schedules.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• 45,000 m² gross floor area</li>
              <li>• Central chiller plant and VAV distribution</li>
              <li>• Existing BAS with limited analytics</li>
            </ul>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">OCTR Deployment</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Connected OCTR AI to existing BAS (no hardware changes)</li>
              <li>• 7 days of baseline data to train physics-informed AI</li>
              <li>• Activated 20+ optimization strategies (OSS, TSM, pressure reset, staging)</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Results (Year 1)</h3>
            <div className="grid grid-cols-2 gap-6 mb-6 text-center">
              <div>
                <p className="text-4xl font-bold text-teal-600">20%</p>
                <p className="text-gray-600 text-sm">Energy reduction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">$300K</p>
                <p className="text-gray-600 text-sm">Annual savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">3M</p>
                <p className="text-gray-600 text-sm">Payback period</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">0</p>
                <p className="text-gray-600 text-sm">CapEx required</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FiSmile className="text-2xl text-teal-600" />
              <p className="text-gray-700 italic">
                “OCTR paid for itself in less than a year. We gained both savings and better comfort.”
              </p>
            </div>
            <p className="text-gray-500 text-sm">– Facility Manager, G Valley Bizplex</p>
          </div>
        </div>
      </section>

      {/* Office Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-lg order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Results (18 Months)</h3>
            <div className="grid grid-cols-2 gap-6 mb-6 text-center">
              <div>
                <p className="text-4xl font-bold text-teal-600">25%</p>
                <p className="text-gray-600 text-sm">Average portfolio savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">$450K</p>
                <p className="text-gray-600 text-sm">Annual savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">9M</p>
                <p className="text-gray-600 text-sm">Payback period</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">A-</p>
                <p className="text-gray-600 text-sm">ESG rating improved</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FiTrendingDown className="text-2xl text-teal-600" />
              <p className="text-gray-700 italic">
                “OCTR became central to our decarbonization strategy across the portfolio.”
              </p>
            </div>
            <p className="text-gray-500 text-sm">– Head of Asset Management, Office REIT</p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Corporate Office Portfolio – Asia</h2>
            <p className="text-lg text-gray-700 mb-4">
              Multi-building office portfolio across Asia, facing pressure from investors to
              reduce carbon intensity and improve ESG scores.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• 8 office buildings, 10,000–40,000 m² each</li>
              <li>• Mixed HVAC systems and BAS vendors</li>
              <li>• ESG reporting required at portfolio level</li>
            </ul>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">OCTR Deployment</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Connected all BAS systems to OCTR cloud platform</li>
              <li>• Deployed HVAC optimization first, then AloT sensors</li>
              <li>• Rolled out ESG dashboard for investors and lenders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Center */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Data Center – APAC</h2>
            <p className="text-lg text-gray-700 mb-4">
              High-density data center with strict uptime requirements and large cooling loads.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• 15 MW IT load</li>
              <li>• Redundant cooling infrastructure</li>
              <li>• Strict SLAs on temperature and uptime</li>
            </ul>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">OCTR Deployment</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Implemented fine-grained temperature and airflow optimization</li>
              <li>• Predictive maintenance for chillers and pumps</li>
              <li>• Integrated energy and uptime KPIs into a single view</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Results (Year 1)</h3>
            <div className="grid grid-cols-2 gap-6 mb-6 text-center">
              <div>
                <p className="text-4xl font-bold text-teal-600">18%</p>
                <p className="text-gray-600 text-sm">Cooling energy reduction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">$2.1M</p>
                <p className="text-gray-600 text-sm">Annual savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">0</p>
                <p className="text-gray-600 text-sm">Cooling-related incidents</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">24/7</p>
                <p className="text-gray-600 text-sm">Autonomous operation</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FiClock className="text-2xl text-teal-600" />
              <p className="text-gray-700 italic">
                “We achieved significant energy savings with no compromise on reliability.”
              </p>
            </div>
            <p className="text-gray-500 text-sm">– Operations Director, Data Center Operator</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Want a Case Study for Your Building?</h2>
          <p className="text-xl mb-8 opacity-95">
            We’ll build a tailored business case based on your energy bills and building profile.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Request Assessment
          </a>
        </div>
      </section>
    </main>
  );
}
