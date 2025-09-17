"use client";
import { FormEvent, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase"; 
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const currentUser = userCredential.user;
      await currentUser.reload();

      if (currentUser && currentUser.emailVerified) {
        router.push("/dashboard");
        console.log("Success", currentUser);
      } else {
        console.log(currentUser, "Not verified");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-inter px-4">
      <div className="w-full max-w-md space-y-6">
        <h2 className="font-bold text-2xl text-center">Admin Login</h2>

        {currentUser && (
          <div className="mb-4 p-2 bg-green-100 rounded text-center">
            You are already logged in as {currentUser.email}.
            <Button
              className="ml-2"
              onClick={async () => {
                await signOut(auth);
                setCurrentUser(null);
              }}
            >
              Logout
            </Button>
          </div>
        )}

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
        </form>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </div>
    </div>
  );
}
