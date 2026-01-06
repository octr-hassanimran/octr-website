'use client';

import Link from 'next/link';
import { FiAward, FiBookOpen, FiGlobe } from 'react-icons/fi';

export default function About() {
  const founders = [
    {
      name: 'Byunggu Yoo',
      role: 'CEO & Co-Founder',
      bio: 'Real estate investment strategist with M.S. in Real Estate Development from Columbia University. Former valuation analyst at Savills with deep expertise in global real estate finance and ESG asset management.',
      education: 'M.S. Real Estate Development, Columbia University',
      expertise: 'Real Estate Finance, ESG Strategy, Capital Markets'
    },
    {
      name: 'Hassan Imran',
      role: 'CTO & Co-Founder',
      bio: 'AI and sensor systems expert with Ph.D. in Engineering from University of Cambridge (Sensor CDT). Led research on IoT and machine learning for building systems at Cambridge.',
      education: 'Ph.D. Engineering, University of Cambridge (Sensor CDT)',
      expertise: 'AI, Machine Learning, IoT Sensors, Physics-Informed Neural Networks'
    },
    {
      name: 'Yeongho Lee',
      role: 'Engineering Lead & Co-Founder',
      bio: 'HVAC and energy systems specialist with Ph.D. in Mechanical Engineering from Seoul National University RefLab. Former Senior Engineer at Samsung SDI working on energy storage and thermal systems.',
      education: 'Ph.D. Mechanical Engineering, Seoul National University',
      expertise: 'HVAC Systems, Energy Optimization, Thermal Dynamics, Batteries'
    },
    {
      name: 'Joshua Han',
      role: 'Operations Lead & Co-Founder',
      bio: 'Operations and investment specialist with B.Sc. in Management from University of Manchester. 5+ years experience in real estate investment operations and REIT management.',
      education: 'B.Sc. Management, University of Manchester',
      expertise: 'Operations, REIT Management, Real Estate Investment, Scaling'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About OCTR Technologies</h1>
          <p className="text-xl opacity-95">
            Founded by global experts in AI, energy systems, and real estate.
            <br />
            Building the future of autonomous building optimization.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-base text-gray-700 mb-4">
                Transform how the world operates buildings. We believe buildings shouldn't be run by manual protocols from the 1990s. They should be autonomous, intelligent, and optimized for cost, comfort, and carbon.
              </p>
              <p className="text-base text-gray-700">
                Our AI platform gives facility managers superpowers—autonomous control, real-time insights, and measurable ROI without capital investment.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-base text-gray-700 mb-4">
                A world where buildings optimize themselves. Where energy waste is eliminated. Where ESG compliance is automatic. Where every building is as smart as the people who designed it.
              </p>
              <p className="text-base text-gray-700">
                Buildings become profit centers, not cost centers. Decarbonization happens without sacrifice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">2023</div>
              <p className="text-sm text-gray-600">Founded</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <p className="text-sm text-gray-600">Buildings Deployed</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">$15M+</div>
              <p className="text-sm text-gray-600">Client Savings Generated</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">4</div>
              <p className="text-sm text-gray-600">Global Co-Founders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-teal-600 font-bold text-base mb-4">{founder.role}</p>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">{founder.bio}</p>
                <div className="border-t pt-4">
                  <p className="text-xs font-bold text-gray-600 mb-2">Education</p>
                  <p className="text-sm text-gray-700 mb-4">{founder.education}</p>
                  <p className="text-xs font-bold text-gray-600 mb-2">Expertise</p>
                  <p className="text-sm text-gray-700">{founder.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built OCTR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why We Built OCTR</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <FiAward className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Expertise</h3>
              <p className="text-sm text-gray-700">
                Our team has 20+ years in commercial real estate, investment, and facility operations. We understand the pain points intimately.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <FiBookOpen className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Foundation</h3>
              <p className="text-sm text-gray-700">
                Partnerships with Cambridge University and Seoul National University. Patents licensed from Korean government research institutes.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <FiGlobe className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-sm text-gray-700">
                We're solving the biggest environmental problem: 40% of global emissions come from buildings. This matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Trust */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Credentials & Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Academic Partnerships</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-sm text-gray-700"><strong>University of Cambridge</strong> - Sensor CDT Partnership (Sensor R&D)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-sm text-gray-700"><strong>Seoul National University</strong> - RefLab Collaboration (HVAC Research)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-sm text-gray-700"><strong>Columbia University</strong> - Real Estate & Finance Expertise</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technology & Patents</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-sm text-gray-700"><strong>Patent Portfolio</strong> - Licensed from Korean government research (KIER, KIST, ETRI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-sm text-gray-700"><strong>Physics-Informed AI</strong> - Proprietary PINN (Physics-Informed Neural Networks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span className="text-sm text-gray-700"><strong>Compliance Ready</strong> - ISO 27001, SOC 2 Type II, GDPR compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Meet the Team?</h2>
          <p className="text-base mb-8 opacity-95">
            Let's discuss how OCTR can transform your building operations.
          </p>
          <Link href="/contact" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Schedule a Meeting
          </Link>
        </div>
      </section>
    </main>
  );
}
