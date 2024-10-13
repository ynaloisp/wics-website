"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc } from "@firebase/firestore";
import { db } from "@/firebase";

interface User {
  id: string;
  email: string;
  emplid: string;
  fullname: string;
  points: number;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingPoints, setEditingPoints] = useState<{ [key: string]: number }>(
    {}
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedUsers: User[] = [];

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        fetchedUsers.push({
          id: doc.id,
          email: userData.email,
          emplid: userData.emplid,
          fullname: userData.fullname,
          points: userData.points || 0,
        });
      });

      setUsers(fetchedUsers);
    }

    fetchUsers();
  }, []);

  const handlePointsChange = (userId: string, points: number) => {
    setEditingPoints((prev) => ({ ...prev, [userId]: points }));
  };

  const savePoints = async (userId: string) => {
    const points = editingPoints[userId];
    const userDocRef = doc(db, "users", userId);
    await setDoc(userDocRef, { points }, { merge: true });
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? { ...user, points } : user))
    );
    console.log("Points updated successfully");
  };

  const filteredUsers = users.filter(
    (user) =>
      user.emplid.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#fef8f8] min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Club Members</h1>
      <input
        type="text"
        placeholder="Search by EMPLID or Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6 p-2 border border-gray-300 rounded"
      />
      {filteredUsers && filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div key={user.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{user.fullname}</h2>
              <p className="text-gray-700 mb-1">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>EMPLID:</strong> {user.emplid}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Points:</strong> {user.points}
              </p>
              <input
                type="number"
                value={editingPoints[user.id] ?? user.points}
                onChange={(e) =>
                  handlePointsChange(user.id, parseInt(e.target.value))
                }
                className="mb-2 p-2 border border-gray-300 rounded"
              />
              <button
                onClick={() => savePoints(user.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save Points
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}
