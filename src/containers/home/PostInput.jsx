import { useState, useRef, Fragment, useCallback } from "react";
import { Menu, Transition } from "@headlessui/react";

import { callAPI } from "../../helpers/network";
import { useHomeDispatcher } from "../../redux/reducers/home";

export const PostInput = () => {
  const { fetchPosts } = useHomeDispatcher();
  const [status, setStatus] = useState("Public Post");
  const [desc, setDesc] = useState("");
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputFile = useRef(null);

  const [mediaPreview, setMediaPreview] = useState();

  const handleSelectMedia = () => {
    inputFile.current.click();
  };

  const handleOnChangedMedia = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setMediaPreview(URL.createObjectURL(files[0]));
      setMedia(files[0]);
    }
  };

  const handleOnSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    // validasi desc
    if (desc.length === 0) {
      alert("Status is cannot be empty");
      return;
    }

    // validasi media / file upload
    if (!media) {
      alert("Media is cannot be empty");
      return;
    }

    /// inisialiasi form data untuk di post ke API
    const formData = new FormData();
    const statusValue = status === "Public Post" ? false : true;
    formData.append("tags", "");
    formData.append("status", statusValue);
    formData.append("desc", desc);
    formData.append("file", media);

    try {
      const { data } = await callAPI({
        url: "/post/save",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setStatus("Public Post");
      setDesc("");
      setMedia(null);
      setMediaPreview(null);
      fetchPosts();
      setLoading(false);
      // setMediaPreview(null);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  });

  return (
    <form className="py-2 rounded-lg bg-white pl-2" onSubmit={handleOnSubmit}>
      <div className="flex justify-start">
        <div className="block h-11 w-11 rounded-full overflow-hidden border-2 ">
          <img
            className="h-full w-full object-cover"
            src="kewren.jpg"
            alt="avatar"
          ></img>
        </div>
        <div className="ml-2 items-center pt-2 flex-grow">
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="Write something"
            className="text-clip overflow-hidden h-24 pr-20 pl-5 form-control relative min-w-0 items-center block w-full text-base font-normal bg-white bg-clip-padding  p-[20] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Write something"
            aria-label="Write something"
            aria-describedby="button-addon2"
          />
          {mediaPreview && (
            <div>
              <img
                src={mediaPreview}
                className="object-fill h-20 w-17"
                onClick={() => {
                  setMedia(null);
                  setMediaPreview(null);
                }}
              />
            </div>
          )}
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
            onChange={handleOnChangedMedia}
          />
        </div>
      </div>
      <div className="flex flex-cols gap-2 items-start rounded-lg justify-between pr-5">
        <div className="flex flex-row">
          <div
            onClick={handleSelectMedia}
            className="block focus:text-blue-700 text-[#a8b8f1] focus:outline-none ml-[15px]"
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="ml-[5px] text-[12px] pt-[10px] font-semibold text-[#a8b8f1] py-2">
                Media
              </p>
            </div>
          </div>
          <PublicPost status={status} onChanged={setStatus} />
        </div>
        <button className="block overflow-hidden h-[35px] w-[50px] text-[12px] rounded-lg  bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-700">
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </form>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PublicPost({ status, onChanged }) {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md">
          <a
            href="#"
            className="block focus:text-blue-700 text-[#a8b8f1] focus:outline-none ml-[15px]"
          >
            <div className="flex items-start text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" mx-1.5 text-[12px] font-semibold text-[#a8b8f1] py-2">
                {status}
              </p>
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
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => onChanged("Public Post")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Public Post
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => onChanged("Simpler Post")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Simpler Post
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
