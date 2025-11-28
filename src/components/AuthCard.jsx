import { useNavigate } from 'react-router-dom';
import Input from './Input.jsx';
import Button from './Button.jsx';

const AuthCard = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to home page after login
    navigate('/home');
  };

  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)] space-y-6">
      <div className="space-y-1 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">
          Welcome back
        </p>
        <h2 className="text-2xl font-semibold text-white">Sign in to continue</h2>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input label="Email" type="email" placeholder="you@eduflix.com" />
        <Input label="Password" type="password" placeholder="••••••••" />

        <div className="flex items-center justify-between text-sm text-white/60">
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-white/30 bg-transparent text-[#6366F1] focus:ring-[#4F46E5]"
            />
            Remember me
          </label>
          <button type="button" className="text-white hover:text-[#FACC15] transition">
            Forgot password?
          </button>
        </div>

        <Button type="submit">Login</Button>
      </form>

      <p className="text-center text-sm text-white/70">
        New here?{' '}
        <span className="text-[#FACC15] font-medium cursor-pointer hover:underline">
          Create a free account
        </span>
      </p>
    </div>
  );
};

export default AuthCard;

