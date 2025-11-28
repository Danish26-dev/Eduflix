const Dropdown = ({ label, options = [], ...props }) => (
  <label className="flex flex-col gap-2 text-sm text-white/80">
    <span>{label}</span>
    <select
      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#4F46E5]/60 transition"
      {...props}
    >
      {options.map(option => (
        <option key={option} value={option} className="bg-[#0B0B0F] text-white">
          {option}
        </option>
      ))}
    </select>
  </label>
);

export default Dropdown;

