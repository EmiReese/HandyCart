import React from 'react';
import SignupButton from '../components/parts/SignupButton';
import LoginButton from '../components/parts/LoginButton';


export default function Home() {
    return(
    <div className=" homeContainer bg-gray-200">
      <div class="bg-gray-200">
       <div class="container mx-auto flex flex-col items-center py-12 sm:py-24 ">
          <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-8xl xl:text-8xl text-center text-gray-800 font-black leading-7 md:leading-10">
          Handy
              <span class="text-indigo-600">Cart</span>
            </h1>
        </div>
        <div class="flex justify-center items-center">
        <SignupButton />
      <LoginButton />
      </div>
    </div>
</div>
</div>


    
    );
    }
