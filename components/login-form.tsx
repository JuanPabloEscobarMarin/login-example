"use client";

import { useState } from "react";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
  onGoogleSignIn?: () => void;
}

export function LoginForm({ onSubmit, onGoogleSignIn }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-zinc-700 dark:border-zinc-700 border-zinc-300 
            bg-zinc-800/50 dark:bg-zinc-800/50 bg-white/80 
            px-4 py-3 text-sm 
            text-white dark:text-white text-zinc-900
            placeholder:text-zinc-500 dark:placeholder:text-zinc-500 placeholder:text-zinc-400
            focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500
            transition-colors"
          required
        />
      </div>

      {/* Password Input */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-zinc-700 dark:border-zinc-700 border-zinc-300 
            bg-zinc-800/50 dark:bg-zinc-800/50 bg-white/80 
            px-4 py-3 pr-12 text-sm 
            text-white dark:text-white text-zinc-900
            placeholder:text-zinc-500 dark:placeholder:text-zinc-500 placeholder:text-zinc-400
            focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500
            transition-colors"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        className="w-full rounded-lg 
          bg-zinc-700 dark:bg-zinc-700 bg-zinc-200
          py-3 text-sm font-medium 
          text-zinc-300 dark:text-zinc-300 text-zinc-600
          hover:bg-zinc-600 dark:hover:bg-zinc-600 hover:bg-zinc-300
          transition-colors"
      >
        Sign in
      </button>

      {/* Google Sign In */}
      <button
        type="button"
        onClick={onGoogleSignIn}
        className="flex w-full items-center justify-center gap-3 rounded-lg 
          bg-white dark:bg-white bg-zinc-100
          py-3 text-sm font-medium 
          text-zinc-900 
          hover:bg-zinc-100 dark:hover:bg-zinc-100 hover:bg-zinc-200
          transition-colors"
      >
        <GoogleIcon className="h-5 w-5" />
        Sign in with Google
      </button>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-zinc-400 dark:text-zinc-400 text-zinc-600">
        {"Don't have an account? "}
        <a
          href="#"
          className="font-medium text-white dark:text-white text-zinc-900 hover:underline"
        >
          Sign up, it&apos;s free!
        </a>
      </p>
    </form>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.964-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
