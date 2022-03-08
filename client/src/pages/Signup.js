
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { SIGNUP } from '../utils/mutations';

export default function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(SIGNUP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { email, password } = event.target;
    setFormState({
      ...formState,
      [email]: email,
      [password] : password
    });
  };

//This is where I got the code for this component "https://tailwindcomponents.com/component/sign-up".

        return (
          <div className="container w-100 lg:justify-center">
              <div className="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5 ">Sign Up</h2>
                <div className="relative mb-4">
                  <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign up</button>
                <p class="text-xs text-gray-500 mt-3">Forgot your password?</p>
              </div>
      </div>
          );
          }