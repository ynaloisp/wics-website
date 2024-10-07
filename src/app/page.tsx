"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { db, auth, signInWithCustomToken } from "../firebase";
import Image from "next/image";
import { doc, setDoc, getDoc } from "firebase/firestore";
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
  const [emplid, setEmplid] = useState("");

  // console.log("User ID:", userId);
  // console.log("User:", user);
  // console.log("User email:", user?.primaryEmailAddress?.emailAddress);
  // console.log("User name:", `${user?.firstName} ${user?.lastName}`);

  useEffect(() => {
    async function checkUserEMPLID() {
      if (user) {
        const userDocRef = doc(db, "users", user.id);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (!userData.emplid) {
            setIsDialogOpen(true);
          }
          if (userData.points === undefined) {
            await setDoc(userDocRef, { points: 0 }, { merge: true });
          }
        } else {
          // If the user document does not exist, create it with initial data
          const userData = {
            email: user.emailAddresses[0]?.emailAddress || "",
            fullname: `${user.firstName} ${user.lastName}` || "",
            emplid: "",
            points: 0,
          };

          // Sanitize data
          if (userData.email && userData.fullname) {
            await setDoc(userDocRef, userData);
            setIsDialogOpen(true);
          } else {
            console.error("Invalid user data:", userData);
          }
        }
      }
    }

    checkUserEMPLID();
  }, [user]);

  function storeEMPLID(EMPLID: string) {
    if (user) {
      setDoc(doc(db, "users", user.id), { emplid: EMPLID }, { merge: true });
      console.log("EMPLID stored successfully");
    } else {
      console.error("User is null or undefined");
    }
  }

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
    <div className="bg-[#fef8f8] min-h-screen pt-16">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button style={{ display: "none" }}>Open Dialog</button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Enter Your EMPLID</DialogTitle>
          <DialogDescription>Please enter your EMPLID</DialogDescription>
          <input
            type="text"
            placeholder="EMPLID"
            value={emplid}
            onChange={(e) => setEmplid(e.target.value)}
          />
          <DialogClose asChild>
            <button
              onClick={() => {
                storeEMPLID(emplid);
                setIsDialogOpen(false);
              }}
            >
              Save
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <div className="flex justify-center py-14">
        <Image
          src="/images/WiCS-Logo.png"
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
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/images/photo/IMG_2282.png"
            alt="group pic"
            width={400}
            height={400}
            className="rounded-3xl"
          />
          <div className="w-auto p-4">
            <h1 className="w-96 text-center pb-4">
              All are welcome to join our club, come to events, and participate
              on our board regardless of your major, gender, or declared major.
            </h1>
            <h1 className="w-96 text-center pb-4">
              You must be an ally and supporter of womxn in tech!
            </h1>
            <h1 className="w-96 text-center pb-4">
              We are so excited for you to join us in empowering and promoting
              womxn in tech :)
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
