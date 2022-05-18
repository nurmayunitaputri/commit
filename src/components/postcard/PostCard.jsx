import { Fragment } from "react";
import ReactPlayer from "react-player";
import { Menu, Transition } from "@headlessui/react";
import {
  HeartIcon as HeartIconOutline,
  DotsVerticalIcon,
  TrashIcon,
  ShieldExclamationIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { isCurrentUser } from "../../helpers/isCurrentUser";
dayjs.extend(relativeTime);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const PostCard = ({
  userId,
  avatar,
  name,
  tags,
  createdDate,
  desc,
  filePosts,
  totalLike,
  totalComment,
  isLiked,
  status,
  onDeletePress,
  onLikePress,
  onUnlikePress,
}) => {
  return (
    <div className="border-transparent rounded-lg ">
      <div className="min-h-[15rem] text-white rounded-lg p-2">
        <form className="py-2 rounded-lg bg-white pl-2">
          <div className="flex flex-cols ml-2 items-center pt-2">
            <div className="block h-10 w-10 rounded-full overflow-hidden border-2 mr-2 ">
              <img
                className="h-full w-full object-cover"
                src={avatar}
                alt="avatar"
              ></img>
            </div>
            <h4 className="text-[15px] font-bold text-[#333333]  pb-2 flex justify-center">
              {name}
            </h4>
            <div className="pb-3 ml-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="pt-1 ml-96 ">
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md">
                    <a
                      href="#"
                      className="block focus:text-blue-700 text-[#a8b8f1] focus:outline-none ml-[15px]"
                    >
                      <div className="flex items-start text-sm">
                        <DotsVerticalIcon
                          color="rgb(179,179,179)"
                          height={18}
                          width={18}
                        />
                      </div>
                    </a>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {isCurrentUser(userId) && (
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={onDeletePress}
                              className={
                                "flex flex-row " +
                                classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )
                              }
                            >
                              <TrashIcon width={18} height={18} />{" "}
                              <div className="px-1" /> Delete
                            </div>
                          )}
                        </Menu.Item>
                      )}

                      {!isCurrentUser(userId) && (
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() => {}}
                              className={
                                "flex flex-row " +
                                classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )
                              }
                            >
                              <ShieldExclamationIcon width={18} height={18} />{" "}
                              <div className="px-1" /> Report
                            </div>
                          )}
                        </Menu.Item>
                      )}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="flex justify-start">
            <p className="text-gray-400 text-[12px] ml-[60px] ">
              {tags.join(", ")}
            </p>
            <p className="text-gray-400 text-[12px] ml-[10px]">
              {" "}
              {dayjs(createdDate).fromNow()}{" "}
            </p>
            <div className="ml-2 pb-[12px]">
              {status ? (
                <LightBulbIcon
                  color="rgb(179,179,179)"
                  height={18}
                  width={18}
                />
              ) : (
                <GlobeIcon color="rgb(179,179,179)" height={18} width={18} />
              )}
            </div>
          </div>
          <div className="flex flex-cols gap-2 bg-white items-start pt-5 rounded-lg text-gray-700 text-[12px] ml-2 ">
            [Front-End Developer]
            <br /> {desc}
          </div>

          <div className="block h-[50%] w-[90%] ml-7 pt-5">
            {filePosts.map(({ url }) =>
              url.split(".").pop() == "mp4" ? (
                <ReactPlayer url={url} controls={true} />
              ) : (
                <img className="h-50 w-full object-cover " src={url} />
              )
            )}
          </div>
          <div className="flex flex-cols gap-[5%] bg-white items-start pt-[5%] rounded-lg ">
            <div className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[10px]">
              <div className="flex items-start text-sm">
                <div className="h-8 w-8">
                  {isLiked ? (
                    <HeartIconSolid color="red" onClick={onUnlikePress} />
                  ) : (
                    <HeartIconOutline onClick={onLikePress} />
                  )}
                </div>
                <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
                  {totalLike}
                </p>
              </div>
            </div>
            <a
              href="#"
              className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[2px]"
            >
              <div className="flex items-start text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
                  {totalComment}
                </p>
              </div>
            </a>
            <a
              href="#"
              className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[65%]"
            >
              <div className="flex items-start text-sm">
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
