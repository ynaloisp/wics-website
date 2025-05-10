"use client";
import { Button } from "@/components/ui/button";
import { auth } from "../../../firebase"; 
import ProtectedRoute from "../../../components/ProtectedRoutes";

export default function Login() {
  console.log(auth.currentUser);

  return (
    <ProtectedRoute>
      <div>
        <Button>Add email to whitelist</Button>
        <Button onClick={() => auth.signOut()}>Sign out</Button>
      </div>
    </ProtectedRoute>
  );
}
