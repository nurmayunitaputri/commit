import { useState } from "react";
import ReactPlayer from "react-player";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/outline";

export const ImagePost = ({ files }) => {
  const [index, setIndex] = useState(0);

  const file = files[index];

  if (files.length < 1) {
    return <div />;
  }

  return (
    <div className="block h-[50%] w-[90%] ml-7 pt-5 relative">
      {index >= 1 && (
        <div className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2">
          <ChevronDoubleLeftIcon
            height={50}
            width={50}
            onClick={() => setIndex(index - 1)}
            color="#73716c"
          />
        </div>
      )}
      {index < files.length - 1 && (
        <div className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
          <ChevronDoubleRightIcon
            height={50}
            width={50}
            onClick={() => setIndex(index + 1)}
            color="#73716c"
          />
        </div>
      )}

      {file.url.split(".").pop() == "mp4" ? (
        <ReactPlayer url={file.url} controls={true} />
      ) : (
        <img className="h-full w-full object-cover" src={file.url} />
      )}
    </div>
  );
};
