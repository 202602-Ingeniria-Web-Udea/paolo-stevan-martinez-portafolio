import LeftSidebar from "../components/organisms/LeftSidebar";
import RightSidebar from "../components/organisms/RightSidebar";
import MainContent from "../components/organisms/MainContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-[280px_minmax(0,1fr)_80px]">
        {/* Sidebar izquierdo */}
        <aside className="hidden border-r border-slate-800 lg:block">
          <div className="sticky top-0 h-screen overflow-y-auto">
            <LeftSidebar />
          </div>
        </aside>

        {/* Contenido principal */}
        <div className="min-w-0">
          <MainContent />
        </div>

        {/* Sidebar derecho */}
        <aside className="hidden border-l border-slate-800 lg:block">
          <div className="sticky top-0 h-screen">
            <RightSidebar />
          </div>
        </aside>
      </div>
    </main>
  );
}

