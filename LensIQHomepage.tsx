import React from "react";

export default function LensIQHomepage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1a1a1a] font-sans">

      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-[#e0ddd8] sticky top-0 bg-[#f8f7f4]/95 backdrop-blur z-10">
        <div className="font-black text-lg tracking-tight">
          Lens<span className="text-blue-600">IQ</span>
        </div>
        <ul className="flex gap-8 text-sm text-gray-500 list-none">
          <li><a href="#" className="hover:text-gray-900 transition-colors">Product</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Docs</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
        </ul>
        <button className="bg-[#1a1a1a] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#333] transition-colors">
          Get started
        </button>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto text-center px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
          Now in public beta
        </div>
        <h1 className="text-5xl font-black tracking-tight leading-[1.05] mb-4 text-[#0f0f0f]">
          Analytics that actually{" "}
          <em className="text-blue-600 not-italic">drive decisions</em>
        </h1>
        <p className="text-base text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
          LensIQ connects your data sources, surfaces what matters, and tells your
          team exactly where to focus — without the noise.
        </p>
        <div className="flex items-center justify-center gap-3 mb-4">
          <button className="bg-[#1a1a1a] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#333] transition-colors">
            Start free trial
          </button>
          <button className="border border-gray-300 text-[#1a1a1a] text-sm px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            See a demo →
          </button>
        </div>
        <p className="text-xs text-gray-400">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="mx-8 mb-16 bg-white border border-[#e0ddd8] rounded-xl overflow-hidden">
        {/* Topbar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#f0ede8] bg-[#fafaf8]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e0ddd8]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e0ddd8]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e0ddd8]" />
          </div>
          <span className="text-xs text-gray-400 font-medium">LensIQ — Overview</span>
          <span className="text-xs text-gray-300">May 2026</span>
        </div>

        {/* Dashboard body */}
        <div className="grid grid-cols-[180px_1fr]">
          {/* Sidebar */}
          <div className="border-r border-[#f0ede8] p-4 space-y-1">
            {[
              { label: "Overview", active: true },
              { label: "Segments", active: false },
              { label: "Funnels", active: false },
              { label: "Alerts", active: false },
              { label: "Settings", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs cursor-pointer ${
                  item.active
                    ? "bg-[#f0ede8] text-[#1a1a1a] font-medium"
                    : "text-gray-400 hover:bg-gray-50"
                }`}
              >
                <span className="w-3.5 h-3.5 rounded bg-gray-200 inline-block" />
                {item.label}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="p-5">
            {/* Metrics */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { label: "MRR", value: "$84.2k", delta: "↑ 12.4%", up: true },
                { label: "Active users", value: "3,841", delta: "↑ 8.1%", up: true },
                { label: "Churn rate", value: "1.8%", delta: "↑ 0.2%", up: false },
                { label: "NPS score", value: "64", delta: "↑ 3 pts", up: true },
              ].map((m) => (
                <div key={m.label} className="bg-[#f8f7f4] rounded-lg p-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{m.label}</p>
                  <p className="text-xl font-bold text-[#1a1a1a]">{m.value}</p>
                  <p className={`text-[10px] mt-0.5 ${m.up ? "text-emerald-600" : "text-red-500"}`}>{m.delta}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-[#f8f7f4] rounded-lg p-3 mb-3">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">Revenue — last 12 weeks</p>
              <div className="flex items-end gap-1 h-14">
                {[40, 55, 48, 62, 58, 70, 65, 80, 88, 84, 92, 100].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm ${
                      i >= 7 ? "bg-blue-600" : i >= 3 ? "bg-blue-300" : "bg-gray-200"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="bg-[#f8f7f4] rounded-lg p-3 space-y-2">
              {[
                { name: "Enterprise plan", badge: "Top segment", value: "$41.2k" },
                { name: "Growth plan", badge: null, value: "$28.7k" },
                { name: "Starter plan", badge: null, value: "$14.3k" },
              ].map((row) => (
                <div key={row.name} className="flex items-center justify-between text-xs py-1 border-b border-[#ece9e3] last:border-0">
                  <span className="text-gray-600 font-medium">{row.name}</span>
                  {row.badge && (
                    <span className="text-[10px] bg-blue-50 text-blue-800 px-2 py-0.5 rounded">{row.badge}</span>
                  )}
                  <span className="font-semibold text-[#1a1a1a]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-8 py-16 bg-white border-t border-b border-[#e0ddd8]">
        <p className="text-xs text-gray-400 tracking-widest uppercase text-center mb-2">Why LensIQ</p>
        <h2 className="text-3xl font-black tracking-tight text-center mb-3 text-[#0f0f0f]">
          Built for teams who move fast
        </h2>
        <p className="text-sm text-gray-400 text-center max-w-md mx-auto mb-10 leading-relaxed">
          Stop spending hours in spreadsheets. LensIQ gives your team the answers before they know the questions.
        </p>
        <div className="grid grid-cols-3 gap-px bg-[#e0ddd8]">
          {[
            {
              title: "Real-time data",
              desc: "Every metric updates the moment something changes. No stale dashboards, no manual refreshes.",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              title: "AI-powered insights",
              desc: "Surface anomalies and trends automatically. Know what changed and why — without digging.",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a7 7 0 017 7c0 3-1.5 5-4 6.5V17a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1.5C6.5 14 5 12 5 9a7 7 0 017-7z" strokeLinecap="round"/>
                  <path d="M9 21h6" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              title: "One-click integrations",
              desc: "Connect Stripe, HubSpot, Postgres, and 40+ sources in minutes. No engineering required.",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 3a3 3 0 013 3v1a3 3 0 01-3 3h-1v4h1a3 3 0 013 3v1a3 3 0 01-3 3h-1a3 3 0 01-3-3v-1H9v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-1a3 3 0 013-3h1v-4H5a3 3 0 01-3-3V6a3 3 0 013-3h1a3 3 0 013 3v1h6V6a3 3 0 013-3h1z" strokeLinecap="round"/>
                </svg>
              ),
            },
          ].map((f) => (
            <div key={f.title} className="bg-white p-6 hover:bg-[#fafaf8] transition-colors">
              <div className="w-9 h-9 bg-[#f0ede8] rounded-lg flex items-center justify-center mb-4 text-[#1a1a1a]">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold mb-2 text-[#1a1a1a]">{f.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-8 py-12 text-center">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-6">Trusted by analytics-driven teams</p>
        <div className="flex gap-8 justify-center flex-wrap mb-10">
          {["Acme Corp", "Northline", "Vanta", "Draftbit", "Orbit"].map((name) => (
            <span key={name} className="text-sm font-bold text-gray-200 tracking-wide uppercase">{name}</span>
          ))}
        </div>
        <div className="bg-white border border-[#e0ddd8] rounded-xl p-6 max-w-lg mx-auto text-left">
          <p className="text-sm text-gray-500 leading-relaxed italic mb-4">
            "We replaced three separate tools with LensIQ. Our weekly reporting went from 4 hours to 20 minutes — and the insights are actually better."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-semibold text-blue-800">SC</div>
            <div>
              <p className="text-sm font-medium text-[#1a1a1a]">Sarah Chen</p>
              <p className="text-xs text-gray-400">Head of Growth · Northline</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f0f0f] px-8 py-16 text-center">
        <h2 className="text-4xl font-black tracking-tight text-white mb-3">
          Ready to see{" "}
          <em className="text-blue-500 not-italic">what you've been missing?</em>
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Join 2,000+ teams already making faster decisions with LensIQ.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start free — no card needed
          </button>
          <button className="border border-[#333] text-gray-500 text-sm px-6 py-3 rounded-lg hover:border-[#555] transition-colors">
            Talk to sales
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f0f0f] border-t border-[#1e1e1e] px-8 py-5 flex justify-between items-center">
        <span className="text-sm font-bold text-gray-600">
          Lens<span className="text-blue-600">IQ</span>
        </span>
        <span className="text-xs text-gray-600">© 2026 LensIQ Inc. All rights reserved.</span>
      </footer>

    </div>
  );
}
