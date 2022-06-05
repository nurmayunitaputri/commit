import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { callAPI } from "../../helpers/network";
import { useHomeDispatcher } from "../../redux/reducers/home";
import { useSuggestedPeopleDispatcher } from "../../redux/reducers/suggestedPeople";

export const SuggestedPeople = () => {
  const { suggestedPeople, fetchSuggestedPeople, refreshSuggestedPeople } =
    useSuggestedPeopleDispatcher();

  const { data, loading, error } = suggestedPeople;

  useEffect(() => {
    fetchSuggestedPeople();
  }, []);

  if (error) {
    return <p>error...</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="flex flex-col rounded-lg justify-between">
      <div className="w-full mx-auto bg-white pb-[10px] rounded-lg items-center">
        <p className="text-[14px] font-bold text-[#333333] pt-[20px] flex justify-start ml-[20px]">
          People you may follow
        </p>
        {data.map((people) => (
          <PeopleItem key={`suggested-people-${people.id}`} people={people} />
        ))}
      </div>
    </div>
  );
};

const PeopleItem = ({ people }) => {
  const { push } = useRouter();
  const { fetchProfile } = useHomeDispatcher();
  const { refreshSuggestedPeople } = useSuggestedPeopleDispatcher();
  const [loading, setLoading] = useState(false);

  const handleOnFollow = async () => {
    setLoading(true);
    await callAPI({
      url: `/follow/${people.id}`,
      method: "POST",
    });
    fetchProfile();
    refreshSuggestedPeople();
    setLoading(false);
  };

  const handleOnUnFollow = async () => {
    setLoading(true);
    await callAPI({
      url: `/unfollow/${people.id}`,
      method: "POST",
    });
    fetchProfile();
    refreshSuggestedPeople();
    setLoading(false);
  };

  const hanldeOnFollowOrUnfollow = () => {
    if (people.is_follow) {
      handleOnUnFollow();
    } else {
      handleOnFollow();
    }
  };

  return (
    <div className="flex items-start ml-3 pt-3 px-2 text-sm justify-between">
      <div className="flex">
        <div
          className="block h-10 w-10 rounded-full overflow-hidden border-2 focus:outline-none focus:border-white"
          onClick={() => push(`/profile/${people.id}`)}
        >
          <img
            className="h-full w-full object-cover"
            src={people.profile_pic || "no_profile.png"}
            alt="avatar"
          />
        </div>
        <p className="ml-[5px] text-[12px] font-bold pr-[3px] text-left text-ellipsis">
          {people.fullname.length > 15
            ? `${people.fullname.substring(0, 15)}...`
            : people.fullname}
        </p>
      </div>
      <button
        className="block overflow-hidden px-[3%] py-[2%] text-[12px] rounded-lg ml-[33px] bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-600 "
        onClick={hanldeOnFollowOrUnfollow}
        disabled={loading}
      >
        {people.is_follow ? "Unfollow" : "Follow"}
        {loading && "..."}
      </button>
    </div>
  );
};
