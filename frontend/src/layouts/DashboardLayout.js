import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {

  return (
    <div className="flex min-h-screen bg-slate-100 overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-72 p-6 md:p-8 overflow-y-auto bg-gradient-to-br from-slate-100 via-emerald-50 to-slate-100">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;