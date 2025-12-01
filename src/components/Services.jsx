function Services() {
  const services = [
    {
      title: "General Consultation",
      desc: "Daily outpatient clinics with experienced physicians and nurses.",
    },
    {
      title: "Diagnostics & Lab",
      desc: "24/7 laboratory, ultrasound, ECG, X-ray and basic imaging.",
    },
    {
      title: "Maternity & Childcare",
      desc: "Ante-natal, delivery, neonatal and pediatric services.",
    },
    {
      title: "Emergency & Trauma",
      desc: "Rapid-response emergency unit with on-call specialists.",
    },
  ];

  return (
    <section id="services" className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
            Comprehensive, patient-centered care
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mt-2">
            From routine checkups to specialist treatment, our team provides
            safe, respectful care for every patient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col gap-2"
            >
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-lg">
                ✚
              </div>
              <h3 className="font-semibold text-slate-900 text-sm md:text-base">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                {service.desc}
              </p>
              <button className="mt-auto text-xs font-medium text-emerald-600 hover:text-emerald-700">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
