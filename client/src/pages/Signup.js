import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { SIGNUP_MUTATION } from '../utils/mutations';

export default function Signup() {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [signup] = useMutation(SIGNUP_MUTATION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await signup({
      variables: {
        username: formState.username,
        password: formState.password
      },
    });
    const token = mutationResponse.data.signup.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

// import React from 'react';

//     This code was taken from this very first sign up sheet "https://web3templates.com/components/forms".
//=======================================================================
//     Name    :   Simple Sign In
//     Author  :   Surjith S M
//     Twitter :   @surjithctly

//     Get more components here 👉 https://web3templates.com/components

//     Copyright © 2021
//     =======================================================================
 
// This is our function that creates the login structure.

    return (
        <div className="flex items-center min-h-screen">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10">
                    <div className="text-center">
                        <h1 className="my-3 text-5xl font-semibold text-gray-700 dark:text-gray-200">Sign up</h1>
                        <p className="text-gray-500 dark:text-gray-400">Sign up to start making lists</p>
                    </div>
                        <form onSubmit={handleFormSubmit} className="m-7">
                            <div className="mb-6">
                               <label for="username" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
                                <input type="username" name="username" id="username" onChange={handleChange} placeholder="Your username" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                             <div className="mb-6">
                                 <div className="flex justify-between mb-2">
                                     <label for="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>                                 
                                </div>
                                <input type="password" onChange={handleChange} name="password" id="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign up</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
}