import Link from "next/link";

export default function ContractorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold" style={{ color: "#2D5F3F" }}>{"\u{1F43B}"} Kodiak</div>
              <span className="text-sm text-slate-500">Total Care</span>
            </Link>
            <div className="flex space-x-4">
              <Link href="/" className="text-slate-600 hover:text-emerald-700 transition">Home</Link>
              <Link href="/contractors/login" className="text-slate-600 hover:text-emerald-700 transition">Contractor Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "#FFF3E0", color: "#C97B22" }}>
            Now Recruiting in Durham Region
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#1B2A4A" }}>
            Keep <span style={{ color: "#2D5F3F" }}>70%</span> of Every Job
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto">
            While other platforms take 35&ndash;45% and punish you for cancellations, Kodiak pays you what you deserve. Weekly direct deposits, no hidden deductions, no penalties.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Serving Clarington &middot; Oshawa &middot; Whitby &middot; Ajax &middot; Pickering &middot; Bowmanville
          </p>
          <Link href="#apply" className="inline-block text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg" style={{ backgroundColor: "#2D5F3F" }}>
            Apply to Join Kodiak
          </Link>
        </div>
      </section>

      {/* The Kodiak Difference */}
      <section className="py-16 text-white" style={{ backgroundColor: "#1B2A4A" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Contractors Choose Kodiak</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl" style={{ backgroundColor: "#243757" }}>
              <div className="text-3xl mb-3">{"\u{1F4B0}"}</div>
              <h3 className="text-lg font-bold mb-2">70/30 Revenue Split</h3>
              <p className="text-slate-300 text-sm">You keep 70% of every job. That is the highest contractor split in the Ontario home services market. Handy and TaskRabbit take 35&ndash;45%.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: "#243757" }}>
              <div className="text-3xl mb-3">{"\u{1F4B3}"}</div>
              <h3 className="text-lg font-bold mb-2">Weekly Direct Deposit</h3>
              <p className="text-slate-300 text-sm">Paid every week via Stripe Connect directly to your Canadian bank account. No waiting 30 days, no payment hold surprises.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: "#243757" }}>
              <div className="text-3xl mb-3">{"\u{1F6AB}"}</div>
              <h3 className="text-lg font-bold mb-2">No Penalties</h3>
              <p className="text-slate-300 text-sm">Need to reschedule? No $10&ndash;$50 penalty fees like Handy charges. We treat you like a professional, not a replaceable gig worker.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: "#243757" }}>
              <div className="text-3xl mb-3">{"\u{1F4C5}"}</div>
              <h3 className="text-lg font-bold mb-2">Year-Round Work</h3>
              <p className="text-slate-300 text-sm">Our subscription model means consistent bookings. Lawn care in summer, snow removal in winter, cleaning and handyman all year.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: "#243757" }}>
              <div className="text-3xl mb-3">{"\u{1F4CA}"}</div>
              <h3 className="text-lg font-bold mb-2">Tax Documents Built In</h3>
              <p className="text-slate-300 text-sm">Your contractor dashboard tracks earnings, generates T4A tax slips, and records HST automatically. CRA compliance made easy.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: "#243757" }}>
              <div className="text-3xl mb-3">{"\u{1F3E0}"}</div>
              <h3 className="text-lg font-bold mb-2">Local Community Focus</h3>
              <p className="text-slate-300 text-sm">Work in your own neighbourhood. Durham Region only means shorter drive times, repeat customers, and real relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pay Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#1B2A4A" }}>How Your Pay Compares</h2>
          <p className="text-center text-slate-600 mb-12">On a $100 job, here is what you actually take home</p>

          <div className="space-y-4">
            {[
              { name: "Kodiak Total Care", pct: 70, color: "#2D5F3F", you: "$70.00", highlight: true },
              { name: "OddJob (employee model)", pct: 55, color: "#6B7280", you: "$55.00", highlight: false },
              { name: "TaskRabbit", pct: 58, color: "#6B7280", you: "$58.00", highlight: false },
              { name: "Handy", pct: 55, color: "#6B7280", you: "$55.00 + hidden fees", highlight: false },
              { name: "Jiffy", pct: 60, color: "#6B7280", you: "$60.00", highlight: false },
            ].map(item => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="w-40 text-sm font-medium text-right" style={{ color: item.highlight ? "#2D5F3F" : "#64748B" }}>
                  {item.name}
                </div>
                <div className="flex-1 bg-slate-100 rounded-full h-8 overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-3 text-white text-xs font-bold transition-all"
                    style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                  >
                    {item.you}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20" style={{ backgroundColor: "#F0F7F2" }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1B2A4A" }}>What You Could Earn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B2A4A" }}>Part-Time</h3>
              <p className="text-sm text-slate-500 mb-4">15 hrs/week</p>
              <div className="text-4xl font-bold mb-2" style={{ color: "#2D5F3F" }}>$787</div>
              <p className="text-sm text-slate-500">per week take-home</p>
              <p className="text-xs text-slate-400 mt-2">~$3,150/month at avg $75/hr</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2" style={{ borderColor: "#2D5F3F" }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B2A4A" }}>Full-Time</h3>
              <p className="text-sm text-slate-500 mb-4">30 hrs/week</p>
              <div className="text-4xl font-bold mb-2" style={{ color: "#2D5F3F" }}>$1,575</div>
              <p className="text-sm text-slate-500">per week take-home</p>
              <p className="text-xs text-slate-400 mt-2">~$6,300/month at avg $75/hr</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B2A4A" }}>Power Pro</h3>
              <p className="text-sm text-slate-500 mb-4">40 hrs/week</p>
              <div className="text-4xl font-bold mb-2" style={{ color: "#2D5F3F" }}>$2,100</div>
              <p className="text-sm text-slate-500">per week take-home</p>
              <p className="text-xs text-slate-400 mt-2">~$8,400/month at avg $75/hr</p>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">Earnings vary by service type and hours worked. Based on average $75/hr billing rate with 70% contractor split. Deposited weekly via Stripe Connect.</p>
        </div>
      </section>

      {/* Who We Are Looking For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1B2A4A" }}>Who We Are Looking For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-8">
              <div className="text-4xl mb-4">{"\u{1F9F9}"}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1B2A4A" }}>House Cleaners</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>{"\u2713"} Experience in residential cleaning</li>
                <li>{"\u2713"} Own transportation</li>
                <li>{"\u2713"} Cleaning supplies provided or own</li>
                <li>{"\u2713"} Reliable and professional</li>
              </ul>
            </div>
            <div className="border rounded-xl p-8">
              <div className="text-4xl mb-4">{"\u{1F33F}"}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1B2A4A" }}>Landscapers</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>{"\u2713"} Lawn care and garden experience</li>
                <li>{"\u2713"} Own equipment (mower, trimmer, blower)</li>
                <li>{"\u2713"} Snow removal capability (winter)</li>
                <li>{"\u2713"} Valid driver licence</li>
              </ul>
            </div>
            <div className="border rounded-xl p-8">
              <div className="text-4xl mb-4">{"\u{1F527}"}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1B2A4A" }}>Handypeople &amp; Trades</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>{"\u2713"} General repair skills</li>
                <li>{"\u2713"} Licensed trades a plus (plumbing, electrical)</li>
                <li>{"\u2713"} Own tools</li>
                <li>{"\u2713"} Red Seal or Ontario certifications welcome</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1B2A4A" }}>What You Need to Get Started</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "\u{1F6E1}\u{FE0F}", title: "Commercial General Liability Insurance", desc: "$2M minimum coverage (standard in Ontario)" },
              { icon: "\u{1F3E5}", title: "WSIB Coverage", desc: "Active Workplace Safety & Insurance Board account" },
              { icon: "\u{1F4F1}", title: "Smartphone", desc: "For the Kodiak contractor app (job management, scheduling)" },
              { icon: "\u{1F698}", title: "Reliable Transportation", desc: "Vehicle to reach customers throughout Durham Region" },
              { icon: "\u{1F4CB}", title: "Background Check", desc: "We verify all contractors for customer safety" },
              { icon: "\u{1F4B3}", title: "Canadian Bank Account", desc: "For weekly Stripe Connect direct deposits" },
            ].map(req => (
              <div key={req.title} className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm">
                <div className="text-2xl">{req.icon}</div>
                <div>
                  <h4 className="font-bold text-sm" style={{ color: "#1B2A4A" }}>{req.title}</h4>
                  <p className="text-slate-600 text-sm">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="py-20 text-white" style={{ backgroundColor: "#2D5F3F" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Earn More and Work Better?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join the Durham Region contractors who are building real careers &mdash; not racing to the bottom on gig platforms.
          </p>
          <div className="bg-white rounded-xl p-8 max-w-lg mx-auto text-left">
            <h3 className="font-bold text-lg mb-4" style={{ color: "#1B2A4A" }}>Apply in 2 Minutes</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone</label>
                <input type="tel" className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none" placeholder="(905) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Primary Service</label>
                <select className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none">
                  <option value="">Select your specialty</option>
                  <option>House Cleaning</option>
                  <option>Landscaping &amp; Lawn Care</option>
                  <option>Handyman / General Repairs</option>
                  <option>Licensed Plumber</option>
                  <option>Licensed Electrician</option>
                  <option>HVAC Technician</option>
                  <option>Pest Control</option>
                  <option>Snow Removal</option>
                  <option>Multiple Services</option>
                </select>
              </div>
              <button
                onClick={() => alert("Application submitted! (Demo mode)")}
                className="w-full text-white py-4 rounded-lg font-semibold transition"
                style={{ backgroundColor: "#2D5F3F" }}
              >
                Submit Application
              </button>
              <p className="text-xs text-slate-500 text-center">We review applications within 48 hours. You will hear from us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: "#1B2A4A", color: "#94A3B8" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white font-bold text-xl">{"\u{1F43B}"} Kodiak Total Care</div>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="#apply" className="hover:text-white">Apply Now</Link>
              <Link href="/contractors/login" className="hover:text-white">Contractor Login</Link>
            </div>
            <p className="text-xs">&copy; 2026 Kodiak Total Care. Clarington, Ontario.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
