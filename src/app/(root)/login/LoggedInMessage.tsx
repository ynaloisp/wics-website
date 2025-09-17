import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";

interface LoggedInMessageProps {
  currentUser: any;
  auth: any;
  setCurrentUser: (user: any) => void;
}

const LoggedInMessage: React.FC<LoggedInMessageProps> = ({ currentUser, auth, setCurrentUser }) => (
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
);

export default LoggedInMessage;
