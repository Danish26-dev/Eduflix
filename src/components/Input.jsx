const Input = ({ label, ...props }) => (
  <label className="block space-y-2 text-sm font-medium text-white/80">
    <span>{label}</span>
    <div className="relative group">
      <input
        className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#4F46E5]/60 focus:bg-white/10 transition-all duration-200"
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-colors duration-200" />
    </div>
  </label>
);

export default Input;

