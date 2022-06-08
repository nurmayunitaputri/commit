import { useState, useEffect, Fragment } from "react";
import {
  MenuIcon,
  SearchIcon,
  XIcon,
  HomeIcon as HomeIconOutline,
  LightBulbIcon as LightBulbIconOutline,
} from "@heroicons/react/outline";
import {
  CheckCircleIcon,
  HomeIcon as HomeIconSolid,
  LightBulbIcon as LightBulbIconSolid,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useSearchDispatcher } from "../../redux/reducers/search";
import { callAPI } from "../../helpers/network";
import { useHomeDispatcher } from "../../redux/reducers/home";
import clsx from "clsx";
SearchIcon;

export const NavBar = ({ currentPage }) => {
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
                  <div className="flex justify-center">
                    {currentPage == "home" ? (
                      <HomeIconSolid height={18} color="blue" />
                    ) : (
                      <HomeIconOutline height={18} color="gray" />
                    )}
                  </div>
                  <p
                    className={clsx(
                      "flex items-center ml-1 ",
                      currentPage == "home" ? "text-blue-700" : "text-grey-700"
                    )}
                  >
                    {" "}
                    Home{" "}
                  </p>
                </div>
              </Link>
              <Link href="/simpler">
                <div
                  href="/simpler"
                  className=" mt-4 cursor-pointer lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-gray-400 mr-11 justify-center items-center align-middle flex flex-col"
                >
                  <div className="flex justify-center">
                    {currentPage == "simpler" ? (
                      <LightBulbIconSolid color="blue" height={20} />
                    ) : (
                      <LightBulbIconOutline color="gray" height={20} />
                    )}
                  </div>
                  <p
                    className={clsx(
                      "flex items-center ml-1 ",
                      currentPage == "simpler"
                        ? "text-blue-700"
                        : "text-grey-700"
                    )}
                  >
                    Simpler
                  </p>
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
                Halo, {name.substring(0, 7)} {name.length > 7 && "..."}{" "}
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
    searchUsers({ query: searchInput });
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
          <div className="relative top-20 p-5 bg-white w-96 rounded-lg border-gray-100  max-h-80 overflow-auto">
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
          <div className="flex justify-start items-start align-top">
            <p className="font-bold mr-1">{user.fullname}</p>
            {user.status === "Verified" && (
              <CheckCircleIcon color="blue" height={18} />
            )}
          </div>
          <p className="text-blue-900 font-medium text-[11px]">
            {user.passion}
          </p>
        </div>
      </div>
      <button
        className={clsx(
          "block overflow-hidden h-8 px-2 text-[12px] rounded-lg ml-[33px]  focus:outline-none ",
          isFollowed ? "bg-white" : "bg-[#00229B]",
          isFollowed ? "text-blue-900" : "text-white",
          isFollowed && "border border-solid border-blue-600"
        )}
        onClick={hanldeOnFollowOrUnfollow}
      >
        {isFollowed ? "Followed" : "Follow"} {loading && "..."}
      </button>
    </div>
  );
};
