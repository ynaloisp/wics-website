"use client";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase"; 
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const resetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
  };

  return (
    <div className="font-inter ml-[10%] mr-[10%] mt-[5%] mb-[10%]">
      <h2 className="font-bold text-2xl">Forget Password</h2>
      <form onSubmit={resetEmail} className="flex flex-col space-y-5 w-fit">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded-sm"
        />
        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
