"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { auth } from "../../../firebase"; 
import ProtectedRoute from "../../../components/ProtectedRoutes";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase.js";

export default function Login() {
  const [email, setEmail] = useState("");
  console.log(auth.currentUser);

  const AddToWhiteList = async() => {
    await setDoc(doc(db, "whitelist", email), {
      email: email,
    });
  }

  return (
    <ProtectedRoute>
      <div className="font-inter ml-[10%] mr-[10%] mt-[5%] mb-[10%] w-fit flex  flex-col gap-y-10">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <div className="flex flex-col gap-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 rounded-sm"
          />
          <Button onClick={AddToWhiteList} className="w-fit">
            Add Email to Whitelist
          </Button>
        </div>

        <Button onClick={() => auth.signOut()} className="w-fit">
          Sign out
        </Button>
      </div>
    </ProtectedRoute>
  );
}
