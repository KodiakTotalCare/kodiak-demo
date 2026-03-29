import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold" style={{ color: "#2D5F3F" }}>&#x1F43B; Kodiak</div>
              <span className="text-sm text-slate-500">Total Care</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-slate-600 hover:text-emerald-700 transition">Services</Link>
              <Link href="#pricing" className="text-slate-600 hover:text-emerald-700 transition">Pricing</Link>
              <Link href="#guarantee" className="text-slate-600 hover:text-emerald-700 transition">Our Guarantee</Link>
              <Link href="#how-it-works" className="text-slate-600 hover:text-emerald-700 transition">How It Works</Link>
              <Link href="/contractors" className="text-slate-600 hover:text-emerald-700 transition">For Contractors</Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="text-slate-600 hover:text-emerald-700 transition">Login</Link>
              <Link href="/book" className="text-white px-4 py-2 rounded-lg transition" style={{ backgroundColor: "#2D5F3F" }}>
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
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "#FFF3E0", color: "#C97B22" }}>
              &#x1F6E1;&#xFE0F; $2,500 Service Guarantee on Every Job
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#1B2A4A" }}>
              Your Entire Home,<br />
              <span style={{ color: "#2D5F3F" }}>One Subscription</span>
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              Cleaning, landscaping, handyman, seasonal maintenance, pest control, and licensed trades &mdash; all bundled into one transparent monthly plan. No hidden fees. No per-visit charges. No surprises.
            </p>
            <p className="text-sm text-slate-500 mb-8">
              Serving Clarington &middot; Oshawa &middot; Whitby &middot; Ajax &middot; Pickering &middot; Bowmanville
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg" style={{ backgroundColor: "#2D5F3F" }}>
                Get Started &mdash; From $199/month CAD
              </Link>
              <Link href="#how-it-works" className="border-2 border-slate-300 px-8 py-4 rounded-lg text-lg font-semibold transition" style={{ color: "#1B2A4A" }}>
                See How It Works
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-500">
              <span>&#x2705; WSIB Verified Contractors</span>
              <span>&#x2705; $2M Insured</span>
              <span>&#x2705; Licensed Trades</span>
              <span>&#x2705; Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kodiak - Differentiation */}
      <section className="py-16 text-white" style={{ backgroundColor: "#1B2A4A" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Durham Region Homeowners Choose Kodiak
          </h2>
          <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
            We studied every competitor in the market and built something better
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
                 <div className="text-4xl mb-3">&#x1F4B0;</div>
              <h3 className="text-lg font-bold mb-2">Transparent Pricing</h3>
              <p className="text-slate-300 text-sm">No hidden platform fees, no undisclosed commissions. What you see is what you pay &mdash; unlike Handy and TaskRabbit.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">&#x1F4E6;</div>
              <h3 className="text-lg font-bold mb-2">True All-Inclusive</h3>
              <p className="text-slate-300 text-sm">Every service bundled into your tier. No $50 service call fees, no per-visit charges. Just one predictable monthly bill.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">&#x1F343;</div>
              <h3 className="text-lg font-bold mb-2">Auto Seasonal Scheduling</h3>
              <p className="text-slate-300 text-sm">Furnace tune-ups in fall, AC in spring, lawn care in summer, snow removal in winter. We schedule it so you never forget.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">&#x1F6E1;&#xFE0F;</div>
              <h3 className="text-lg font-bold mb-2">$2,500 Guarantee</h3>
              <p className="text-slate-300 text-sm">Every job backed by our Service Guarantee. If we do not get it right, we cover up to $2,500 to make it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#1B2A4A" }}>
            Everything Your Home Needs
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            From weekly cleanings to licensed electrical work, our vetted local contractors handle it all under one roof
          </p>

          {/* Core Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">&#x1F9F9;</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B2A4A" }}>House Cleaning</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>&#10003; Weekly or bi-weekly regular cleaning</li>
                <li>&#10003; Deep cleaning (quarterly or monthly)</li>
                <li>&#10003; Carpet and upholstery cleaning</li>
                <li>&#10003; Window cleaning (interior/exterior)</li>
                <li>&#10003; Duct cleaning and dryer vent</li>
                <li>&#10003; Eco-friendly products available</li>
                <li>&#10003; Same cleaner each visit</li>
              </ul>
            </div>

            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">&#x1F33F;</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B2A4A" }}>Lawn &amp; Landscaping</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>&#10003; Lawn mowing, edging, and trimming</li>
                <li>&#10003; Spring and fall cleanup</li>
                <li>&#10003; Garden bed maintenance</li>
                <li>&#10003; Hedge and shrub trimming</li>
                <li>&#10003; Fertilization and aeration</li>
                <li>&#10003; Leaf removal</li>
                <li>&#10003; Seasonal Apr&ndash;Nov (auto-switches to snow)</li>
              </ul>
            </div>

            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">&#x1F527;</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B2A4A" }}>Handyman Services</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>&#10003; Minor repairs and fixes</li>
                <li>&#10003; Furniture assembly</li>
                <li>&#10003; Painting and touch-ups</li>
                <li>&#10003; Light and fixture installation</li>
                <li>&#10003; Drywall patching</li>
                <li>&#10003; Shelving and mounting</li>
                <li>&#10003; Caulking and weatherstripping</li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-8 hover:shadow-lg transition bg-slate-50">
              <div className="text-4xl mb-4">&#x2744;&#xFE0F;</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B2A4A" }}>Seasonal Maintenance</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>&#10003; Snow removal (Dec&ndash;Mar)</li>
                <li>&#10003; Ice management and salting</li>
                <li>&#10003; Furnace tune-up (fall)</li>
                <li>&#10003; AC tune-up (spring)</li>
                <li>&#10003; Gutter cleaning</li>
                <li>&#10003; Winterization and spring prep</li>
                <li>&#10003; Automatically scheduled for you</li>
              </ul>
            </div>

            <div className="border rounded-xl p-8 hover:shadow-lg transition bg-slate-50">
              <div className="text-4xl mb-4">&#x1F41B;</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B2A4A" }}>Pest Control</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>&#10003; Annual pest inspection</li>
                <li>&#10003; Preventive treatment</li>
                <li>&#10003; Ant, spider, and rodent control</li>
                <li>&#10003; Wasp nest removal</li>
                <li>&#10003; Included at Home and Elite tiers</li>
                <li>&#10003; Licensed pest control technicians</li>
              </ul>
            </div>

            <div className="border rounded-xl p-8 hover:shadow-lg transition bg-slate-50">
              <div className="text-4xl mb-4">&#x26A1;</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1B2A4A" }}>Licensed Trades</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>&#10003; Licensed plumbers</li>
                <li>&#10003; Licensed electricians</li>
                <li>&#10003; HVAC technicians</li>
                <li>&#10003; Red Seal certified trades</li>
                <li>&#10003; Member-discount on quoted work</li>
                <li>&#10003; All properly insured and WSIB verified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Seasonal Scheduling Feature */}
      <section className="py-20" style={{ backgroundColor: "#F0F7F2" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: "#1B2A4A" }}>
                We Remember So You Don&apos;t Have To
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                No other platform does this. Kodiak automatically schedules seasonal maintenance throughout the year, so your furnace gets tuned up before winter hits and your AC is ready for summer. No calls to make, no appointments to remember.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">&#x1F33B;</div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#1B2A4A" }}>Spring (Mar&ndash;May)</h4>
                    <p className="text-slate-600 text-sm">AC tune-up, spring cleanup, garden prep, window cleaning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">&#x2600;&#xFE0F;</div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#1B2A4A" }}>Summer (Jun&ndash;Aug)</h4>
                    <p className="text-slate-600 text-sm">Weekly lawn care, pest control, exterior maintenance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">&#x1F341;</div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#1B2A4A" }}>Fall (Sep&ndash;Nov)</h4>
                    <p className="text-slate-600 text-sm">Furnace tune-up, gutter cleaning, fall cleanup, winterization</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">&#x2744;&#xFE0F;</div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#1B2A4A" }}>Winter (Dec&ndash;Feb)</h4>
                    <p className="text-slate-600 text-sm">Snow removal, ice management, indoor deep cleaning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-bold text-lg mb-4" style={{ color: "#1B2A4A" }}>&#x1F4C5; Your Upcoming Schedule</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#F0F7F2" }}>
                  <div>
                    <p className="font-semibold text-sm">House Cleaning</p>
                    <p className="text-xs text-slate-500">Mon, Apr 6 &middot; 9:00 AM</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: "#2D5F3F", color: "white" }}>Confirmed</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#FFF3E0" }}>
                  <div>
                    <p className="font-semibold text-sm">AC Tune-Up</p>
                    <p className="text-xs text-slate-500">Wed, Apr 15 &middot; 10:00 AM</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: "#C97B22", color: "white" }}>Seasonal</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#F0F7F2" }}>
                  <div>
                    <p className="font-semibold text-sm">Lawn Mowing</p>
                    <p className="text-xs text-slate-500">Thu, Apr 17 &middot; 8:00 AM</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: "#2D5F3F", color: "white" }}>Recurring</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#F0F7F2" }}>
                  <div>
                    <p className="font-semibold text-sm">Window Cleaning</p>
                    <p className="text-xs text-slate-500">Mon, Apr 20 &middot; 1:00 PM</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: "#2D5F3F", color: "white" }}>Confirmed</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-slate-50">
                  <div>
                    <p className="font-semibold text-sm">Pest Inspection</p>
                    <p className="text-xs text-slate-500">Fri, May 1 &middot; 11:00 AM</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-200 text-slate-600">Upcoming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* $2,500 Guarantee */}
      <section id="guarantee" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">&#x1F6E1;&#xFE0F;</div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#1B2A4A" }}>
            The $2,500 Service Guarantee
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Every job performed through Kodiak is backed by our guarantee. If our work does not meet your standards, we will send another contractor to make it right &mdash; or cover up to $2,500 in costs. No questions, no hassle.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl mb-3">&#x2705;</div>
              <h4 className="font-bold mb-2" style={{ color: "#1B2A4A" }}>100% Satisfaction</h4>
              <p className="text-slate-600 text-sm">Not happy? We redo the job free of charge within 48 hours</p>
            </div>
            <div>
              <div className="text-3xl mb-3">&#x1F4B3;</div>
              <h4 className="font-bold mb-2" style={{ color: "#1B2A4A" }}>Up to $2,500 Coverage</h4>
              <p className="text-slate-600 text-sm">Property damage during service? We cover it. Every contractor carries $2M insurance</p>
            </div>
            <div>
              <div className="text-3xl mb-3">&#x1F512;</div>
              <h4 className="font-bold mb-2" style={{ color: "#1B2A4A" }}>Vetted &amp; Verified</h4>
              <p className="text-slate-600 text-sm">WSIB verified, background checked, insured, and licensed where required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#1B2A4A" }}>
            Simple, All-Inclusive Pricing
          </h2>
          <p className="text-center text-slate-600 mb-4 max-w-2xl mx-auto">
            Choose the plan that fits your home. Every service included &mdash; no per-visit charges, no hidden fees.
          </p>
          <p className="text-center text-sm text-slate-500 mb-12">All prices in CAD + HST. Annual billing saves 15%.</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential */}
            <div className="border-2 rounded-xl p-8 bg-white">
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#1B2A4A" }}>Essential</h3>
              <p className="text-slate-500 text-sm mb-4">For homeowners who want the basics covered</p>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: "#1B2A4A" }}>$199</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">or $2,029/year (save $359)</p>
              <ul className="space-y-3 text-slate-600 text-sm mb-8">
                <li>&#10003; 2 house cleanings/month</li>
                <li>&#10003; 2 lawn services/month (seasonal)</li>
                <li>&#10003; 2 handyman hours/month</li>
                <li>&#10003; Snow removal (winter months)</li>
                <li>&#10003; Priority booking</li>
                <li>&#10003; 24/7 customer support</li>
                <li className="text-slate-400">&#10007; Pest control</li>
                <li className="text-slate-400">&#10007; Licensed trades discount</li>
                <li className="text-slate-400">&#10007; Deep cleaning</li>
              </ul>
              <Link href="/book?plan=essential" className="block w-full text-center py-3 rounded-lg font-semibold transition border-2" style={{ borderColor: "#2D5F3F", color: "#2D5F3F" }}>
                Get Started
              </Link>
            </div>

            {/* Home */}
            <div className="border-2 rounded-xl p-8 bg-white shadow-xl relative" style={{ borderColor: "#2D5F3F" }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: "#2D5F3F" }}>
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#1B2A4A" }}>Home</h3>
              <p className="text-slate-500 text-sm mb-4">For families who want full-service coverage</p>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: "#1B2A4A" }}>$449</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">or $4,579/year (save $809)</p>
              <ul className="space-y-3 text-slate-600 text-sm mb-8">
                <li>&#10003; 4 house cleanings/month</li>
                <li>&#10003; 4 lawn services/month (seasonal)</li>
                <li>&#10003; 4 handyman hours/month</li>
                <li>&#10003; Quarterly deep clean included</li>
                <li>&#10003; Snow removal + ice management</li>
                <li>&#10003; Annual pest control included</li>
                <li>&#10003; Free minor repairs (&lt; $150 value)</li>
                <li>&#10003; Seasonal HVAC tune-ups</li>
                <li>&#10003; 24/7 priority support</li>
              </ul>
              <Link href="/book?plan=home" className="block w-full text-white text-center py-3 rounded-lg font-semibold transition" style={{ backgroundColor: "#2D5F3F" }}>
                Get Started
              </Link>
            </div>

            {/* Elite */}
            <div className="border-2 rounded-xl p-8 bg-white">
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#1B2A4A" }}>Elite</h3>
              <p className="text-slate-500 text-sm mb-4">Full concierge for discerning homeowners</p>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: "#1B2A4A" }}>$799</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">or $8,149/year (save $1,439)</p>
              <ul className="space-y-3 text-slate-600 text-sm mb-8">
                <li>&#10003; 8 house cleanings/month</li>
                <li>&#10003; 8 lawn services/month (seasonal)</li>
                <li>&#10003; 8 handyman hours/month</li>
                <li>&#10003; Monthly deep clean included</li>
                <li>&#10003; Full snow removal + salting</li>
                <li>&#10003; Pest control (unlimited visits)</li>
                <li>&#10003; Free repairs (&lt; $500 value)</li>
                <li>&#10003; HVAC, duct, and gutter maintenance</li>
                <li>&#10003; Carpet and window cleaning</li>
                <li>&#10003; Same-day emergency service</li>
                <li>&#10003; Personal account manager</li>
                <li>&#10003; 10% off licensed trade quotes</li>
              </ul>
              <Link href="/book?plan=elite" className="block w-full text-center py-3 rounded-lg font-semibold transition border-2" style={{ borderColor: "#C97B22", color: "#C97B22" }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#1B2A4A" }}>
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white" style={{ backgroundColor: "#2D5F3F" }}>1</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#1B2A4A" }}>Choose Your Plan</h3>
              <p className="text-slate-600 text-sm">Pick Essential, Home, or Elite based on your household needs</p>
            </div>
            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white" style={{ backgroundColor: "#2D5F3F" }}>2</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#1B2A4A" }}>Book in 60 Seconds</h3>
              <p className="text-slate-600 text-sm">Schedule any included service online with next-day availability</p>
            </div>
            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white" style={{ backgroundColor: "#2D5F3F" }}>3</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#1B2A4A" }}>Vetted Pros Arrive</h3>
              <p className="text-slate-600 text-sm">WSIB verified, insured, and background-checked local contractors</p>
            </div>
            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white" style={{ backgroundColor: "#2D5F3F" }}>4</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#1B2A4A" }}>We Handle the Rest</h3>
              <p className="text-slate-600 text-sm">Seasonal services auto-scheduled. Reminders sent. You just enjoy your home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison to Competitors */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#1B2A4A" }}>
            How Kodiak Compares
          </h2>
          <p className="text-center text-slate-600 mb-12">
            See why a true all-inclusive subscription beats the alternatives
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr style={{ backgroundColor: "#1B2A4A" }}>
                  <th className="text-left text-white p-4 rounded-tl-xl text-sm">Feature</th>
                  <th className="text-center text-white p-4 text-sm font-bold" style={{ backgroundColor: "#2D5F3F" }}>Kodiak</th>
                  <th className="text-center text-white p-4 text-sm">Gig Platforms</th>
                  <th className="text-center text-white p-4 rounded-tr-xl text-sm">Discount Clubs</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4 font-medium">Bundled all-inclusive services</td>
                  <td className="p-4 text-center font-bold" style={{ color: "#2D5F3F" }}>&#10003;</td>
                  <td className="p-4 text-center text-red-500">&#10007;</td>
                  <td className="p-4 text-center text-red-500">&#10007;</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-medium">Transparent pricing (no hidden fees)</td>
                  <td className="p-4 text-center font-bold" style={{ color: "#2D5F3F" }}>&#10003;</td>
                  <td className="p-4 text-center text-red-500">&#10007;</td>
                  <td className="p-4 text-center text-slate-400">Partial</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">No per-visit service charges</td>
                  <td className="p-4 text-center font-bold" style={{ color: "#2D5F3F" }}>&#10003;</td>
                  <td className="p-4 text-center text-red-500">&#10007;</td>
                  <td className="p-4 text-center text-red-500">&#10007;</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-medium">Automated seasonal scheduling</td>
                  <td className="p-4 text-center font-bold" style={{ color: "#2D5F3F" }}>&#10003;</td>
                  <td className="p-4 text-center text-red-500">&#10007;</td>
                  <td className="p-4 text-center text-slate-400">Reminders only</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Licensed trades (plumbing, electrical)</td>
                  <td className="p-4 text-center font-bold" style={{ color: "#2D5F3F" }}>&#10003;</td>
                  <td className="p-4 text-center text-red-500">&#10007;</td>
                  <td className="p-4 text-center text-slate-400">Some</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-medium">Durham Region coverage</td>
                  <td className="p-4 text-center font-bold" style={{ color: "#2D5F3F" }}>Full</td>
                  <td className="p-4 text-center text-slate-400">Limited</td>
                  <td className="p-4 text-center text-slate-400">Varies</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">$2,500 service guarantee</td>
                  <td className="p-4 text-center font-bold" style={{ color: "#2D5F3F" }}>&#10003;</td>
                  <td className="p-4 text-center text-red-500">&#10007;</td>
                  <td className="p-4 text-center text-slate-400">Varies</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium rounded-bl-xl">Pest control included</td>
                  <td className="p-4 text-center font-bold" style={{ color: "#2D5F3F" }}>Home + Elite</td>
                  <td className="p-4 text-center text-red-500">&#10007;</td>
                  <td className="p-4 text-center rounded-br-xl text-red-500">&#10007;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* For Contractors CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: "#1B2A4A" }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contractors: Keep 70% of Every Job
                </h2>
                <p className="text-slate-300 mb-6">
                  While other platforms take 35&ndash;45% and penalize you for cancellations, Kodiak pays you fairly. Weekly direct deposits, no hidden deductions, and full tax document support for CRA compliance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span style={{ color: "#C97B22" }}>&#10003;</span>
                    <span>70/30 split &mdash; industry-leading contractor pay</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: "#C97B22" }}>&#10003;</span>
                    <span>Weekly direct deposit via Stripe Connect</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: "#C97B22" }}>&#10003;</span>
                    <span>No penalties for cancellations or schedule changes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: "#C97B22" }}>&#10003;</span>
                    <span>T4A tax slips and HST tracking built in</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span style={{ color: "#C97B22" }}>&#10003;</span>
                    <span>Consistent, year-round work in Durham Region</span>
                  </li>
                </ul>
                <Link href="/contractors" className="inline-block px-8 py-3 rounded-lg font-semibold transition text-white" style={{ backgroundColor: "#C97B22" }}>
                  Apply to Join Kodiak
                </Link>
              </div>
              <div className="bg-white rounded-xl p-8 text-slate-900">
                <h3 className="font-bold text-lg mb-4" style={{ color: "#1B2A4A" }}>&#x1F4B0; Weekly Earnings Example</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-slate-600">Mon &mdash; House Cleaning (3 hrs)</span>
                    <span className="font-semibold">$157.50</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-slate-600">Tue &mdash; Lawn Care (4 hrs)</span>
                    <span className="font-semibold">$210.00</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-slate-600">Wed &mdash; Handyman (5 hrs)</span>
                    <span className="font-semibold">$262.50</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-slate-600">Thu &mdash; Cleaning (3 hrs)</span>
                    <span className="font-semibold">$157.50</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-slate-600">Fri &mdash; Lawn + Handyman (6 hrs)</span>
                    <span className="font-semibold">$315.00</span>
                  </div>
                  <div className="flex justify-between pt-2 font-bold text-base" style={{ color: "#2D5F3F" }}>
                    <span>Weekly Take-Home (70%)</span>
                    <span>$1,102.50</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Based on 21 billable hours at avg. $75/hr. Deposited weekly via Stripe Connect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white" style={{ backgroundColor: "#2D5F3F" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Stop Juggling Contractors?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join Durham Region homeowners who switched to one subscription for everything. Save time, save money, and never miss seasonal maintenance again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block shadow-lg" style={{ color: "#2D5F3F" }}>
              Start Your Membership
            </Link>
            <Link href="#pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block">
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: "#1B2A4A", color: "#94A3B8" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-white font-bold text-xl mb-4">&#x1F43B; Kodiak Total Care</div>
              <p className="text-sm">All-inclusive home services for Durham Region homeowners. One subscription, complete peace of mind.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#services" className="hover:text-white">House Cleaning</Link></li>
                <li><Link href="#services" className="hover:text-white">Lawn &amp; Landscaping</Link></li>
                <li><Link href="#services" className="hover:text-white">Handyman</Link></li>
                <li><Link href="#services" className="hover:text-white">Snow Removal</Link></li>
                <li><Link href="#services" className="hover:text-white">Pest Control</Link></li>
                <li><Link href="#services" className="hover:text-white">Licensed Trades</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#guarantee" className="hover:text-white">Our Guarantee</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/contractors" className="hover:text-white">Become a Contractor</Link></li>
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Info@KodiakTotalCare.com</li>
                <li>Clarington, Ontario</li>
                <li>Proudly Canadian</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded" style={{ backgroundColor: "#243757" }}>WSIB Verified</span>
                <span className="px-2 py-1 rounded" style={{ backgroundColor: "#243757" }}>$2M Insured</span>
                <span className="px-2 py-1 rounded" style={{ backgroundColor: "#243757" }}>Licensed</span>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm" style={{ borderColor: "#2A3F5F" }}>
            <p>&copy; 2026 Kodiak Total Care. All rights reserved. | Serving Durham Region &amp; GTA East</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
