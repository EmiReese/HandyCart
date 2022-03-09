import React from "react";
import { Link, Navigate } from 'react-router-dom';

export default function LoginButton (){
  
    return (
<Link to="/login">
<button class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-600 text-indigo-600 px-4 sm:px-10 py-2 sm:py-4 text-sm">Login</button></Link>
    ); 
}

