import React from 'react';
import { QUERY_USERPROFILE } from '../utils/queries';
import { useQuery } from '@apollo/client';


export default function UserProfile () {
    const { data } = useQuery(QUERY_USERPROFILE);
    let user;
  
    if (data) {
      user = data.userProfile;
    }

return (
    <body className="bg-gray-300 font-sans antialiased">
        {user ? (
        <div className="container mx-auto my-60">
            <div>
    
                <div className="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                    <div className="flex justify-center">
                            <img src="https://avatars.dicebear.com/v2/bottts/:seed.svg" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white bg-slate-300" />
                    </div>
                    
                    <div className="mt-16">
                        <h1 className="font-bold text-center text-3xl text-gray-900">Welcome {user.username}</h1>
                        
                        <div className="my-5">
                            <h1 className="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600">Grocery Lists</h1>
                        </div>
                        <div className='flex mt-4 mb-12 justify-center'>
                            <h1>You have no lists!</h1>
                        </div>                        
                        <div className="flex justify-center w-full pb-12">
                            <button type="button" className="w-11/12 px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Create a list</button>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
        ) : null}
    </body>

);
}
