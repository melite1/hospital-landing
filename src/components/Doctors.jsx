function Doctors() {
  const doctors = [
    { name: "Dr. Adaeze Okafor", role: "Consultant Physician" },
    { name: "Dr. Tunde Balogun", role: "General Surgeon" },
    { name: "Dr. Chioma Eze", role: "Obstetrician & Gynecologist" },
  ];

  return (
    <section id="doctors" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
            Our Team
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
            Meet our specialists
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-xl mt-2">
            Our doctors combine international training with deep understanding
            of local health realities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-slate-50 rounded-2xl border border-slate-100 p-5 flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-2xl text-emerald-600 mb-3">
                👨‍⚕️
              </div>
              <p className="font-semibold text-slate-900 text-sm md:text-base">
                {doc.name}
              </p>
              <p className="text-xs text-slate-500 mb-3">{doc.role}</p>
              <p className="text-xs text-slate-500">
                Available for consultation by appointment.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
