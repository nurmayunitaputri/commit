import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useHomeDispatcher } from "../../redux/reducers/home";

export const Profile = () => {
  const { push } = useRouter();
  const { fetchProfile, home } = useHomeDispatcher();
  const { profile } = home;
  const {
    profile_pic,
    region,
    passion,
    bio,
    fullname,
    total_followers,
    total_following,
    status,
  } = profile.data;

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="flex flex-col justify-between items-stretch py-2 rounded-lg">
      <div
        className="py-2 rounded-tr-lg rounded-tl-lg rounded-br-lg rounded-bl-lg bg-white"
        onClick={() => push("/profile")}
      >
        <button className=" h-20 w-20 rounded-full overflow-hidden border-2 text-center">
          <img
            className="h-full w-full object-cover"
            src={profile_pic ?? "no_profile.png"}
            alt="avatar"
          />
        </button>
        <div className="text-1xl font-bold text-[#333333] p-[10px] flex justify-center space-x-1">
          <h4>{fullname}</h4>
          {status === "Verified" && <CheckCircleIcon width={20} color="blue"/> }
        </div>
        <div className="flex justify-center text-sm">
          <p className="px-[2%] py-[2%] text-[10px] rounded  bg-[#708beb] text-white">
            {passion}
          </p>
          <p className="text-gray-400 pl-3 px-[5px] py-[5px]">{region}</p>
        </div>
        <div className="text-center text-[14px] text-black py-[8px]">{bio}</div>
        <div className="flex justify-center border-t-4 pt-2">
          <div className="text-black text-center px-5 rounded-lg">
            Followers
            <p className="text-black text-center">{total_followers}</p>
          </div>
          <div className="text-black text-center px-5">
            Following
            <p className="text-black text-center">{total_following}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
