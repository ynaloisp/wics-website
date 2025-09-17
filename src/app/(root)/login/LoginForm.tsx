import React from "react";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
  router: any;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  error,
  router,
}) => (
  <form onSubmit={handleLogin} className="flex flex-col space-y-5">
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <Button type="submit" className="w-full">
      Login
    </Button>
    <p
      className="text-xs underline text-center cursor-pointer"
      onClick={() => {
        router.push("/forgetPassword");
      }}
    >
      Forget Password?
    </p>
    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
  </form>
);

export default LoginForm;
