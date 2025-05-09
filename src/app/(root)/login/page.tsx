"use client";
import { FormEvent, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase"; 
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e : FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    const { currentUser } = getAuth();
    console.log(currentUser);
    try {
      if (currentUser && currentUser.emailVerified) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Success");
      } else {
        console.log(currentUser, "Not verified");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="font-inter ml-[10%] mr-[10%] mt-[5%] mb-[10%]">
      <h2 className="font-bold text-2xl">Admin Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col space-y-5 w-fit">
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
          Login
        </Button>
        <p
          className="w-fit text-xs underline"
          onClick={() => {
            router.push("/forgetPassword");
          }}
        >
          Forget Password
        </p>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
