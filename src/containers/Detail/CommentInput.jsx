import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/button/Button1";
import { useDetailDispatcher } from "../../redux/reducers/detail/slice";

export const CommentInput = ({ postId }) => {
  const [comment, setComment] = useState("");
  const { postComment, detail, refreshDetail } = useDetailDispatcher();
  const { commentAction } = detail;

  const handleOnSubmit = async () => {
    if (comment.trim().length === 0) {
      alert("Comment input cannot be empty");
      return;
    }

    try {
      await postComment({ postId, comment });
      setComment("");
      refreshDetail(postId);
    } catch (e) {
      alert("Failed to add comment");
    }
  };

  return (
    <div className="flex flex-row py-3 px-3 space-x-3">
      <img
        src="/no_profile.png"
        className="w-10 h-10 rounded-full object-cover"
      />
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        placeholder="Add a comment..."
        class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
      <button
        onClick={handleOnSubmit}
        className="px-5 py-2  bg-[#E2EFFF] text-[#00229B] hover:bg-[#00229B] hover:text-white font-semibold rounded-lg"
      >
        {commentAction.loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
};
