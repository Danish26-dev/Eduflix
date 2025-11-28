import Sidebar from '../components/Sidebar.jsx';
import TopBar from '../components/TopBar.jsx';

const featuredConcept = {
  title: 'How to Code Without GPT',
  description: 'Master the fundamentals of programming, problem-solving, and logic without relying on AI tools. Build a strong foundation and become a true coder!',
  image: '/assets/codewithoutgpt.jpg', // Use the new thumbnail image
};

const topicRows = [
  {
    title: 'Photosynthesis',
    image: '/assets/phothosynthesis.jpg',
    description: 'Discover how plants convert sunlight into energy.'
  },
  {
    title: 'Hibernation',
    image: '/assets/hibernation.jpg',
    description: 'Learn why and how animals hibernate during winter.'
  },
  {
    title: 'Solar System',
    image: '/assets/solar system.jpg',
    description: 'Explore the planets and wonders of our solar system.'
  },
  {
    title: 'Traffic Rules',
    image: '/assets/trafficrules.jpg',
    description: 'Understand the rules that keep our roads safe.'
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6 p-0 md:p-6">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          {/* Netflix-style Banner */}
          <section className="relative w-full h-[340px] md:h-[420px] flex items-end rounded-3xl overflow-hidden shadow-2xl mb-10 bg-gradient-to-br from-[#4F46E5]/80 to-[#6366F1]/80">
            <img src={featuredConcept.image} alt={featuredConcept.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="relative z-10 p-8 md:p-12 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                {featuredConcept.title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-6 drop-shadow">
                {featuredConcept.description}
              </p>
              <button className="px-6 py-3 rounded-xl bg-[#FACC15] text-[#4F46E5] font-bold text-lg shadow-lg hover:bg-[#ffe066] transition">
                Start Learning
              </button>
            </div>
          </section>

          {/* Netflix-style Rows */}
          <section className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 ml-2 md:ml-4">Explore Concepts</h2>
              <div className="flex gap-6 overflow-x-auto pb-2 px-2 md:px-4">
                {topicRows.map((topic) => (
                  <div key={topic.title} className="min-w-[220px] max-w-[240px] bg-white/10 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer border border-white/10 flex flex-col">
                    <div className="h-36 w-full rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#6366F1]/30 to-[#FACC15]/20">
                      <img src={topic.image} alt={topic.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                      <p className="text-white/70 text-sm mb-2 flex-1">{topic.description}</p>
                      <button className="mt-auto px-4 py-2 rounded-lg bg-[#4F46E5] text-white font-semibold hover:bg-[#6366F1] transition">View Lesson</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;

