function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-bold">
            M
          </span>
          <div>
            <p className="font-semibold text-slate-900">Meddical Care</p>
            <p className="text-xs text-slate-500">Hospital & Diagnostics</p>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <li><a href="#services" className="hover:text-emerald-600">Services</a></li>
          <li><a href="#doctors" className="hover:text-emerald-600">Doctors</a></li>
          <li><a href="#about" className="hover:text-emerald-600">About</a></li>
          <li><a href="#contact" className="hover:text-emerald-600">Contact</a></li>
        </ul>

        <a
          href="#book"
          className="hidden md:inline-flex px-4 py-2 rounded-full text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600"
        >
          Book Appointment
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
