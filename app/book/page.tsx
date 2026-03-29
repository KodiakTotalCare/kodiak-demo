"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { id: "cleaning", label: "House Cleaning", icon: "\u{1F9F9}", desc: "Regular, deep, carpet, or window cleaning" },
  { id: "lawn", label: "Lawn & Landscaping", icon: "\u{1F33F}", desc: "Mowing, trimming, garden, spring/fall cleanup" },
  { id: "handyman", label: "Handyman", icon: "\u{1F527}", desc: "Repairs, assembly, painting, installations" },
  { id: "seasonal", label: "Seasonal Maintenance", icon: "\u{2744}\u{FE0F}", desc: "Snow removal, furnace/AC tune-up, gutter cleaning" },
  { id: "pest", label: "Pest Control", icon: "\u{1F41B}", desc: "Inspection, prevention, removal (Home & Elite)" },
  { id: "trades", label: "Licensed Trades", icon: "\u{26A1}", desc: "Plumbing, electrical, HVAC (quoted at member rate)" },
];

const cities = [
  "Clarington", "Oshawa", "Whitby", "Ajax", "Pickering", "Bowmanville",
  "Courtice", "Newcastle", "Brooklin",
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    plan: "home",
    service: "",
    serviceDetail: "",
    address: "",
    city: "",
    province: "ON",
    postalCode: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert("Booking submitted! (Demo mode \u2014 no real booking created)");
    }
  };

  const selectedService = services.find(s => s.id === formData.service);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold" style={{ color: "#2D5F3F" }}>{"\u{1F43B}"} Kodiak</div>
              <span className="text-sm text-slate-500">Total Care</span>
            </Link>
            <Link href="/" className="text-slate-600 hover:text-emerald-700 transition">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {["Service", "Details", "Confirm"].map((label, i) => (
              <div key={label} className="flex items-center" style={{ flex: i < 2 ? 1 : undefined }}>
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: step >= i + 1 ? "#2D5F3F" : "#CBD5E1" }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm mt-2" style={{ color: step >= i + 1 ? "#2D5F3F" : "#94A3B8" }}>{label}</span>
                </div>
                {i < 2 && (
                  <div className="flex-1 h-1 mx-4" style={{ backgroundColor: step >= i + 2 ? "#2D5F3F" : "#E2E8F0" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "#1B2A4A" }}>Choose Your Service</h2>
                <p className="text-slate-500 text-sm mb-6">All services are included in your membership tier at no extra per-visit cost.</p>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Select Plan</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { id: "essential", name: "Essential", price: "$199", note: "" },
                      { id: "home", name: "Home", price: "$449", note: "Most Popular" },
                      { id: "elite", name: "Elite", price: "$799", note: "" },
                     ].map(plan => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, plan: plan.id })}
                        className="p-4 border-2 rounded-lg text-left transition"
                        style={{
                          borderColor: formData.plan === plan.id ? "#2D5F3F" : "#E2E8F0",
                          backgroundColor: formData.plan === plan.id? "#F0F7F2" : "white",
                        }}
                      >
                        <div className="font-bold text-lg">{plan.name}</div>
                        <div className="text-slate-600">{plan.price} CAD/mo</div>
                        {plan.note && <div className="text-xs font-semibold mt-1" style={{ color: "#2D5F3F" }}>{plan.note}</div>}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">What service do you need?</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {services.map(svc => {
                      const disabled = (svc.id === "pest" && formData.plan === "essential");
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => !disabled && setFormData({ ...formData, service: svc.id })}
                          className="p-5 border-2 rounded-lg transition text-left"
                          style={{
                            borderColor: formData.service === svc.id ? "#2D5F3F" : "#E2E8F0",
                            backgroundColor: disabled ? "#F8FAFC" : formData.service === svc.id ? "#F0F7F2" : "white",
                            opacity: disabled ? 0.5 : 1,
                            cursor: disabled ? "not-allowed" : "pointer",
                          }}
                        >
                          <div className="text-3xl mb-2">{svc.icon}</div>
                          <div className="font-bold text-sm">{svc.label}</div>
                          <div className="text-xs text-slate-500 mt-1">{svc.desc}</div>
                          {disabled && <div className="text-xs mt-1" style={{ color: "#C97B22" }}>Home &amp; Elite only</div>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formData.service}
                  className="w-full text-white py-4 rounded-lg font-semibold transition disabled:bg-slate-300 disabled:cursor-not-allowed"
                  style={{ backgroundColor: formData.service ? "#2D5F3F" : undefined }}
                >
                  Continue to Details
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "#1B2A4A" }}>Service Details</h2>
                <p className="text-slate-500 text-sm mb-6">Tell us where and when you need {selectedService?.label || "this service"}.</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="wY[Ü\LÜ\\Û]KLÝ[Y[ÈMKLÈØÝ\ÎÜ\Y[Y\[MØÝ\ÎÝ][K[ÛH\]Z\YÜ[Û[YOHÙ[XÝÚ]OÛÜ[ÛØÚ]Y\ËX\
ÈOÜ[ÛÙ^O^ØßH[YO^ØßOØßOÛÜ[Û_BÜÙ[XÝÙ]]X[Û\ÜÓ[YOHØÚÈ^\ÛHÛ\Ù[ZXÛ^\Û]KMÌXLÜÝ[ÛÙOÛX[[]\OH^[YO^ÙÜQ]KÜÝ[ÛÙ_BÛÚ[ÙO^ÊJHOÙ]ÜQ]JÈÜQ]KÜÝ[ÛÙNK\Ù][YHJ_BÛ\ÜÓ[YOHËY[Ü\LÜ\\Û]KLÝ[Y[ÈMKLÈØÝ\ÎÜ\Y[Y\[MØÝ\ÎÝ][K[ÛHXÙZÛ\HPÈ
ÑÍÈ\]Z\YÏÙ]Ù]]Û\ÜÓ[YOHÜYYÜYXÛÛËLØ\M]X[Û\ÜÓ[YOHØÚÈ^\ÛHÛ\Ù[ZXÛ^\Û]KMÌXLY\Y]OÛX[[]\OH]H[YO^ÙÜQ]K]_BÛÚ[ÙO^ÊJHOÙ]ÜQ]JÈÜQ]K]NK\Ù][YHJ_BÛ\ÜÓ[YOHËY[Ü\LÜ\\Û]KLÝ[Y[ÈMKLÈØÝ\ÎÜ\Y[Y\[MØÝ\ÎÝ][K[ÛH\]Z\YÏÛ\ÜÓ[YOH^^È^\Û]KML]LH^Y^H]Z[X[]HÛ[ÜÝÙ\XÙ\ÏÜÙ]]X[Û\ÜÓ[YOHØÚÈ^\ÛHÛ\Ù[ZXÛ^\Û]KMÌXLY\Y[YOÛX[Ù[XÝ[YO^ÙÜQ]K[Y_BÛÚ[ÙO^ÊJHOÙ]ÜQ]JÈÜQ]K[YNK\Ù][YHJ_BÛ\ÜÓ[YOHËY[Ü\LÜ\\Û]KLÝ[Y[ÈMKLÈØÝ\ÎÜ\Y[Y\[MØÝ\ÎÝ][K[ÛH\]Z\YÜ[Û[YOHÙ[XÝ[YOÛÜ[ÛÜ[Û[YOH[KLL[HSH	\ÚÈLSOÛÜ[ÛÜ[Û[YOHL[KLLHLSH	\ÚÈLOÛÜ[ÛÜ[Û[YOHLKLHLH	\ÚÈOÛÜ[ÛÜ[Û[YOHKMHH	\ÚÈ
OÛÜ[ÛÜ[Û[YOHKMHH	\ÚÈ
OÛÜ[ÛÜÙ[XÝÙ]Ù]]X[Û\ÜÓ[YOHØÚÈ^\ÛHÛ\Ù[ZXÛ^\Û]KMÌXLÜXÚX[[ÝXÝ[ÛÈ
Ü[Û[
OÛX[^\XB[YO^ÙÜQ]KÝ\ßBÛÚ[ÙO^ÊJHOÙ]ÜQ]JÈÜQ]KÝ\ÎK\Ù][YHJ_BÛ\ÜÓ[YOHËY[Ü\LÜ\\Û]KLÝ[Y[ÈMKLÈØÝ\ÎÜ\Y[Y\[MØÝ\ÎÝ][K[ÛHÝÜÏ^ÌßBXÙZÛ\HØ]HÛÙK][ËÜXÚYXÈ\X\ÈÈØÝ\ÈÛÏÙ]Ù]]Û\ÜÓ[YOH^Ø\M]N]Û\OH]ÛÛÛXÚÏ^Ê
HOÙ]Ý\
J_BÛ\ÜÓ[YOH^LHÜ\LÜ\\Û]KLÌ^\Û]KMÌKMÝ[Y[ÈÛ\Ù[ZXÛÝ\Ü\Y[Y\[MÝ\^Y[Y\[M[Ú][ÛXÚÂØ]Û]Û\OHÝXZ]Û\ÜÓ[YOH^LH^]Ú]HKMÝ[Y[ÈÛ\Ù[ZXÛ[Ú][ÛÝ[O^ÞÈXÚÙÜÝ[ÛÛÜÌ
QÑ_BÛÛ[YBØ]ÛÙ]Ù]
_BÜÝ\OOHÈ	
]Û\ÜÓ[YOH^LÞÛXÛXLÝ[O^ÞÈÛÛÜÌPMH_O[Ý\[ÜX][ÛÚÛ\ÜÓ[YOH^\Û]KML^\ÛHXM[[ÜÝÛKÙH\ÝYY[Ý\ÛÛXÝ]Z[ËÜ]Û\ÜÓ[YOHÜXÙK^KM]X[Û\ÜÓ[YOHØÚÈ^\ÛHÛ\Ù[ZXÛ^\Û]KMÌXL[[YOÛX[[]\OH^[YO^ÙÜQ]K[Y_BÛÚ[ÙO^ÊJHOÙ]ÜQ]JÈÜQ]K[YNK\Ù][YHJ_BÛ\ÜÓ[YOHËY[Ü\LÜ\\Û]KLÝ[Y[ÈMKLÈØÝ\ÎÜ\Y[Y\[MØÝ\ÎÝ][K[ÛHXÙZÛ\H[Ý\[[YH\]Z\YÏÙ]]Û\ÜÓ[YOHÜYYÜYXÛÛËLØ\M]X[Û\ÜÓ[YOHØÚÈ^\ÛHÛ\Ù[ZXÛ^\Û]KMÌXL[XZ[ÛX[[]\OH[XZ[[YO^ÙÜQ]K[XZ[BÛÚ[ÙO^ÊJHOÙ]ÜQ]JÈÜQ]K[XZ[K\Ù][YHJ_BÛ\ÜÓ[YOHËY[Ü\LÜ\\Û]KLÝ[Y[ÈMKLÈØÝ\ÎÜ\Y[Y\[MØÝ\ÎÝ][K[ÛHXÙZÛ\H[ÝP^[\KÛÛH\]Z\YÏÙ]]X[Û\ÜÓ[YOHØÚÈ^\ÛHÛ\Ù[ZXÛ^\Û]KMÌXLÛOÛX[[]\OH[[YO^ÙÜQ]KÛ_BÛÚ[ÙO^ÊJHOÙ]ÜQ]JÈÜQ]KÛNK\Ù][YHJ_BÛ\ÜÓ[YOHËY[Ü\LÜ\\Û]KLÝ[Y[ÈMKLÈØÝ\ÎÜ\Y[Y\[MØÝ\ÎÝ][K[ÛHXÙZÛ\HL
JHLËM
MÈ\]Z\YÏÙ]Ù]ËÊÛÚÚ[ÈÝ[[X\H
ßB]Û\ÜÓ[YOHÝ[Y[ÈMÜXÙK^KLÈÝ[O^ÞÈXÚÙÜÝ[ÛÛÜÑÑ_OÈÛ\ÜÓ[YOHÛXÛÝ[O^ÞÈÛÛÜÌPMH_OÛÚÚ[ÈÝ[[X\OÚÏ]Û\ÜÓ[YOH^\ÛHÜXÙK^KL]Û\ÜÓ[YOH^\ÝYKX]ÙY[Ü[Û\ÜÓ[YOH^\Û]KM[ÜÜ[Ü[Û\ÜÓ[YOHÛ\Ù[ZXÛØ\][^HÙÜQ]K[OÜÜ[Ù]]Û\ÜÓ[YOH^\ÝYKX]ÙY[Ü[Û\ÜÓ[YOH^\Û]KMÙ\XÙOÜÜ[Ü[Û\ÜÓ[YOHÛ\Ù[ZXÛÜÙ[XÝYÙ\XÙOËX[OÜÜ[Ù]]Û\ÜÓ[YOH^\ÝYKX]ÙY[Ü[Û\ÜÓ[YOH^\Û]KMØØ][ÛÜÜ[Ü[Û\ÜÓ[YOHÛ\Ù[ZXÛÙÜQ]KÚ]_KÓÙÜQ]KÜÝ[ÛÙ_OÜÜ[Ù]]Û\ÜÓ[YOH^\ÝYKX]ÙY[Ü[Û\ÜÓ[YOH^\Û]KM]OÜÜ[Ü[Û\ÜÓ[YOHÛ\Ù[ZXÛÙÜQ]K]_OÜÜ[Ù]]Û\ÜÓ[YOH^\ÝYKX]ÙY[Ü[Û\ÜÓ[YOH^\Û]KM[YOÜÜ[Ü[Û\ÜÓ[YOHÛ\Ù[ZXÛÙÜQ]K[Y_OÜÜ[Ù]]Û\ÜÓ[YOHÜ\]L]LÝ[O^ÞÈÜ\ÛÛÜÑQMÑH_O]Û\ÜÓ[YOH^\ÝYKX]ÙY[ÛXÛÝ[O^ÞÈÛÛÜÌ
QÑ_OÜ[\U\Ú]ÛÜÝÜÜ[Ü[
[ÛYY[Y[X\Ú\
OÜÜ[Ù]Ù]Ù]Ù]]Û\ÜÓ[YOH^][\Ë\Ý\Ø\L^^È^\Û]KMLÜ[Û\ÜÓ[YOH]LHÈ^ÌQL_W^ÑLHOÜÜ[Ü[]\HÙ\XÙH\ÈXÚÙYHÝ\	
LÙ\XÙHÝX\[YKÔÒP\YYY	H[Ý\YÛÛXÝÜËÜÜ[Ù]Ù]]Û\ÜÓ[YOH^Ø\M]N]Û\OH]ÛÛÛXÚÏ^Ê
HOÙ]Ý\
_BÛ\ÜÓ[YOH^LHÜ\LÜ\\Û]KLÌ^\Û]KMÌKMÝ[Y[ÈÛ\Ù[ZXÛÝ\Ü\Y[Y\[MÝ\^Y[Y\[M[Ú][ÛXÚÂØ]Û]Û\OHÝXZ]Û\ÜÓ[YOH^LH^]Ú]HKMÝ[Y[ÈÛ\Ù[ZXÛ[Ú][ÛÝ[O^ÞÈXÚÙÜÝ[ÛÛÜÌ
QÑ_BÛÛ\HÛÚÚ[ÂØ]ÛÙ]Ù]
_BÙÜOÙ]Ù]Ù]
NÂB
