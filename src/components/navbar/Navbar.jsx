import { useState, useEffect, Fragment } from "react";
import {
  MenuIcon,
  SearchIcon,
  CheckIcon,
  SelectorIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { Combobox, Transition } from "@headlessui/react";
import Link from "next/link";
import { useSearchDispatcher } from "../../redux/reducers/search";
import { callAPI } from "../../helpers/network";
import { useHomeDispatcher } from "../../redux/reducers/home";
SearchIcon;

export const NavBar = () => {
  const { push } = useRouter();
  const [name, setName] = useState("");
  const { home } = useHomeDispatcher();
  const { profile } = home;

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
    <nav className="h-max fixed px-20 left-0 right-0 w-full shadow-md bg-white z-50">
      <div className="container mx-auto py-3 px-3 lg:px-0">
        <div className="flex justify-between items-start">
          <div className="flex text-white ">
            <img
              src="/Logo Header.svg"
              className=" w-11/12 max-w-fit mx-auto pr-10"
            ></img>
          </div>
          <div className="visible lg:invisible transition-all">
            <button type="button" className="border rounded-lg p-2">
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full block lg:flex ml-auto items-center ">
            <div className="input-group responsive text-black text-sm xl:w-96 flex items-center">
              <SearchPeople />
            </div>

            <div className="text-sm flex items-center px-5">
              <Link href="/home">
                <div
                  href="/home"
                  className="block cursor-pointer mt-4 lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-gray-400 mr-11 "
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
                </div>
              </Link>
              <Link href="/simpler">
                <div
                  href="/simpler"
                  className="block mt-4 cursor-pointer lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-gray-400 mr-11 "
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
                </div>
              </Link>
              <div className="w-[2px] h-10 bg-gray-400 mr-10"></div>
              <div
                className="dropdown-toggle hidden-arrow pt-2 mr-2 "
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Halo, {name}
              </div>
              <div className="relative pl-3">
                <button
                  className="block h-10 w-10 rounded-full overflow-hidden border-2 focus:outline-none "
                  onClick={() => push("/profile")}
                >
                  <img
                    className="h-full w-full object-cover "
                    src={profile.data.profile_pic || "/no_profile.png"}
                    alt="avatar"
                  ></img>
                </button>
              </div>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
              <div className="responsive text-black text-sm "></div>
            </div>

            <div className="w-[2px] h-10 bg-gray-400 mr-10"></div>
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

export default function SearchPeople() {
  const [showResult, setShowResult] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { search, searchUsers } = useSearchDispatcher();

  const handleOnSearch = async () => {
    setShowResult(true);
    console.log("submited");
    searchUsers({ query: searchInput });
    setSearchInput("");
  };

  return (
    <>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? handleOnSearch() : null)}
        type="search"
        className="pr-3 pl-10 form-control relative min-w-0 items-center block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg p-[20] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Search"
        aria-label="Search"
      />
      <SearchIcon
        className="h-5 w-5 absolute mb-0 ml-3 text-gray-500"
        height="1.25rem"
        width="1.25rem"
      />

      <Transition
        show={showResult}
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setSearchInput("")}
      >
        <div className="absolute top-0 w-screen h-[20vh]">
          <div className="relative top-20 p-5 bg-white w-80 rounded-lg border-gray-100  max-h-80 overflow-auto">
            <div
              className="flex justify-end pb-4"
              onClick={() => setShowResult(false)}
            >
              <XIcon height={32} width={32} />
            </div>

            {search.error && <p>User Not Found...</p>}
            {search.loading && <p>Loading...</p>}
            {search.users.map((user) => (
              <UserItem key={`search-user-${user.id}`} user={user} />
            ))}
          </div>
        </div>
      </Transition>
    </>
  );
}

const UserItem = ({ user }) => {
  const { push } = useRouter();
  const { fetchProfile } = useHomeDispatcher();
  const [isFollowed, setIsFollowed] = useState(user.is_follow);
  const [loading, setLoading] = useState(false);

  const handleOnFollow = async () => {
    setLoading(true);
    await callAPI({
      url: `/follow/${user.id}`,
      method: "POST",
    });
    setIsFollowed(true);
    fetchProfile();
    setLoading(false);
  };

  const handleOnUnFollow = async () => {
    setLoading(true);
    await callAPI({
      url: `/unfollow/${user.id}`,
      method: "POST",
    });
    setIsFollowed(false);
    fetchProfile();
    setLoading(false);
  };

  const hanldeOnFollowOrUnfollow = () => {
    if (isFollowed) {
      handleOnUnFollow();
    } else {
      handleOnFollow();
    }
  };

  return (
    <div className="flex flex-row  mb-3 align-middle justify-between">
      <div className="flex flex-row space-x-3  align-middle">
        <img
          src={user.profile_pic || "/no_profile.png"}
          className="h-10 w-10 object-cover rounded-full"
          onClick={() => push(`/profile/${user.id}`)}
        />
        <div className="space-y-1">
          <p className="font-bold">{user.fullname}</p>
          <p className="text-blue-900 font-medium text-[11px]">
            {user.passion}
          </p>
        </div>
      </div>
      <button
        className="block overflow-hidden h-8 px-2 text-[12px] rounded-lg ml-[33px] bg-[#00229B] text-white focus:outline-none focus:bg-blue-600"
        onClick={hanldeOnFollowOrUnfollow}
      >
        {isFollowed ? "Followed" : "Follow"} {loading && "..."}
      </button>
    </div>
  );
};
