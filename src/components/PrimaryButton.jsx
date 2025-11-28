const PrimaryButton = ({ children, className = '', ...props }) => (
  <button
    className={`w-full bg-gradient-to-r from-[#4F46E5] via-[#5B4FF0] to-[#6366F1] text-white font-semibold py-3.5 rounded-2xl shadow-[0_15px_45px_rgba(79,70,229,0.45)] transition-all duration-200 hover:shadow-[0_25px_70px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FACC15]/60 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] ${className}`}

    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;

