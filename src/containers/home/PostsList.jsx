import { useEffect, Fragment } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useHomeDispatcher } from "../../redux/reducers/home";
import { useRouter } from "next/router";
import LikeOutlineIcon from "@heroicons/react/outline/HeartIcon";
import LikeSolidIcon from "@heroicons/react/solid/HeartIcon";
import {
  GlobeIcon,
  LightBulbIcon,
  DotsVerticalIcon,
  TrashIcon,
  ShieldExclamationIcon,
  BookmarkIcon as BookmarkIconOutline,
  ShareIcon,
} from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { isCurrentUser } from "../../helpers/isCurrentUser";
import { useBookmarkDispatcher } from "../../redux/reducers/bookmark/slice";
import { ImagePost } from "../../components/imagespost/ImagePost";

dayjs.extend(relativeTime);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const PostsList = () => {
  const { push } = useRouter();
  const { fetchPosts, home, likeAction, deletePost, refreshPosts } =
    useHomeDispatcher();
  const { saveToBookmark, deleteFromBookmark } = useBookmarkDispatcher();
  const { posts } = home;
  const { loading, data } = posts;

  const handleOnAddToBookmark = async (postId) => {
    await saveToBookmark({ postId });
    await refreshPosts();
  };

  const handleonRemoveFromBookmark = async (postId) => {
    await deleteFromBookmark({ postId });
    await refreshPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <p> Loading</p>;
  }

  if (data.length === 0) {
    return <img className="w-full" src="/Frame 14.png" />;
  }

  return data.map((post) => (
    <div key={post.id_post} className="border-transparent rounded-lg">
      <div className="text-white rounded-lg p-2 ">
        <div className="py-2 rounded-lg bg-white pl-2 overflow-hidden">
          <div className="flex flex-cols ml-2 items-center pt-2">
            <div
              className="block h-[50px] w-[50px] rounded-full overflow-hidden border-2 mr-1"
              onClick={() => push(`/profile/${post.user.id}`)}
            >
              <img
                className="h-full w-full object-cover"
                src={post.user.profile_pic || "/no_profile.png"}
                alt="avatar"
              />
            </div>
            <h4 className="text-[15px] font-bold text-[#333333] ml-4 pt-1 flex justify-center">
              {" "}
              {post.user.fullname}{" "}
            </h4>
            <div className="pb-1 ml-[5px]">
              {post.user.status.toLowerCase() == "verified" && (
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
            <div className="pb-3 ml-56 pl-20 mt-2 pt-3  ">
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
                                deletePost({ postId: post.id_post })
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
                              <ShieldExclamationIcon width={18} height={18} />{" "}
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
                                alert("Your Browser does not support share");
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
            <p className="text-gray-400 text-[12px] ml-20 ">
              {post.user.passion}
            </p>
            <p className="text-gray-400 text-[12px] ml-[5px]">
              • {dayjs(post.created_date).fromNow()}{" "}
            </p>
            <div className="ml-2">
              {post.post_status ? (
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
          <div onClick={() => push(`/detail/${post.id_post}`)}>
            <p className="pt-2 ml-2 pr-10 text-gray-700 text-[12px]  text-left">
              {post.post_desc.substring(0, 300)}
            </p>

            {post.post_desc.length > 300 && (
              <p className="text-gray-400 text-[12px] ml-2 pt-5">
                See more ...
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
                    onClick={() =>
                      likeAction({ postId: post.id_post, status: "unlike" })
                    }
                  />
                ) : (
                  <LikeOutlineIcon
                    height={32}
                    width={32}
                    onClick={() =>
                      likeAction({ postId: post.id_post, status: "like" })
                    }
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
                    onClick={() => handleonRemoveFromBookmark(post.id_post)}
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
  ));
};
