import React from 'react';
import Login from './Login';
import Avatar from '../Avatar-Maker.png';


export default function UserProfile () {
return (
    <body className=" bg-gray-300 font-sans antialiased ">
        <div className="container mx-auto my-60 ">
            <div>
    
                <div className="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-5/6 xl:w-5/6 mx-auto">
                    <div className="flex justify-center">
                            <img src={ Avatar } alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white" />
                    </div>
                    
                    <div className="mt-16">
                        <h1 className="font-bold text-center text-3xl text-gray-900">Name</h1>
                        
                        <div className="my-5">
                            <input type="text" value="Start a New List" className="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600" />
                        </div>
                        
    
                        <div className="w-full">
                            <h3 className="font-bold underline text-gray-600 text-left px-4">Recent Lists</h3>
                            <div className="mt-5 w-full">
                                <a href="#" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        This is an old list
                                </a>
    
                                <a href="#" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        This is an old list
                                </a>
    
                                <a href="#" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                    This is a previous list
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

);
}
