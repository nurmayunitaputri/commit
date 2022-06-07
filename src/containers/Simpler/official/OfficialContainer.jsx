import { useEffect } from "react";
import { useSimplerDispatcher } from "../../../redux/reducers/simpler/slice";
import { LoadingState } from "../../../components/loadingstate/LoadingState";
import { PostCard } from "../../../components/postcard/PostCard";

export const OfficialContainer = () => {
  const { simpler, fetchPostsOfficial, likeAction, refreshPosts, deletePost } =
    useSimplerDispatcher();

  const { official, filter } = simpler;

  const handleOnLike = async (postId) => {
    await likeAction({ postId, status: "like" });
  };
  const handleOnUnlike = async (postId) => {
    await likeAction({ postId, status: "unlike" });
  };
  const handleOnDelete = async (postId) => {
    await deletePost({ postId });
  };

  useEffect(() => {
    fetchPostsOfficial();
  }, [filter]);

  if (official.loading) {
    return <LoadingState />;
  }

  return (
    <div className="w-full h-[30%] lg:w-[50%] mx-auto space-y-2">
      <div className="border-transparent rounded-lg">
        <div className="min-h-[5rem] text-black rounded-lg p-2"></div>
      </div>

      {official.data.length === 0 && (
        <img className="w-full px-2" src="/Frame 14.png" />
      )}
      {official.data.map((post) => (
        <PostCard
          key={post.id_post}
          postId={post.id_post}
          userId={post.user.id}
          name={post.user.fullname}
          desc={post.post_desc}
          createdDate={post.created_date}
          filePosts={post.filePosts}
          interest={[post.user.passion]}
          tags={[]}
          totalComment={post.total_komentar}
          totalLike={post.total_like}
          avatar={post.user.profile_pic || "/no_profile.png"}
          isLiked={post.liked}
          status={post.status}
          showVerifiedStatus={post.user.status.toLowerCase() === "official"}
          onLikePress={() => handleOnLike(post.id_post)}
          onUnlikePress={() => handleOnUnlike(post.id_post)}
          onDeletePress={() => handleOnDelete(post.id_post)}
          clickStatusToDetail={true}
          bookmarked={post.bookmarked}
          onRefresh={refreshPosts}
        />
      ))}
    </div>
  );
};
