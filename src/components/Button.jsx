const Button = ({ children, ...props }) => (
  <button
    className="group w-full bg-gradient-to-r from-[#4F46E5] via-[#5B4FF0] to-[#6366F1] text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-[#4F46E5]/40 transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-[#4F46E5]/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FACC15]/60 focus:ring-offset-[#0B0B0F]"
    {...props}
  >
    <span className="flex items-center justify-center gap-2 tracking-wide">
      {children}
      <svg
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </span>
  </button>
);

export default Button;

