import Sidebar from '../components/Sidebar.jsx';
import TopBar from '../components/TopBar.jsx';

const Library = () => {
  const savedLessons = [
    { id: 1, title: 'How to Code Without GPT', category: 'Programming', duration: '45 min', progress: 75 },
    { id: 2, title: 'Photosynthesis Explained', category: 'Biology', duration: '30 min', progress: 100 },
    { id: 3, title: 'Solar System Overview', category: 'Astronomy', duration: '55 min', progress: 50 },
    { id: 4, title: 'Traffic Rules & Safety', category: 'Civics', duration: '20 min', progress: 100 },
    { id: 5, title: 'Hibernation in Animals', category: 'Biology', duration: '35 min', progress: 80 },
    { id: 6, title: 'JavaScript Basics', category: 'Programming', duration: '60 min', progress: 40 },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6 p-6">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          <div className="absolute -top-20 -right-10 w-80 h-80 bg-[#4F46E5]/20 blur-[200px] pointer-events-none" />
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Your Library</h1>
            <p className="text-white/60">Access all your saved and completed lessons</p>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="group bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 hover:bg-white/12 hover:border-white/25 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white mb-1">{lesson.title}</h3>
                      <p className="text-sm text-[#6366F1]">{lesson.category}</p>
                    </div>
                    <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/70">{lesson.duration}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs text-white/60">
                      <span>Progress</span>
                      <span className="font-semibold text-white">{lesson.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#6366F1] to-[#FACC15] transition-all duration-300"
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 rounded-lg bg-[#4F46E5] text-white font-medium hover:bg-[#6366F1] transition">
                    {lesson.progress === 100 ? 'Review' : 'Continue'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {savedLessons.length === 0 && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <p className="text-xl text-white/60 mb-4">No lessons yet</p>
                <p className="text-white/40">Start generating lessons to build your library</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Library;

