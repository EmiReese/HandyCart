import React from "react";
import '../../tailwind.config';
import Login from '../Login';
import { Link } from 'react-router-dom';


export default function LoginButton (){
    return (
        <Link to={ Login }>
<button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Log In</button>
</Link>
    );
}