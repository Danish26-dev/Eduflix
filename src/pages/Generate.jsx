import Sidebar from '../components/Sidebar.jsx';
import TopBar from '../components/TopBar.jsx';
import GenerateCard from '../components/GenerateCard.jsx';

const Generate = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6 p-6">
        <TopBar />
        <main className="flex-1 flex items-start justify-center relative">
          <div className="absolute -top-20 -right-10 w-80 h-80 bg-[#4F46E5]/20 blur-[200px]" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#FACC15]/10 blur-[220px]" />
          <div className="relative w-full max-w-4xl">
            <GenerateCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Generate;

