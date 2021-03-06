import dayjs from "dayjs";
import { useRouter } from "next/router";

export const CommentCard = ({
  name,
  avatar,
  createdDate,
  interest,
  desc,
  userId,
}) => {
  const { push } = useRouter();

  return (
    <div className="py-3 px-5 border-t-2">
      <div className="flex flex-row justify-items-center">
        <img
          src={avatar}
          className="w-10 h-10 rounded-full"
          onClick={() => push(`/profile/${userId}`)}
        />
        <div className=" justify-start ml-2 mb-3">
          <p className="text-[15px] font-bold text-[#333333]">{name}</p>
          <p className="text-gray-400 text-[12px]">
            {interest.join(" | ")} • {dayjs(createdDate).fromNow()}
          </p>
        </div>
      </div>
      <p className="text-[12px] text-[#]">{desc}</p>
    </div>
  );
};
