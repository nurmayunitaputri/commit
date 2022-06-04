import { ExclamationCircleIcon } from "@heroicons/react/outline";

export const ErrorState = ({ onClick }) => {
  return (
    <div className="h-52 w-full flex justify-center self-center items-center">
      <div
        onClick={onClick}
        className="flex justify-center self-center items-center bg-white p-20 rounded-md"
      >
        <ExclamationCircleIcon width={50} height={50} />
        <p className="ml-1">Failed to load data, click to reload.</p>
      </div>
    </div>
  );
};
