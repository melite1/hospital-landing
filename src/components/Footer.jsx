function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <p className="font-semibold text-white mb-2">Meddical Care Hospital</p>
          <p className="text-xs text-slate-400">
            24-hour hospital, diagnostics and maternity care serving Enugu and
            surrounding communities.
          </p>
        </div>
        <div className="text-xs space-y-1">
          <p className="font-semibold text-slate-100">Contact</p>
          <p>+234 (0) 800 123 4567</p>
          <p>info@meddicalcare.ng</p>
          <p>New Haven, Enugu, Nigeria</p>
        </div>
        <div className="text-xs space-y-1">
          <p className="font-semibold text-slate-100">Opening hours</p>
          <p>Outpatient: Mon–Sat, 8am–6pm</p>
          <p>Emergency: 24 hours daily</p>
        </div>
      </div>
      <div className="border-t border-slate-800 text-[11px] text-slate-500 text-center py-3">
        © {new Date().getFullYear()} Meddical Care Hospital. Portfolio demo built with React.
      </div>
    </footer>
  );
}

export default Footer;
