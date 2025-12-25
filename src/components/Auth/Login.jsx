import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-12 rounded-2xl shadow-xl w-[420px]">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-gray-300 text-center mb-8">Login to continue</p>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email address"
            className="w-full bg-transparent border border-emerald-500 text-white placeholder-gray-400 px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border border-emerald-500 text-white placeholder-gray-400 px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <button
            type="submit"
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold py-3 rounded-full"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
