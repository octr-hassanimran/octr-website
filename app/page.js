'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.png"
          alt="Modern Office Building"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Buildings That Optimize Themselves</h1>
          <p className="text-xl md:text-2xl mb-4">15-30% energy savings with AI-powered autonomous HVAC optimization</p>
          <p className="text-lg mb-8 opacity-90">Zero capital investment. 6-18 month payback.</p>
          <a href="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
            Schedule Demo
          </a>
        </div>
      </section>

      {/* Why OCTR Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Why OCTR?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl font-bold text-teal-600 mb-4">15-30%</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Energy Savings</h3>
              <p className="text-gray-600">Proven autonomous optimization reduces energy consumption without capital investment.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl font-bold text-teal-600 mb-4">6-18M</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Payback Period</h3>
              <p className="text-gray-600">Immediate ROI with performance-based pricing. Pay for results, not promises.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl font-bold text-teal-600 mb-4">100%</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Explainable AI</h3>
              <p className="text-gray-600">Physics-informed neural networks combined with machine learning for transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-600 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">HVAC Energy Optimizer</h3>
              <p className="text-gray-600 mb-4">Autonomous HVAC control using reinforcement learning and physics-informed neural networks.</p>
              <div className="text-3xl font-bold text-teal-600">10-30% Savings</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-600 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AloT Sensor Network</h3>
              <p className="text-gray-600 mb-4">Multi-physics wireless sensors providing real-time building data with predictive maintenance.</p>
              <div className="text-3xl font-bold text-teal-600">15-25% Additional</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-600 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ESG Asset Management</h3>
              <p className="text-gray-600 mb-4">Unified carbon accounting and compliance reporting for institutional investors.</p>
              <div className="text-3xl font-bold text-teal-600">Custom ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Buildings?</h2>
          <p className="text-xl mb-8 opacity-90">Join 50+ buildings across APAC already optimizing with OCTR</p>
          <a href="/contact" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Schedule a Demo
          </a>
        </div>
      </section>
    </main>
  )
}
