"use client";

import LoginForm from '@/app/components/LoginForm2'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3x1 my-3">Hey, Time to Sign In</h1>
      <LoginForm />
    </div>
  );
}
