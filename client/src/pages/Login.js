import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_MUTATION } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_MUTATION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        <div className="flex items-center min-h-screen bg-white dark:bg-gray-200">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-900 dark:text-gray-700">Sign in</h1>
                        <p className="text-gray-900 dark:text-gray-900">Sign in to access your account</p>
                    </div>
                        <div className="m-7">
                            <div className="mb-6">
                               <label for="email" className="block mb-2 text-sm text-gray-900 dark:text-gray-900">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                             <div className="mb-6">
                                 <div className="flex justify-between mb-2">
                                     <label for="password" className="text-sm text-gray-900 dark:text-gray-900">Password</label>
                                 <a href="#!" className="text-sm text-gray-900 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <button type="button" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
                            </div>
                            <p className="text-sm text-center text-gray-900">Don&#x27;t have an account yet? <a href="#!" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-800 dark:focus:border-indigo-800">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}





   
   



  
