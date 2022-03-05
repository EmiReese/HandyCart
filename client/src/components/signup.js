import React from 'react';

//This is where I got the code for this component "https://tailwindcomponents.com/component/sign-up".

export default function Signup() {
        return (
          <section className="text-gray-600 body-font">
            {/* <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center" style="background:url('https://cdn.pixabay.com/photo/2017/08/19/19/43/nature-2659682_1280.jpg')"> */}
              <div className="lg:w-3/5 lg:pr-0 pr-0">
                <h1 className="title-font font-medium font-bold text-5xl text-white">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                <p className="leading-relaxed mt-4 text-white">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
              </div>
              <div className="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                <div className="relative mb-4">
                  <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                  <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
          </section>
          );
          }