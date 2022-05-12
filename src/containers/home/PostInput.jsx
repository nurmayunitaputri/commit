import { useState, useRef, useContext, useCallback } from "react";
import { callAPI } from "../../helpers/network";

export const PostInput = () => {
  const [status, setStatus] = useState("");
  const [media, setMedia] = useState(null);
  const inputFile = useRef(null);

  //   const [mediaPreview, setMediaPreview] = useState();

  const handleSelectMedia = () => {
    inputFile.current.click();
  };

  const handleOnChangedMedia = (e) => {
    const files = e.target.files;
    if (files) {
      //   setMediaPreview(URL.createObjectURL(files[0]));
      setMedia(files[0]);
    }
  };

  const handleOnSubmit = useCallback(async (e) => {
    e.preventDefault();

    // validasi desc
    if (status.length === 0) {
      alert("Status is cannot be empty");
      return;
    }

    console.log(media);

    // validasi media / file upload
    if (!media) {
      alert("Media is cannot be empty");
      return;
    }

    /// inisialiasi form data untuk di post ke API
    const formData = new FormData();
    formData.append("tags", "");
    formData.append("status", false);
    formData.append("desc", status);
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

      setStatus("");
      setMedia(null);
      // setMediaPreview(null);
    } catch (error) {
      alert(error);
    }
  });

  return (
    <form className="py-2 rounded-lg bg-white pl-2" onSubmit={handleOnSubmit}>
      <div className="flex flex-cols ml-2 items-center pt-2">
        <div className="block h-[50px] w-[50px] rounded-full overflow-hidden border-2 ">
          <img
            className="h-full w-full object-cover"
            src="kewren.jpg"
            alt="avatar"
          ></img>
        </div>

        <textarea
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          type="Write something"
          className="text-clip overflow-hidden pr-20 pl-5 form-control relative min-w-0 items-center block w-full text-base font-normal bg-white bg-clip-padding  p-[20] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Write something"
          aria-label="Write something"
          aria-describedby="button-addon2"
        />
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={handleOnChangedMedia}
        />
      </div>
      <div className="flex flex-cols gap-[10%] items-start pt-[5%] rounded-lg ">
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
            <p className="ml-[5px] text-[12px] pt-[10px] font-semibold text-[#a8b8f1]">
              Media
            </p>
          </div>
        </div>
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
            <p className="ml-[5px] text-[12px] pt-[10px] font-semibold text-[#a8b8f1]">
              Public Post
            </p>
          </div>
        </a>
        <button className="block overflow-hidden h-[35px] w-[50px] text-[12px] rounded-lg ml-[220px] bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-700">
          Post
        </button>
      </div>
    </form>
  );
};
