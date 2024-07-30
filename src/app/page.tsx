import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";
import Drawer from "@/components/Drawer";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Drawer />
      <div className="w-1/5">
        <Dashboard />
      </div>
      <div className="w-4/5 overflow-y-scroll">
        <Main />
      </div>
    </div>
  );
}
