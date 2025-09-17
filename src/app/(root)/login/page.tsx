"use client";
import { FormEvent, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase"; 
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import LoggedInMessage from "./LoggedInMessage";

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
          <LoggedInMessage currentUser={currentUser} auth={auth} setCurrentUser={setCurrentUser} />
        )}
        {!currentUser && (
          <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={handleLogin}
            error={error}
            router={router}
          />
        )}
      </div>
    </div>
  );
}
