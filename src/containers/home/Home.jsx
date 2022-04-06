// // import AuthProvider from "../../providers/auth/AuthProvider";
// // import MainLayout from "../../components/layout";
// // import Posts from "./elements/Posts";

// // const HomeContainer = () => {
// //   return (
// //     <AuthProvider>
// //       <MainLayout>
// //         <Posts />
// //       </MainLayout>
// //     </AuthProvider>
// //   )
// // };

// // export default HomeContainer;

// import AuthProvider from '../../providers/auth/AuthProvider';
// import MainLayout from '../../components/layout';
// import Posts from './elements/Posts';
// import useHome from './hooks/useHome';
// const HomeContainer = () => {
//   const { posts } = useHome();
//   return (
//     <AuthProvider>
//       <MainLayout>
//         <Posts data={posts} />
//       </MainLayout>
//     </AuthProvider>
//   );
// };
// export default HomeContainer;

import AuthProvider from '../../providers/auth/AuthProvider';
import MainLayout from '../../components/layout';
import Posts from './elements/Posts';
import HomeProvider from './HomeProvider';
const HomeContainer = () => {
  return (
    <AuthProvider>
      <MainLayout>
        <HomeProvider>
          <Posts />
        </HomeProvider>
      </MainLayout>
    </AuthProvider>
  );
};
export default HomeContainer;
