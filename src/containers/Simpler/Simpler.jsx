import { NavBar } from '../../components/navbar';

import Image from 'next/image';

const SimplerContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-blue-200 text-[#00229B] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="text-6xl  title-font mb-2 mt-10 font-bold text-[#00229B]">Welcome to Simpler !</h1>
            <div className=" pt-[50px] px-2 pb-10 w-8/12 max-w-fit mx-auto">
              <img src="/Group 383.png" layout="fill" />
            </div>
          </div>
          <div className="flex flex-col w-full justify-center ">
            <div className="w-5/6 self-center">
              <p className="lg:w-2/3 text-center mx-auto leading-relaxed text-2xl font-bold text-[#00229B]">Simpler will make everything simpler for you !</p>
              <p className="lg:w-2/3 mx-auto pl-16 leading-relaxed text-sm text-[#00229B]">• Premium contents or posts from Commit and Verified Users</p>
              <p className="lg:w-2/3 mx-auto pl-16  leading-relaxed text-sm text-[#00229B]">• IT contents with non-technical language provide by Commit to make it easier for you to understand</p>
            </div>
          </div>



          {/* 3 kotak div */}
          {/* kotak 1 */}
          <div className="flex flex-wrap -m-4 pt-10 justify-center">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full drop-shadow-2xl">
              <div className="h-full p-6 rounded-[34px] border-2 bg-white border-white flex flex-col relative overflow-hidden">
                <div className=" flex justify-end mb-3">
                  <div className="w-3/6 inline-block text-sm px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center mt-4 lg:mt-0">Regular</div>
                </div>
                <div className="text-3xl  pb-4 pt-5  border-gray-200 leading-none text-[#7A97FF]">
                  IDR 10.000
                  <span className="text-lg text-[#7A97FF]">/Month</span>
                </div>
                <div className="text-xl pb-2 text-[#7A97FF]">1 Month</div>
                <div className="text-sm pb-4 mb-4 text-[#7A97FF]">For most community that want to optimize knowledge</div>
                <p className="flex items-center  mb-2 text-[#7A97FF]">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Premium contents
                </p>

                <p className="flex items-center text-[#7A97FF] mb-10 ">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  IT contents with Non - Technical Language
                </p>

                <div className="w-full h-9 inline-block text-base px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-8 lg:mt-0 ">Choose Plan</div>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
            {/* kotak 2 */}
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full drop-shadow-2xl">
              <div className="h-full p-6 rounded-[34px] border-2 bg-[#00229B] border-[#00229B] flex flex-col relative overflow-hidden">
                <div className=" flex justify-end mb-3">
                  <div className="inline-block text-sm px-6 py-2 leading-none border rounded-full text-white  bg-[#7A97FF] text-center  mt-4 lg:mt-0 border-[#7A97FF] ">Most Popular</div>
                </div>
                <div className="text-3xl pb-4 pt-5  border-[#7A97FF] leading-none text-white">
                  IDR 5.000
                  <span className="text-lg text-#7A97FF] text-white">/Month</span>
                </div>
                <div className="text-xl  pb-2 text-white">6 Month</div>
                <div className="text-sm pb-4 mb-4 text-white">For most community that want to optimize knowledge</div>
                <p className="flex items-center mb-2 text-white">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Premium contents
                </p>
                <p className="flex items-center mb-10 text-white ">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  IT contents with Non - Technical Language
                </p>

                <div className="w-full h-9 inline-block text-base px-6 py-2 leading-none border rounded-full text-white  bg-[#7A97FF] text-center  mt-8 lg:mt-0 border-[#7A97FF]  ">Choose Plan</div>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
            {/* kotak 3 */}
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full drop-shadow-2xl">
              <div className="h-full p-6 rounded-[34px] border-2 bg-white border-white flex flex-col relative overflow-hidden">
                <div className=" flex justify-end mb-3">
                  <div className=" inline-block text-sm px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-4 lg:mt-0">Recommended</div>
                </div>
                <div className="text-3xl pb-4 pt-5 border-gray-200 leading-none text-[#7A97FF]">
                  IDR 8.000 <span className="text-lg text-#7A97FF]">/Month</span>
                </div>
                <div className="text-xl  pb-2 text-[#7A97FF]">3 Month</div>
                <div className="text-sm pb-4 mb-4 text-[#7A97FF]">For most community that want to optimize knowledge</div>
                <p className="flex items-center mb-2 text-[#7A97FF]">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Premium contents
                </p>
                <p className="flex items-center text-[#7A97FF] mb-10 ">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  IT contents with Non - Technical Language
                </p>

                <div className="w-full h-9 inline-block text-base px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-8 lg:mt-0 ">Choose Plan</div>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplerContainer;


