"use client";
import { SignedOut, useAuth, useUser } from "@clerk/nextjs";
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
import { MoveUpRight } from "lucide-react";

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
    // const emplidPattern = /^\d{8}$/; // Regular expression to match exactly 8 digits

    // if (!emplidPattern.test(EMPLID)) {
    //   console.error("Invalid EMPLID. It must be exactly 8 digits.");
    //   return;
    // }

    if (user) {
      setDoc(doc(db, "users", user.id), { emplid: EMPLID }, { merge: true })
        .then(() => {
          console.log("EMPLID stored successfully");
          setIsDialogOpen(false);
        })
        .catch((error) => {
          console.error("Error storing EMPLID:", error);
        });
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
          <DialogTitle className="text-pink">Enter Your EMPLID</DialogTitle>
          <DialogDescription className="text-black">
            Please enter your EMPLID in order to track your points for a prize.
          </DialogDescription>
          <input
            type="text"
            placeholder="Enter EMPLID"
            value={emplid}
            onChange={(e) => setEmplid(e.target.value)}
            className="w-full p-2 my-4 border-2 border-pink rounded-md"
          />
          <div className="flex justify-between">
            <DialogClose asChild>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-pink bg-white border-pink border-2 rounded-md p-2"
              >
                I don&apos;t have an EMPLID
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button
                onClick={() => {
                  storeEMPLID(emplid);
                  setIsDialogOpen(false);
                }}
                className="text-pink bg-white border-pink border-2 rounded-md p-2"
              >
                Save EMPLID
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex justify-center py-14 px-6">
        <Image
          src="/images/WiCS-Logo.png"
          alt="WiCS Logo"
          width={500}
          height={200}
          className="rounded-3xl shadow-img"
        />
      </div>
      <div className="flex justify-center py-8 px-6">
        <h1 className="sm:text-xl md:text-3xl text-2xl font-bold text-center">
          &lt;/ WOMEN IN COMPUTER SCIENCE &gt; <br /> @ HUNTER COLLEGE
        </h1>
      </div>

      <div className="container mx-auto w-4/5 pb-20 flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <Image
            src="/images/photo/IMG_2282.png"
            alt="group pic"
            width={500}
            height={500}
            className="rounded-3xl "
          />
          <div className="w-auto flex flex-col justify-center">
            <h1 className="w-full text-center pb-4">
              All are welcome to join our club, come to events, and participate
              on our board regardless of your major, gender, or declared major.
            </h1>
            <h1 className="w-full text-center pb-4">
              You must be an ally and supporter of womxn in tech!
            </h1>
            <h1 className="w-full text-center pb-4">
              We are so excited for you to join us in empowering and promoting
              women in tech :)
            </h1>
          </div>
        </div>
      </div>

      <div className="pb-16">
        <h1 className="sm:text-2xl md:text-4xl text-xl font-bold text-center pb-4">
          Want to be a Member?
        </h1>
        <h1 className="w-full text-center pb-4">
          Join our club by filling out{" "}
          <a href="https://forms.gle/KuWM3UqUjjrPANCr7" target="_blank">
            this form!
          </a>{" "}
          This form will also put you on our mailing list so you can stay up to
          date with our events and opportunities.
        </h1>
        <div className="flex justify-center">
          <button className="p-2 bg-pink rounded-sm text-white flex items-center">
            <a href="https://forms.gle/KuWM3UqUjjrPANCr7" target="_blank">
              Join Now!
            </a>
            <MoveUpRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
