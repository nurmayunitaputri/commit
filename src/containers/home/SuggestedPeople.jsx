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
        <div className="block h-10 w-10 rounded-full overflow-hidden border-2 focus:outline-none focus:border-white">
          <img
            className="h-full w-full object-cover"
            src="no_profile.png"
            alt="avatar"
          />
        </div>
        <p className="ml-[5px] text-[12px] font-bold pr-[3px] text-left">
          {people.fullname.length > 20
            ? `${people.fullname.substring(0, 20)}...`
            : people.fullname}
        </p>
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
