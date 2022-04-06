// // import PostItem from "./PostItem";

// // const Posts = () => {
// //   return (
// //     <section>
// //       <PostItem />
// //       <PostItem />
// //       <PostItem />
// //     </section>
// //   )
// // }

// // export default Posts;

// import PostItem from './PostItem';
// const Posts = ({ data }) => {
//   return <section>{data && data.length > 0 && data.map((post) => <PostItem key={post.id} data={post.attributes} />)}</section>;
// };
// export default Posts;

import { useEffect } from 'react';
import { useHomeProvider } from '../HomeProvider';
import PostItem from './PostItem';
const Posts = () => {
  const { posts, loadPosts } = useHomeProvider();
  useEffect(() => {
    loadPosts();
  }, []);
  return <section>{posts && posts.length > 0 && posts.map((post) => <PostItem key={post.id} data={post.attributes} id={post.id} />)}</section>;
};
export default Posts;
