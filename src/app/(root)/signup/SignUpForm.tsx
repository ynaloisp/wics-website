import React from "react";
import { Button } from "@/components/ui/button";

interface SignUpFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSignUp,
  error,
}) => (
  <form onSubmit={handleSignUp} className="flex flex-col space-y-5 w-fit">
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="p-2 rounded-sm"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="p-2 rounded-sm"
    />
    <Button type="submit" className="w-fit">
      Sign Up
    </Button>
    {error && <p style={{ color: "red" }}>{error}</p>}
  </form>
);

export default SignUpForm;
