import Sidebar from '../components/Sidebar.jsx';
import TopBar from '../components/TopBar.jsx';

const Profile = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: 'January 2024',
    lessonsCompleted: 12,
    lessonsInProgress: 5,
    totalLearningHours: 42.5,
  };

  const settings = [
    { label: 'Account Settings', icon: '⚙️', value: 'Manage your account' },
    { label: 'Privacy Settings', icon: '🔒', value: 'Control your data' },
    { label: 'Notifications', icon: '🔔', value: 'Email & Push alerts' },
    { label: 'Learning Preferences', icon: '📚', value: 'Customize your experience' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6 p-6">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          <div className="absolute -top-20 -right-10 w-80 h-80 bg-[#4F46E5]/20 blur-[200px] pointer-events-none" />

          {/* Profile Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-2">My Profile</h1>
            <p className="text-white/60">Manage your account and learning preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* User Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#6366F1] flex items-center justify-center text-4xl font-bold mx-auto mb-4 shadow-lg">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h2 className="text-2xl font-bold">{userProfile.name}</h2>
                  <p className="text-white/60 text-sm mt-1">{userProfile.email}</p>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Member Since</span>
                    <span className="font-semibold">{userProfile.joinDate}</span>
                  </div>
                  <button className="w-full mt-6 px-4 py-3 rounded-lg bg-[#4F46E5] text-white font-semibold hover:bg-[#6366F1] transition">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Stats & Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-[#6366F1]">{userProfile.lessonsCompleted}</p>
                  <p className="text-white/60 text-sm mt-2">Completed</p>
                </div>
                <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-[#FACC15]">{userProfile.lessonsInProgress}</p>
                  <p className="text-white/60 text-sm mt-2">In Progress</p>
                </div>
                <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-[#10B981]">{userProfile.totalLearningHours}h</p>
                  <p className="text-white/60 text-sm mt-2">Learning Hours</p>
                </div>
              </div>

              {/* Settings List */}
              <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-6 space-y-3">
                <h3 className="font-bold text-lg mb-6">Settings</h3>
                {settings.map((setting, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 rounded-lg transition"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-2xl">{setting.icon}</span>
                      <div>
                        <p className="font-semibold text-white">{setting.label}</p>
                        <p className="text-white/60 text-sm">{setting.value}</p>
                      </div>
                    </div>
                    <span className="text-white/40">→</span>
                  </button>
                ))}
              </div>

              {/* Logout Button */}
              <button className="w-full px-6 py-3 rounded-lg bg-red-600/20 border border-red-600/30 text-red-400 font-semibold hover:bg-red-600/30 hover:border-red-600/50 transition">
                Sign Out
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;

