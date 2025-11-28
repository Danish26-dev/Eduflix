const TopBar = () => {
  return (
    <header className="w-full flex items-center justify-between gap-6 px-8 py-5 bg-gradient-to-r from-white/5 via-white/3 to-white/5 backdrop-blur-3xl border border-white/15 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      {/* Left spacer for balance */}
      <div className="w-12" />
      
      {/* Centered Search Bar */}
      <div className="flex-1 max-w-2xl mx-auto">
        <div className="relative group">
          <div className="relative flex items-center">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-[#6366F1] transition-colors z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
            <input
              className="w-full bg-white/5 hover:bg-white/8 border border-white/15 hover:border-white/25 rounded-2xl pl-14 pr-6 py-3.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#6366F1]/70 focus:ring-2 focus:ring-[#6366F1]/40 focus:bg-white/8 transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              placeholder="Search lessons, topics, creators..."
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <kbd className="hidden md:inline-flex items-center px-2 py-1 text-xs font-semibold text-white/50 bg-white/5 border border-white/10 rounded-lg">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Right Avatar */}
      <button className="w-12 h-12 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center text-white font-semibold shadow-lg shadow-[#4F46E5]/40 hover:border-[#FACC15]/70 hover:shadow-lg hover:shadow-[#FACC15]/50 hover:scale-110 transition-all duration-300">
        <span>JD</span>
      </button>
    </header>
  );
};

export default TopBar;

