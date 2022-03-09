import React from 'react';
import SignupButton from '../components/parts/SignupButton';
import LoginButton from '../components/parts/LoginButton';

export default function Home() {
  return(
  <div className="flex items-center min-h-screen">
    <div className="container mx-auto">
      <div className="max-w-md mx-auto my-10">
        <div className="text-center">
          <h1 className="my-3 text-5xl font-semibold text-gray-700 dark:text-gray-200">Welcome to HandyCart</h1>
          <p className="text-gray-500 dark:text-gray-400">Please login or signup</p>
        </div>
        <div className="m-7 pl-28">
          <div className="mb-6">
            <SignupButton />
          </div>
          <div className="mb-6">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
