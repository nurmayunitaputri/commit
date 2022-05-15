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
dayjs.extend(relativeTime);

const DetailContainer = () => {
  const { detail, fetchDetail } = useDetailDispatcher();
  const { postId } = useRouter().query;
  const { loading, error, data } = detail;

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
          <div className="border-transparent  rounded-lg ">
            {data && (
              <PostCard
                name={data.detail_post.user.username}
                desc={data.detail_post.post_desc}
                createdDate={data.detail_post.created_date}
                filePosts={data.detail_post.filePosts}
                tags={[data.detail_post.user.passion]}
                totalComment={data.detail_post.total_komentar}
                totalLike={data.detail_post.total_like}
                avatar="https://img.tek.id/img/content/2019/10/04/21135/begini-gambaran-proses-syuting-avatar-2-OUv6EI6mLH.jpg"
              />
            )}

            {/* Comment */}
            {data &&
              data.komentar_post &&
              data.komentar_post.map((comment) => (
                <CommentCard
                  name={comment.id_user.fullname}
                  avatar="https://img.tek.id/img/content/2019/10/04/21135/begini-gambaran-proses-syuting-avatar-2-OUv6EI6mLH.jpg"
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
