import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">
              RE
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Prime<span className="text-blue-600">Estates</span>
            </span>
          </div>


          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#properties" className="hover:text-blue-600 transition-colors">Properties</a>
            <a href="#agents" className="hover:text-blue-600 transition-colors">Agents</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>


          <div className="flex items-center gap-3">
            <Link 
              href="/loginagent" 
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/create_agent" 
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>


      <section id="hero" className="relative bg-gradient-to-b from-blue-50 to-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
              Real Estate Partner Portal
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Empowering Agents to Close Deals <span className="text-blue-600">Faster</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Manage listings, connect with buyers, and close property deals seamlessly with our high-performance agent dashboard and client network.
            </p>


            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Search by city, neighborhood, or ZIP..." 
                className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-colors">
                Search
              </button>
            </div>
          </div>


          <div className="relative">
            <div className="w-full h-80 sm:h-96 bg-slate-300 rounded-2xl overflow-hidden shadow-xl relative flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With Us</h2>
            <p className="text-slate-600">
              We provide independent agents and brokerages with modern tools, verified buyer leads, and automated property management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Instant Lead Match</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Receive instant notifications when qualified buyers express interest in your listed properties.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                📊
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Real-Time Analytics</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Track views, inquiries, and commission reports directly from your centralized dashboard.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                🔒
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Secure Verification</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Verify buyer authenticity and securely handle contracts and paperwork online.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Property Business?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join hundreds of active agents showcasing premium listings and closing deals every day.
          </p>
          <Link 
            href="/register" 
            className="inline-block px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-slate-100 transition-colors"
          >
            Create Agent Account
          </Link>
        </div>
      </section>


      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © {new Date().getFullYear()} PrimeEstates. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}