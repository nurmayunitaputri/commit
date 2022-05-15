import { useState, useEffect } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

export const NavBar = () => {
  const { push } = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const { fullname } = JSON.parse(localStorage.getItem("user"));
    setName(fullname);
  }, []);

  const handleOnLoggedOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    push("/");
  };

  return (
    <nav className="h-max fixed left-0 right-0 w-full shadow-md bg-white z-50">
      <div className="container mx-auto py-3 px-3 lg:px-0">
        <div className="flex justify-between items-start">
          <div className="flex text-white ">
            <img
              src="Logo Header.svg"
              className=" w-11/12 max-w-fit mx-auto pr-10"
            />
          </div>
          <div className="visible lg:invisible transition-all">
            <button type="button" className="border rounded-lg p-2">
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full block lg:flex ml-auto items-center ">
            <div className="input-group responsive text-black text-sm xl:w-80 flex items-center">
              <input
                type="search"
                className="pr-3 pl-10 form-control relative min-w-0 items-center block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg p-[20] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute mb-0 ml-3 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {/* <div className="border-l-4 mr-2">
                            </div> */}
            </div>
            <div className="text-sm flex items-center pt-2 pl-10">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-gray-400 mr-11 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-3 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <p className="text-grey-700 flex items-center ml-1"> Home </p>
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-gray-400 mr-11 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <p className="text-grey-700 flex items-center "> Simpler </p>
              </a>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
              <div className="responsive text-black text-sm "></div>
            </div>
            <div
              className="dropdown-toggle hidden-arrow pt-2 mr-2 "
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              hallo, {name}
            </div>
            <div className="relative pl-3">
              <button className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                <img
                  className="h-full w-full object-cover"
                  src="https://img.tek.id/img/content/2019/10/04/21135/begini-gambaran-proses-syuting-avatar-2-OUv6EI6mLH.jpg"
                  alt="avatar"
                ></img>
              </button>
            </div>
            <div className="relative pl-10" onClick={handleOnLoggedOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
