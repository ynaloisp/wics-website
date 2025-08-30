'use client';
import { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.js';
import { Button } from '@/components/ui/button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth();
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    try {
      const snapshot = await getDocs(collection(db, 'whitelist'));
      const isWhitelisted = snapshot.docs.some(
        (doc) => doc.data().email.toLowerCase() === email.toLowerCase()
      );

      if (!isWhitelisted) {
        setError('This email is not authorized to sign up.');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(async (userCredentials) => {
        const user = userCredentials.user;
        await sendEmailVerification(user);
        alert('Go to your email and verify your account.');
      });

      setEmail('');
      setPassword('');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="font-inter ml-[10%] mr-[10%] mt-[5%] mb-[10%]">
      <h2 className="font-bold text-2xl">Admin Sign Up</h2>
      <form onSubmit={handleSignUp} className="flex flex-col space-y-5 w-fit">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 rounded-sm"
        />
        <Button type="submit" className="w-fit">
          Sign Up
        </Button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
