import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-emerald-600">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded mr-1">K</span>
                Kodiak
              </div>
              <span className="text-sm text-slate-500">Durham Region</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-slate-600 hover:text-emerald-600 transition">Services</Link>
              <Link href="#pricing" className="text-slate-600 hover:text-emerald-600 transition">Pricing</Link>
              <Link href="#how-it-works" className="text-slate-600 hover:text-emerald-600 transition">How It Works</Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="text-slate-600 hover:text-emerald-600 transition">Login</Link>
              <Link href="/book" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Home Services,<br />
              <span className="text-emerald-600">Simplified</span>
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto">
              Unlimited home services for one monthly subscription. Serving Durham Region &amp; GTA East.
            </p>
            <p className="text-sm text-slate-500 mb-8">
              Clarington &middot; Oshawa &middot; Whitby &middot; Ajax &middot; Pickering &middot; Bowmanville
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition shadow-lg">
                Get Started - From $399/month CAD
              </Link>
              <Link href="#how-it-works" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition">
                Learn More
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-4">No credit card required &middot; Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            All Your Home Needs, Covered
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            From weekly cleanings to seasonal landscaping, our vetted local contractors handle it all
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cleaning */}
            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <div className="bg-emerald-100 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">HC</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">House Cleaning</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Weekly or bi-weekly service</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Deep cleaning available</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Eco-friendly products</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Same cleaner each visit</li>
              </ul>
            </div>

            {/* Landscaping */}
            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <div className="bg-emerald-100 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">LL</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Lawn &amp; Landscaping</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Lawn mowing &amp; edging</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Spring/fall cleanup</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Garden maintenance</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Snow removal (winter)</li>
              </ul>
            </div>

            {/* Handyman */}
            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <div className="bg-emerald-100 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">HS</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Handyman Services</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Minor repairs</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Furniture assembly</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Painting &amp; touch-ups</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Light installations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Choose the plan that fits your home. All prices in CAD.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential */}
            <div className="border-2 rounded-xl p-8 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Essential</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$399</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> 2 cleanings per month</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> 2 lawn services per month</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> 1 handyman visit per month</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Priority booking</li>
              </ul>
              <Link href="/book?plan=essential" className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                Get Started
              </Link>
            </div>

            {/* Home */}
            <div className="border-2 border-emerald-600 rounded-xl p-8 bg-white shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Home</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$699</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Weekly cleanings</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Weekly lawn service</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> 3 handyman visits per month</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Seasonal services included</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> 24/7 support</li>
              </ul>
              <Link href="/book?plan=home" className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                Get Started
              </Link>
            </div>

            {/* Elite */}
            <div className="border-2 rounded-xl p-8 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Elite</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$1,099</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Unlimited cleanings</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Unlimited lawn service</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Unlimited handyman visits</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Snow removal guaranteed</li>
                <li className="flex items-center"><span className="text-emerald-600 mr-2 font-bold">&#10003;</span> Dedicated account manager</li>
              </ul>
              <Link href="/book?plan=elite" className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Choose Your Plan</h3>
              <p className="text-slate-600">Select the subscription that fits your home needs</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Book Services</h3>
              <p className="text-slate-600">Schedule cleanings, lawn care, or repairs anytime</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Meet Your Pro</h3>
              <p className="text-slate-600">Vetted local contractors arrive on time, every time</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enjoy Your Home</h3>
              <p className="text-slate-600">Relax while we handle the work</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Simplify Your Life?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join hundreds of Durham Region homeowners who have made the switch
          </p>
          <Link href="/book" className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition inline-block shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-white font-bold text-xl mb-4">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded mr-1 text-base">K</span>
                Kodiak
              </div>
              <p className="text-sm">Home services made simple for Durham Region</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">House Cleaning</Link></li>
                <li><Link href="#" className="hover:text-white">Lawn Care</Link></li>
                <li><Link href="#" className="hover:text-white">Handyman</Link></li>
                <li><Link href="#" className="hover:text-white">Snow Removal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Become a Contractor</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Info@KodiakTotalCare.com</li>
                <li>Clarington, ON</li>
                <li>Proudly Canadian</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 Kodiak Home Services. All rights reserved. | Serving Durham Region &amp; GTA East</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
