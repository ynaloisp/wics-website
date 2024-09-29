"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "@/firebase";

interface User {
  id: string;
  email: string;
  emplid: string;
  fullname: string;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);

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
        });
      });

      setUsers(fetchedUsers);
    }

    fetchUsers();
  }, []);

  return (
    <div className="bg-[#fef8f8] min-h-screen">
      <h1>Users</h1>
      {users && users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="bg-white p-6 rounded-lg shadow-md">
            <p>{user.fullname}</p>
            <p>{user.email}</p>
            <p>{user.emplid}</p>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}
