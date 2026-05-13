import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 w-72 bg-emerald-950 text-emerald-100 flex flex-col p-6 shadow-xl">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/70">BioScan</p>
        <h1 className="text-3xl font-bold text-white">BIOSCAN IA</h1>
      </div>

      <nav className="flex flex-col gap-4 text-base font-medium">
        <Link to="/dashboard" className="rounded-xl px-3 py-2 hover:bg-emerald-800 transition-colors">
          Dashboard
        </Link>
        <Link to="/diagnostico" className="rounded-xl px-3 py-2 hover:bg-emerald-800 transition-colors">
          Diagnóstico
        </Link>
        <Link to="/historial" className="rounded-xl px-3 py-2 hover:bg-emerald-800 transition-colors">
          Historial
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;