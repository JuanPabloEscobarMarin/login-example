import { LoginForm } from "@/components/login-form";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300">
      <ThemeToggle />
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 dark:bg-purple-600/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/20 dark:bg-blue-600/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 dark:bg-indigo-600/5 blur-3xl" />
        
        {/* Stars/dots effect - only visible in dark mode */}
        <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-300">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Container - Desktop Card Effect */}
      <div className="relative flex min-h-screen items-center justify-center p-4 md:p-8">
        {/* Outer Frame - visible on larger screens */}
        <div className="hidden lg:block absolute inset-8 rounded-3xl border border-zinc-300 dark:border-zinc-800 bg-zinc-200/50 dark:bg-zinc-900/50 backdrop-blur-sm" />

        {/* Content Container */}
        <div className="relative z-10 flex w-full max-w-md flex-col items-center">
          {/* Decorative Lines */}
          <div className="absolute left-0 right-0 top-1/2 -z-10 hidden md:flex items-center justify-between px-4">
            <div className="h-px w-24 lg:w-40 bg-gradient-to-r from-transparent via-zinc-400 dark:via-zinc-600 to-zinc-400 dark:to-zinc-600" />
            <div className="h-px w-24 lg:w-40 bg-gradient-to-l from-transparent via-zinc-400 dark:via-zinc-600 to-zinc-400 dark:to-zinc-600" />
          </div>

          {/* Login Card */}
          <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-8 shadow-2xl">
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800 shadow-inner">
                <DiamondIcon className="h-6 w-6 text-zinc-600 dark:text-zinc-300" />
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-center text-2xl font-semibold text-zinc-900 dark:text-white">
              Bento Social
            </h1>

            {/* Login Form */}
            <LoginForm />
          </div>

          {/* Footer Stats */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
              Join over <span className="font-semibold text-zinc-700 dark:text-white">2M</span> global social media users
            </p>

            {/* Avatar Stack */}
            <div className="flex justify-center -space-x-3">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-100 dark:border-zinc-900 transition-transform hover:scale-110 hover:z-10"
                >
                  <img
                    src={avatar}
                    alt={`User ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
];

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5z" />
    </svg>
  );
}
