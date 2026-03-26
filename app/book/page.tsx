"use client";

import Link from "next/link";
import { useState } from "react";

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    plan: "home",
    service: "",
    address: "",
    city: "",
    province: "ON",
    postalCode: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log("Form submitted:", formData);
      alert("Booking submitted! (Demo mode - no real booking created)");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-emerald-600">ð» Kodiak</div>
              <span className="text-sm text-slate-500">Durham Region</span>
            </Link>
            <Link href="/" className="text-slate-600 hover:text-emerald-600 transition">
              â Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className={`flex flex-col items-center ${step >= 1 ? "text-emerald-600" : "text-slate-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? "bg-emerald-600 text-white" : "bg-slate-200"}`}>
                1
              </div>
              <span className="text-sm mt-2">Service</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${step >= 2 ? "bg-emerald-600" : "bg-slate-200"}`}></div>
            <div className={`flex flex-col items-center ${step >= 2 ? "text-emerald-600" : "text-slate-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? "bg-emerald-600 text-white" : "bg-slate-200"}`}>
                2
              </div>
              <span className="text-sm mt-2">Details</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${step >= 3 ? "bg-emerald-600" : "bg-slate-200"}`}></div>
            <div className={`flex flex-col items-center ${step >= 3 ? "text-emerald-600" : "text-slate-400"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? "bg-emerald-600 text-white" : "bg-slate-200"}`}>
                3
              </div>
              <span className="text-sm mt-2">Confirm</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Choose Your Service</h2>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Select Plan</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, plan: "essential"})}
                      className={`p-4 border-2 rounded-lg text-left transition ${formData.plan === "essential" ? "border-emerald-600 bg-emerald-50" : "border-slate-200 hover:border-emerald-300"}`}
                    >
                      <div className="font-bold text-lg">Essential</div>
                      <div className="text-slate-600">$399 CAD/mo</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, plan: "home"})}
                      className={`p-4 border-2 rounded-lg text-left transition ${formData.plan === "home" ? "border-emerald-600 bg-emerald-50" : "border-slate-200 hover:border-emerald-300"}`}
                    >
                      <div className="font-bold text-lg">Home</div>
                      <div className="text-slate-600">$699 CAD/mo</div>
                      <div className="text-xs text-emerald-600 font-semibold mt-1">Popular</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, plan: "elite"})}
                      className={`p-4 border-2 rounded-lg text-left transition ${formData.plan === "elite" ? "border-emerald-600 bg-emerald-50" : "border-slate-200 hover:border-emerald-300"}`}
                    >
                      <div className="font-bold text-lg">Elite</div>
                      <div className="text-slate-600">$1,099 CAD/mo</div>
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">What service do you need?</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, service: "cleaning"})}
                      className={`p-6 border-2 rounded-lg transition ${formData.service === "cleaning" ? "border-emerald-600 bg-emerald-50" : "border-slate-200 hover:border-emerald-300"}`}
                    >
                      <div className="text-4xl mb-2">ð§¹</div>
                      <div className="font-bold">House Cleaning</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, service: "lawn"})}
                      className={`p-6 border-2 rounded-lg transition ${formData.service === "lawn" ? "border-emerald-600 bg-emerald-50" : "border-slate-200 hover:border-emerald-300"}`}
                    >
                      <div className="text-4xl mb-2">ð¿</div>
                      <div className="font-bold">Lawn Care</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, service: "handyman"})}
                      className={`p-6 border-2 rounded-lg transition ${formData.service === "handyman" ? "border-emerald-600 bg-emerald-50" : "border-slate-200 hover:border-emerald-300"}`}
                    >
                      <div className="text-4xl mb-2">ð§</div>
                      <div className="font-bold">Handyman</div>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formData.service}
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  Continue to Details
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Details</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none"
                      placeholder="123 Main Street"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none"
                        required
                      >
                        <option value="">Select city</option>
                        <option value="Clarington">Clarington</option>
                        <option value="Oshawa">Oshawa</option>
                        <option value="Whitby">Whitby</option>
                        <option value="Ajax">Ajax</option>
                        <option value="Pickering">Pickering</option>
                        <option value="Bowmanville">Bowmanville</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Province</label>
                      <input
                        type="text"
                        value={formData.province}
                        disabled
                        className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                      className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none"
                      placeholder="L1C 7G7"
                      pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                      required
                    />
                    <p className="text-sm text-slate-500 mt-1">Format: A1A 1A1</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time</label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="8am-10am">8:00 AM - 10:00 AM</option>
                        <option value="10am-12pm">10:00 AM - 12:00 PM</option>
                        <option value="12pm-2pm">12:00 PM - 2:00 PM</option>
                        <option value="2pm-4pm">2:00 PM - 4:00 PM</option>
                        <option value="4pm-6pm">4:00 PM - 6:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-slate-300 text-slate-700 py-4 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Information</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none"
                      placeholder="Trevor Cyr"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none"
                      placeholder="trevor@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 focus:border-emerald-600 focus:outline-none"
                      placeholder="(905) 123-4567"
                      pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                      required
                    />
                    <p className="text-sm text-slate-500 mt-1">Format: (905) 123-4567</p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6 space-y-3">
                    <h3 className="font-bold text-slate-900">Booking Summary</h3>
                    <div className="text-sm space-y-1">
                      <p><span className="text-slate-600">Plan:</span> <span className="font-semibold capitalize">{formData.plan}</span></p>
                      <p><span className="text-slate-600">Service:</span> <span className="font-semibold capitalize">{formData.service}</span></p>
                      <p><span className="text-slate-600">Location:</span> <span className="font-semibold">{formData.city}, ON</span></p>
                      <p><span className="text-slate-600">Date:</span> <span className="font-semibold">{formData.date}</span></p>
                      <p><span className="text-slate-600">Time:</span> <span className="font-semibold">{formData.time}</span></p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-slate-300 text-slate-700 py-4 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
