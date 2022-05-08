// import { SearchIcon } from '@heroicons/react/outline';

// const Navbar1 = () => {
//   return (
//     <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg p-6">
//           <div className="flex items-center flex-shrink-0 text-white mr-20">
//           <div className="flex items-center flex-shrink-0 text-white mr-20 ">
//             <img src="Logo Header.svg" className=" w-11/12 max-w-fit mx-auto pl-3"></img>
//           </div>
//           <div className="block lg:hidden">
//             <button className="inLine-flex items-center justify px-3 py-2 border rounded text-black border-black ">
//               <svg className="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <title>Menu</title>
//                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//               </svg>
//             </button>
//           </div>
//           <div className="w-full lg:inLine-flex lg:w-auto ml-auto flex items-center ">
//             <div className="text-sm lg:flex-grow flex items-center">
//             <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-11 ">
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//             </svg> 
//             <p class="text-grey-500 flex items-center ml-1"> Home </p>
//             </a>
//             <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-11 ">
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//             </svg> 
//             <p class="text-grey-500 flex items-center "> Simpler </p> 
//             </a>
//             <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-11 ">
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//             </svg>
//             <p class="text-grey-500 flex items-center">My Chance </p>
//             </a>
//             </div>
//           </div>
//             <div class="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
//               <div class="responsive text-black text-sm ">
//                 <div class="input-group responsive text-black text-sm xl:w-80 flex items-center ">
//                   <input type="search" class="pr-3 pl-10 form-control relative min-w-0 items-center block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-2xl p-[20] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
//                           placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
//                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute mb-0 ml-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
                  
//                   </div>
//               </div>    
//               </div>
//             </div>
//             <div className="dropdown-toggle flex items-end hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
//                       data-bs-toggle="dropdown" aria-expanded="false" > hallo, Angga
//             </div>
//             <div class="w-full block flex-grow lg:flex lg:items-end lg:w-auto ml-5">
//               <button class="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
//                 <img class="h-full w-full object-cover" src="blur.jpg" alt="avatar"></img>            
//               </button>
//               {/* <div
//                   class="hiddden top-nav w-full lg:inLine-flex lg:flex-grow lg:w-auto"
//                    id="navigation">
//                   <div class=" lg:inLine-flexlg:flex-row lg:ml-auto mt-2 py-2 w-42 bg-white rounded-lg shadow-xl ">
//                     <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover-text-white"> account</a>
//                     <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover-text-white"> setting</a>
//                     <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover-text-white"> logout </a> 
//                   </div>
//               </div> */}
//             </div>
//           </nav>
//   );
// };

// export default Navbar1;
