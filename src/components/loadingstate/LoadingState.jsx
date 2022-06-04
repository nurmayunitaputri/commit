import { ExclamationCircleIcon } from "@heroicons/react/outline";

export const LoadingState = () => {
  return (
    <div className="h-52 w-full flex justify-center self-center items-center">
      <div className="flex justify-center self-center items-center bg-white p-20 rounded-md">
        <p className="ml-1">Loading...</p>
      </div>
    </div>
  );
};
