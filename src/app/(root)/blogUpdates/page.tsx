"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { auth } from "../../../firebase";
import ProtectedRoute from "../../../components/ProtectedRoutes";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase.js";

export default function BlogUpdates() {
    const [eventName, setEvent] = useState("");
    const [error, setError] = useState<string | null>(null);

    const AddEvent = async () => {
        try {
            await setDoc(doc(db, "event", eventName), {
                eventName: eventName,
            });
        } catch (err: any) {
            console.error("Cant add event", err);
            setError(err.message || "Something went wrong.");
        }
    };

    return (
        <ProtectedRoute>
            <div className="font-inter ml-[10%] mr-[10%] mt-[5%] mb-[10%] w-fit flex  flex-col gap-y-10">
                <h1 className="font-bold text-3xl">Add Events</h1>
                <div className="flex flex-col gap-y-3">
                    <input
                        type="text"
                        placeholder="Event Name"
                        value={eventName}
                        onChange={(e) => setEvent(e.target.value)}
                        required
                        className="p-2 rounded-sm"
                    />
                    <Button onClick={AddEvent} className="w-fit">
                        Add Event to Event List
                    </Button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </div>
        </ProtectedRoute>
    );
}
