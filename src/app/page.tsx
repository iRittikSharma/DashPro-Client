import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex h-screen ">
      <div className="w-1/5">
        <Dashboard />
      </div>
      <div className="w-4/5">
        <Main />
      </div>
    </div>
  );
}
