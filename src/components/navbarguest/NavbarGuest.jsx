import { useRouter } from 'next/router';

export const NavbarGuest = () => {
  
  return (
    <nav className="flex items-center justify-between flex-wrap  bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-20 ">
        <img src="Logo Header.svg" className=" w-11/12 max-w-fit mx-auto pl-3"></img>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-black ">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="./login" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-11 ">
            Home
          </a>
          <a href="./about" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-11">
            About Us
          </a>
          <a href="./contact" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-11">
            Contact Us
          </a>
          
        </div>
        <div>
          <a href="../signup" className="inline-block text-sm px-6 py-2 leading-none border rounded-lg bg-[#00229B] text-white border-white mt-4 lg:mt-0 mr-4">
            Sign Up
          </a>
        </div>
        <div>
          <a href="../login" className="inline-block text-sm px-6 py-2 leading-none border rounded-lg text-[#00229B] border-[#00229B] mt-4 lg:mt-0">
            Log In
          </a>
        </div>
      </div>
    </nav>
  );
};
