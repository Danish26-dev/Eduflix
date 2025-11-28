import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />, path: '/home' },
  { label: 'Generate', icon: <path d="M12 5v14m7-7H5m17 0a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />, path: '/generate' },
  { label: 'Library', icon: <path d="M4 6h16M4 12h16M4 18h16M2 4h2v16H2zM20 4h2v16h-2z" />, path: '/library' },
  { label: 'Profile', icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />, path: '/profile' },
  { label: 'Logout', icon: <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" />, path: '/login', isLogout: true }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item) => {
    if (item.isLogout) {
      navigate('/login');
    } else {
      navigate(item.path);
    }
  };

  return (
    <aside className="hidden md:flex flex-col items-center py-8 gap-6 w-20 bg-white/5 backdrop-blur-3xl border-r border-white/10 rounded-r-3xl">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4F46E5]/80 to-[#6366F1]/80 p-1 cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-[#4F46E5]/40 hover:shadow-[#6366F1]/60 border border-white/20 hover:border-white/40 group" onClick={() => navigate('/home')}>
        <img src="/assets/logo edu.png" alt="EduFlix" className="w-full h-full rounded-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col items-center gap-4">
        {navItems.map(item => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`group relative w-14 h-14 rounded-2xl border flex items-center justify-center transition ${
                isActive
                  ? 'border-white/30 bg-white/15'
                  : 'border-transparent hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                className={`w-6 h-6 transition drop-shadow-[0_0_12px_rgba(99,102,241,0.7)] ${
                  isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                }`}
              >
                {item.icon}
              </svg>
              <span className="absolute left-16 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;

