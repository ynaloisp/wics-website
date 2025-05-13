"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import "firebase/firestore";
export default function Blog() {
    const eventNameRef = useRef<HTMLInputElement>(null);
    const firestore = getFirestore();
    const ref = collection(firestore, "blogPosts");
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Event Name:", eventNameRef.current?.value);
        try {
            await addDoc(ref, {
                eventName: eventNameRef.current?.value,
            });
            const statusMessage = document.getElementById("statusMessage");
            if (statusMessage) {
                statusMessage.innerHTML =
                    "<p class='text-green-500'>Event name saved successfully!</p>";
            }
        } catch (error) {
            console.error("Error saving event name:", error);
        }
    };
    return (
        <div>
            <form
                className="space-y-4 flex flex-col items-center padding-10"
                onSubmit={handleSave}
            >
                <h1 className="text-2xl font-bold">Blog Updates</h1>
                <label htmlFor="eventName" className="text-xl">
                    Enter Event Name
                </label>
                <input
                    type="text"
                    id="eventName"
                    placeholder="Event Name"
                    ref={eventNameRef}
                    required
                />
                <Button
                    type="submit"
                    className="bg-buttonGradient font-semibold rounded-lg p-2 pl-5 pr-5 text-grey mt-[2%]"
                >
                    Save
                </Button>
            </form>

            <div id="statusMessage"></div>
        </div>
    );
}
