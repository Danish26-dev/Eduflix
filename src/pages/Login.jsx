import AuthCard from '../components/AuthCard.jsx';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#050509] text-white flex items-center justify-center relative overflow-hidden px-4 py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-[#4F46E5]/40 blur-[180px] -left-16 top-8" />
        <div className="absolute w-[420px] h-[420px] bg-[#6366F1]/20 blur-[240px] -right-10 bottom-10" />
        <div className="absolute w-64 h-64 bg-[#FACC15]/15 blur-[220px] right-1/3 top-1/3" />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center space-y-10 text-center">
        <div className="flex items-center justify-center gap-8">
          {/* Logo */}
          <div className="w-28 h-28 flex-shrink-0 rounded-full bg-gradient-to-br from-[#4F46E5]/60 to-[#6366F1]/60 p-1 shadow-2xl shadow-[#4F46E5]/50 border-2 border-white/20 hover:border-white/40 transition-all">
            <img src="/assets/logo edu.png" alt="EduFlix" className="w-full h-full rounded-full object-cover drop-shadow-[0_0_20px_rgba(79,70,229,0.6)]" />
          </div>
          
          {/* Taglines */}
          <div className="space-y-3 text-left">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#FACC15]">
              EduFlix
            </h1>
            <p className="text-base md:text-lg text-white/70 font-light tracking-wide">
              The Netflix for Education
            </p>
            <p className="text-sm text-white/60">
              Learn Visually. Learn Smarter.
            </p>
          </div>
        </div>

        <AuthCard />
      </div>
    </div>
  );
};

export default Login;

