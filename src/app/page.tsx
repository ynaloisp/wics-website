"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { db, auth, signInWithCustomToken } from "../firebase";
import Image from "next/image";
import { doc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  // const { getToken, userId } = useAuth();
  const { user } = useUser();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // console.log("User ID:", userId);
  // console.log("User:", user);
  // console.log("User email:", user?.primaryEmailAddress?.emailAddress);
  // console.log("User name:", `${user?.firstName} ${user?.lastName}`);

  useEffect(() => {
    if (user) {
      const userData = {
        email: user.emailAddresses[0]?.emailAddress || "",
        fullname: `${user.firstName} ${user.lastName}` || "",
        emplid: "",
      };

      // Sanitize data
      if (userData.email && userData.fullname) {
        const userDocRef = doc(db, "users", user.id);

        setDoc(userDocRef, userData)
          .then(() => {
            console.log("User data stored successfully");
          })
          .catch((error) => {
            console.error("Error storing user data:", error);
          });
      }
      if (userData.emplid === "") {
        console.log("enter emplid");
        setIsDialogOpen(true);
      } else {
        console.error("Invalid user data:", userData);
      }
    }
  }, [user]);

  // const storeUserData = async (firebaseUser: FirebaseUser) => {
  //   try {
  //     await setDoc(doc(db, "users", firebaseUser.uid), {
  //       uid: firebaseUser.uid,
  //       email: user?.primaryEmailAddress?.emailAddress,
  //       fullname: `${user?.firstName} ${user?.lastName}`,
  //     });
  //     console.log("User data stored successfully");
  //   } catch (error) {
  //     console.error("Error storing user data:", error);
  //   }
  // };

  // const signIntoFirebaseWithClerk = async () => {
  //   const token = await getToken({ template: "integration_firebase" });

  //   const userCredentials = await signInWithCustomToken(auth, token || "");
  //   console.log("User:", userCredentials.user);

  //   // Store user data in Firestore
  //   storeUserData(userCredentials.user);
  // };

  // // Call the sign-in function when the component mounts
  // React.useEffect(() => {
  //   signIntoFirebaseWithClerk();
  // }, []);

  return (
    <div className="bg-background min-h-screen">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button style={{ display: "none" }}>Open Dialog</button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Enter Your Emplid</DialogTitle>
          <DialogDescription>
            Please enter your EMPLID to continue.
          </DialogDescription>
          <input type="text" placeholder="Emplid" />
          <DialogClose asChild>
            <button onClick={() => setIsDialogOpen(false)}>Close</button>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <div className="flex justify-center py-14">
        <Image
          src="/images/WiCS-Logo-2.png"
          alt="WiCS Logo"
          width={500}
          height={200}
          className="rounded-3xl shadow-img"
        />
      </div>
      <div className="flex justify-center py-8">
        <h1 className="text-4xl font-bold text-center">
          &lt; / WOMXN IN COMPUTER SCIENCE &gt; <br /> @ HUNTER COLLEGE
        </h1>
      </div>

      <div className="container mx-auto w-4/5 p-12 pb-20 flex justify-around items-center">
        <Image
          src="/images/photo/IMG_2282.png"
          alt="group pic"
          width={400}
          height={400}
          className="rounded-3xl"
        />
        <h1 className="w-96 text-center">
          All are welcome to join our club, come to events, and participate on
          our board regardless of your major, gender, or declared major. <br />
          <br />
          You must be an ally and supporter of womxn in tech! <br />
          <br /> We are so excited for you to join us in empowering and
          promoting womxn in tech :)
        </h1>
      </div>
    </div>
  );
}
