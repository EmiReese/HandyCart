import React from 'react';
import Signup from '../Signup';
import '../../tailwind.config';
import { Link } from 'react-router-dom';


export default function SignupButton () {
    return (
        <Link to={Signup}>
        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign Up</button>
        </Link>
    );
}

//<Link to={Signup => ({ ...Signup, pathname: "/signup" })}/>