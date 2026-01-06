'use client';

import { FiCpu, FiLayers, FiActivity, FiCheck } from 'react-icons/fi';

export default function Technology() {
  return (
    <main className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Technology</h1>
          <p className="text-xl opacity-95">
            Physics-informed AI built specifically for buildings.  
            4-layer architecture. Explainable. Robust. Production-ready.
          </p>
        </div>
      </section>

      {/* 4-Layer Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">4-Layer AI Architecture</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Layer 1</h3>
              <p className="text-teal-600 font-semibold mb-2">Physics-Informed Digital Twin</p>
              <p className="text-gray-700 text-sm">
                Physics-Informed Neural Network (PINN) combines building physics equations
                with data-driven learning to model your building with high accuracy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Layer 2</h3>
              <p className="text-teal-600 font-semibold mb-2">Supervisory Intelligence</p>
              <p className="text-gray-700 text-sm">
                Learns patterns from weather, occupancy, and operations to set optimal targets
                for comfort, energy, and cost across the building.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Layer 3</h3>
              <p className="text-teal-600 font-semibold mb-2">Plant Optimization</p>
              <p className="text-gray-700 text-sm">
                Optimizes chillers, boilers, pumps, and other central plant equipment
                for maximum efficiency with multi-objective control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Layer 4</h3>
              <p className="text-teal-600 font-semibold mb-2">Distribution & Zones</p>
              <p className="text-gray-700 text-sm">
                Coordinates hundreds of zones in parallel using distributed optimization
                to maintain comfort while minimizing energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Physics-Informed AI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Physics-Informed AI</h2>
            <p className="text-lg text-gray-700 mb-4">
              Most AI platforms treat buildings as black boxes. OCTR combines thermodynamic equations
              with machine learning, making decisions that obey physical laws while adapting to real data.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Requires only ~7 days of training data vs. 30+ days for pure ML</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>53% more accurate than baseline ML models in internal benchmarks</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>3.4× more robust to sensor failures and missing data</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-10 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FiCpu className="text-3xl text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900">Explainable Control</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Every control decision is validated against physical constraints and
              explainability methods (e.g., SHAP/LIME-style analyses), giving operators visibility into why changes happen.
            </p>
            <p className="text-gray-700">
              This reduces the trust gap between AI systems and facility teams, and
              supports regulatory and ESG reporting requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Objective Optimization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Multi-Objective Optimization</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
            OCTR does not just minimize energy. It optimizes across five competing objectives simultaneously:
            energy, cost, comfort, equipment health, and regulatory constraints.
          </p>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {['Energy Use', 'Operating Cost', 'Comfort', 'Equipment Life', 'Compliance'].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow">
                <p className="text-xl font-bold text-teal-600 mb-2">{item}</p>
                <p className="text-sm text-gray-600">Continuously balanced in real time.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Seamless Integration</h2>
            <p className="text-lg text-gray-700 mb-4">
              OCTR connects to your existing Building Automation System and meters without requiring
              hardware replacement or major retrofits.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Supports BACnet, Modbus, and OPC-UA protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Cloud-native SaaS architecture, no on-site servers required</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Non-disruptive deployment with minimal downtime</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Security & Compliance</h2>
            <p className="text-lg text-gray-700 mb-4">
              Enterprise-grade security is built in from day one, designed for large commercial portfolios
              and institutional investors.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Data encrypted in transit and at rest</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Architected to align with ISO 27001, SOC 2 Type II, and GDPR best practices</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Outbound-only connections from building networks where required</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">See the Technology in a Live Building</h2>
          <p className="text-xl mb-8 opacity-95">
            Request a technical demo with our engineering team and walk through a live deployment.
          </p>
          <a
            href="/contact"
            className="inline-block bg-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-400 transition"
          >
            Book Technical Demo
          </a>
        </div>
      </section>
    </main>
  );
}
