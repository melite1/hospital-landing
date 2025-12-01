function Stats() {
  const stats = [
    { label: "Patients treated", value: "25k+" },
    { label: "Bed capacity", value: "120" },
    { label: "Specialists", value: "15+" },
    { label: "Years of service", value: "10+" },
  ];

  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-xl md:text-2xl font-bold text-slate-900">
              {stat.value}
            </p>
            <p className="text-xs md:text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
