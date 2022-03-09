import React from 'react';
import Signup from '../../pages/Signup';
import { Link } from 'react-router-dom';

export default function SignupButton () {
    return (
            <div>
                <Link to="/signup">
                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-600 py-2 sm:py-4 text-sm">Signup</button>
                    </Link>  
            </div>
    );
}

