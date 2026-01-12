import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/layout/sidebar";
import { Header } from "./components/layout/header";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans antialiased transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        <Header onToggleSidebar={() => setSidebarOpen(true)} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
