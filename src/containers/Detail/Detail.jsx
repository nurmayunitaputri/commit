import { NavBar } from "../../components/navbar/Navbar";
import { PostCard } from "../../components/postcard";
import { AuthProvider } from "../../providers/auth";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CommentCard } from "../../components/commentcard";
import { CommentInput } from "./CommentInput";
import { useDetailDispatcher } from "../../redux/reducers/detail/slice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useHomeDispatcher } from "../../redux/reducers/home";
dayjs.extend(relativeTime);

const DetailContainer = () => {
  const { likeAction, deletePost } = useHomeDispatcher();
  const { detail, fetchDetail, refreshDetail } = useDetailDispatcher();
  const { postId } = useRouter().query;
  const { loading, error, data } = detail;
  const { back } = useRouter();

  const handleOnLike = async () => {
    await likeAction({ postId, status: "like" });
    refreshDetail(postId);
  };
  const handleOnUnlike = async () => {
    await likeAction({ postId, status: "unlike" });
    refreshDetail(postId);
  };
  const handleOnDelete = async () => {
    await deletePost({ postId });
    back();
  };

  useEffect(() => {
    fetchDetail(postId);
  }, []);

  if (error) {
    <p>error</p>;
  }

  if (loading) {
    <p>Loading...</p>;
  }

  return (
    <AuthProvider>
      <div className="bg-blue-200 min-h-screen">
        <NavBar />
        <div className="w-full h-[30%] lg:w-[50%] mx-auto space-y-3 pt-20 bg-white">
          <div className="border-transparent rounded-lg ">
            {data && (
              <PostCard
                userId={data.detail_post.user.id}
                name={data.detail_post.user.fullname}
                desc={data.detail_post.post_desc}
                createdDate={data.detail_post.created_date}
                filePosts={data.detail_post.filePosts}
                interest={[data.detail_post.user.passion]}
                tags={data.detail_post.post_tags}
                totalComment={data.detail_post.total_komentar}
                totalLike={data.detail_post.total_like}
                avatar="/no_profile.png"
                isLiked={data.detail_post.liked}
                status={data.detail_post.status}
                showVerifiedStatus={data.detail_post.user.total_follower >= 20}
                onLikePress={() => handleOnLike(data.detail_post.id_post)}
                onUnlikePress={() => handleOnUnlike(data.detail_post.id_post)}
                onDeletePress={() => handleOnDelete(data.detail_post.id_post)}
              />
            )}

            {/* Comment */}
            {data &&
              data.komentar_post &&
              data.komentar_post.map((comment) => (
                <CommentCard
                  key={comment.id}
                  userId={comment.id_user.id}
                  name={comment.id_user.fullname}
                  avatar="/no_profile.png"
                  interest={[comment.id_user.passion]}
                  createdDate={comment.created_date}
                  desc={comment.isiKomentar}
                />
              ))}

            <CommentInput postId={postId} />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default DetailContainer;
