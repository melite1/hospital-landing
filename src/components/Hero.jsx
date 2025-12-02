function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-medium text-emerald-700 shadow-sm mb-4">
            24/7 Care • ISO Certified • Enugu
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Quality healthcare{" "}
            <span className="text-emerald-600">for you and your family.</span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base mb-6 max-w-xl">
            Meddical Care combines experienced specialists, modern equipment, and
            compassionate nursing to provide safe, affordable healthcare for
            communities in and around Enugu.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#book"
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-5 py-2.5 rounded-full text-sm font-medium border border-slate-200 text-slate-700 hover:border-emerald-400"
            >
              View Services
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-800">15+ Specialists</p>
              <p>Consultants in key specialties</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">24/7 Emergency</p>
              <p>Ambulance & trauma response</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-white shadow-lg overflow-hidden border border-slate-100">
            <div className="h-full w-full bg-gradient-to-br from-emerald-100 via-white to-sky-100 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-sm font-semibold text-emerald-700 mb-1">
                  Trusted hospital
                </p>
                <p className="text-lg font-bold text-slate-900 mb-3">
                  Modern diagnostics & expert care
                </p>
                <p className="text-xs text-slate-500">
                  {/* Replace this with a real doctor/hospital image later. */}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-2 bg-white rounded-2xl shadow-md px-4 py-3 text-xs text-slate-600 flex items-center gap-3 border border-slate-100">
            <span className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-lg">
              💓
            </span>
            <div>
              <p className="font-semibold text-slate-800">Emergency? Call now</p>
              <p>+234 (0) 800 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
