function CTA() {
  return (
    <section
      id="book"
      className="py-12 bg-gradient-to-r from-emerald-600 to-emerald-500"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Need to see a doctor?
          </h2>
          <p className="text-sm md:text-base text-emerald-50 max-w-lg">
            Send us your details and our front-desk team will call you back to
            confirm your appointment within one business hour.
          </p>
        </div>

        <form className="w-full md:w-80 bg-white rounded-2xl shadow-md p-4 space-y-3">
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
          <select
            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option>Service needed</option>
            <option>General consultation</option>
            <option>Maternity</option>
            <option>Emergency follow-up</option>
          </select>
          <button
            type="button"
            className="w-full px-3 py-2 rounded-lg text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600"
          >
            Request Appointment
          </button>
          <p className="text-[11px] text-slate-500">
            Demo form for portfolio. In production, this would connect to a backend.
          </p>
        </form>
      </div>
    </section>
  );
}

export default CTA;
