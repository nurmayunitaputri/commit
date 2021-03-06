import { AuthProvider } from "../../providers/auth";

import { NavBar } from "../../components/navbar/Navbar";
import { useBookmarkDispatcher } from "../../redux/reducers/bookmark/slice";

import { useHomeDispatcher } from "../../redux/reducers/home";
import { Fragment, useEffect, useState } from "react";
import { CogIcon } from "@heroicons/react/solid";
import { Footer } from "../../components/footer";
import { useProfileDispatcher } from "../../redux/reducers/profile/slice";
import { Menu, Transition } from "@headlessui/react";
import {
  DotsVerticalIcon,
  GlobeIcon,
  BookmarkIcon as BookmarkIconOutline,
  LightBulbIcon,
  TrashIcon,
  ShareIcon,
  FlagIcon,
} from "@heroicons/react/outline";
import { isCurrentUser } from "../../helpers/isCurrentUser";
import dayjs from "dayjs";
import { ImagePost } from "../../components/imagespost/ImagePost";
import LikeOutlineIcon from "@heroicons/react/outline/HeartIcon";
import LikeSolidIcon from "@heroicons/react/solid/HeartIcon";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useProfileUserDispatcher } from "../../redux/reducers/profileuser/slice";
import { callAPI } from "../../helpers/network";
import clsx from "clsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfileUserContainer = () => {
  const { push, query } = useRouter();
  const [loadingFollow, setLoadingFollow] = useState(false);
  const { userId } = query;
  const { likeAction } = useHomeDispatcher();
  const { saveToBookmark, deleteFromBookmark } = useBookmarkDispatcher();
  const { profileuser, fetchProfile, refreshProfile } =
    useProfileUserDispatcher();
  const { error, loading, profile, posts } = profileuser;

  const handleOnAddToBookmark = async (postId) => {
    await saveToBookmark({ postId });
    refreshProfile({ userId });
  };

  const handleonRemoveFromBookmark = async (postId) => {
    await deleteFromBookmark({ postId });
    refreshProfile({ userId });
  };

  const handleOnLike = async (postId) => {
    await likeAction({
      postId,
      status: "like",
    });
    refreshProfile({ userId });
  };

  const handleOnUnlike = async (postId) => {
    await likeAction({
      postId,
      status: "unlike",
    });
    refreshProfile({ userId });
  };

  const handleOnFollow = async () => {
    setLoadingFollow(true);
    await callAPI({
      url: `/follow/${userId}`,
      method: "POST",
    });

    refreshProfile({ userId });
    setLoadingFollow(false);
  };

  const handleOnUnFollow = async () => {
    setLoadingFollow(true);

    await callAPI({
      url: `/unfollow/${userId}`,
      method: "POST",
    });

    refreshProfile({ userId });
    setLoadingFollow(false);
  };

  const hanldeOnFollowOrUnfollow = () => {
    if (profile?.is_follow) {
      handleOnUnFollow();
    } else {
      handleOnFollow();
    }
  };

  useEffect(() => {
    fetchProfile({ userId });
  }, [userId]);

  if (error) {
    return <p>error...</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <AuthProvider>
      <div className="bg-blue-200 min-h-screen">
        <Footer />
        <NavBar />
        <div className="w-full h-[30%] lg:w-[50%] mx-auto space-y-2 pt-20">
          <div className="border-transparent rounded-lg ">
            <div className="min-h-[5rem] text-black rounded-lg pt-10  pb-12 bg-white  ">
              <div className="flex flex-row w-full px-12">
                <img
                  class="w-28 h-28 rounded-full"
                  src={profile?.profile_pic ?? "/no_profile.png"}
                  alt="Rounded avatar"
                />
                <div className="text-black ml-5 flex-grow">
                  <div className="flex flex-row justify-between">
                    <div className="flex space-x-2">
                      <p className="font-bold">{profile?.fullname}</p>
                      {profile?.status?.toLowerCase() === "verified" && (
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
                      )}
                    </div>
                    <Menu as="div" className="relative">
                      <Menu.Button className="cursor-pointer">
                        <DotsVerticalIcon height={30} width={30} color="gray" />
                      </Menu.Button>

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
                            <Menu.Item>
                              {({ active }) => (
                                <p className="text-gray-700 block px-4 py-2 text-sm cursor-pointer">
                                  Report
                                </p>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="flex flex-row space-x-2 my-2  items-center">
                    <div className="bg-[#708beb] py-1 px-2 rounded-md text-white">
                      <p>{profile?.passion}</p>
                    </div>
                    <p className="text-gray-400 font-light">
                      ??? {profile?.region}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-light">{profile?.bio}</p>
                  </div>
                  <div className="flex flex-row justify-evenly px-1 text-center mt-5 space-x-10">
                    <div>
                      <p className="font-bold">{posts?.length ?? 0}</p>
                      <p>Posts</p>
                    </div>
                    <div className="h-35 bg-gray-300 w-[1px]" />
                    <div>
                      <p className="font-bold">{profile?.total_followers}</p>
                      <p>Followers</p>
                    </div>
                    <div className="h-35 bg-gray-300 w-[1px]" />
                    <div>
                      <p className="font-bold">{profile?.total_following}</p>
                      <p>Following</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center my-5">
                    {profile?.is_follow ? (
                      <button
                        className={clsx(
                          "block overflow-hidden h-8 px-2 text-[12px] rounded-lg   focus:outline-none w-[50%]",
                          profile.is_follow ? "bg-white" : "bg-[#00229B]",
                          profile.is_follow ? "text-blue-900" : "text-white",
                          profile.is_follow &&
                            "border border-solid border-blue-600"
                        )}
                        onClick={hanldeOnFollowOrUnfollow}
                      >
                        Followed
                        {loadingFollow && "..."}
                      </button>
                    ) : (
                      <button
                        className="block overflow-hidden h-8 px-2 text-[12px] rounded-lg ml-[33px] bg-[#00229B] text-white w-[50%]"
                        onClick={hanldeOnFollowOrUnfollow}
                      >
                        Follow
                        {loadingFollow && "..."}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {posts?.map((post) => (
            <div key={post.id_post} className="border-transparent rounded-lg">
              <div className="text-white rounded-lg w-full ">
                <div className="py-2 rounded-lg bg-white pl-2 overflow-hidden hover:">
                  <div className="flex flex-cols ml-2 items-center pt-2">
                    <div className="block h-[50px] w-[50px] rounded-full overflow-hidden border-2">
                      <img
                        className="h-full w-full object-cover"
                        src={post.user.profile_pic || "/no_profile.png"}
                        alt="avatar"
                      />
                    </div>
                    <h4 className="text-[15px] font-bold text-[#333333] ml-5 pt-1 flex justify-center">
                      {" "}
                      {post.user.fullname}{" "}
                    </h4>
                    <div className="pb-1 ml-[5px]">
                      {profile?.total_followers >= 20 && (
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
                      )}
                    </div>
                    <div className="ml-2 pb-7">
                      <p className="font-bold">{profile?.fullname}</p>
                      {profile?.status?.toLowerCase() === "verified" && (
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
                      )}
                    </div>
                    <div className="pb-4 ml-20 pt-2 pl-20 mt-2  ">
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
                              {isCurrentUser(post.user.id) && (
                                <Menu.Item>
                                  {({ active }) => (
                                    <div
                                      onClick={() =>
                                        handleOnDelete(post.id_post)
                                      }
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
                              {!isCurrentUser(post.user.id) && (
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
                                      <FlagIcon width={18} height={18} />{" "}
                                      <div className="px-1" /> Report
                                    </div>
                                  )}
                                </Menu.Item>
                              )}
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    onClick={() => {
                                      if (navigator.share) {
                                        navigator.share({
                                          url: "",
                                          text: "test",
                                          title: "title",
                                        });
                                      } else {
                                        alert(
                                          "Your Browser does not support share"
                                        );
                                      }
                                    }}
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
                                    <ShareIcon width={18} height={18} />{" "}
                                    <div className="px-1" /> Share
                                  </div>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex justify-start align-middle">
                    <p className="text-gray-400 text-[12px] ml-20">
                      {post.user.passion}
                    </p>
                    <p className="text-gray-400 text-[12px] ml-[5px]">
                      ??? {dayjs(post.created_date).fromNow()}{" "}
                    </p>
                    <div className="ml-2">
                      {post.post_status ? (
                        <LightBulbIcon
                          color="rgb(179,179,179)"
                          height={18}
                          width={18}
                        />
                      ) : (
                        <GlobeIcon
                          color="rgb(179,179,179)"
                          height={18}
                          width={18}
                        />
                      )}
                    </div>
                  </div>
                  <div onClick={() => push(`/detail/${post.id_post}`)}>
                    <p className="pt-8 ml-6 pr-10 text-gray-700 text-[12px] text-left">
                      {post.post_desc.substring(0, 300)}
                    </p>

                    {post.post_desc.length > 300 && (
                      <p className="text-gray-400 text-[12px] ml-2 pl-5 pt-5">
                        See more
                      </p>
                    )}
                  </div>

                  <ImagePost files={post.filePosts} />
                  <div className="flex flex-cols gap-[5%] bg-white items-start pt-[5%] rounded-lg ">
                    <div className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[10px]">
                      <div className="flex items-start text-sm">
                        {post.liked ? (
                          <LikeSolidIcon
                            color="red"
                            height={32}
                            width={32}
                            onClick={async () => handleOnUnlike(post.id_post)}
                          />
                        ) : (
                          <LikeOutlineIcon
                            height={32}
                            width={32}
                            onClick={() => handleOnLike(post.id_post)}
                          />
                        )}
                        <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
                          {post.total_like}
                        </p>
                      </div>
                    </div>
                    <div className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[2px]">
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
                          {post.total_komentar}
                        </p>
                      </div>
                    </div>
                    <div className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[65%]">
                      <div className="flex items-start text-sm">
                        {post.bookmarked ? (
                          <BookmarkIconSolid
                            height={32}
                            width={32}
                            color="black"
                            onClick={() =>
                              handleonRemoveFromBookmark(post.id_post)
                            }
                          />
                        ) : (
                          <BookmarkIconOutline
                            height={32}
                            width={32}
                            onClick={() => handleOnAddToBookmark(post.id_post)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthProvider>
  );
};

export default ProfileUserContainer;
