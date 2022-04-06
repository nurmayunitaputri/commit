// const RegistrationPage = () => {
//   return (
//     <main>
//       <div className="min-h-screen flex items-center justify-center bg-pink-200">
//         <div className="bg-white p-8 rounded shadow-2xl w-1/3">
//           <h2 className="text-3xl font-bold mb-8 text-pink-800">Create Your Account</h2>
//           <form className="space-y-10 ">
//             <label htmlFor="username">
//               <div className="font-bold">Username</div>
//               <input name="username" placeholder="Input your username..." className="border p-2 block w-full border-pink-800 rounded mb-5" />
//             </label>
//             <label htmlFor="email">
//               <div className="font-bold">Email</div>
//               <input name="email" placeholder="Input your email..." className="border p-2 block w-full border-pink-800 rounded mb-5 " />
//             </label>
//             <label htmlFor="password">
//               <div className="font-bold">Password</div>
//               <input name="password" type="password" placeholder="Input your password..." className="border p-2 block w-full border-pink-800 rounded mb-8" />
//             </label>
//             <div>
//               <button type="submit" className="block w-full bg-pink-800 p-4 rounded hover:bg-pink-500 text-white font-bold">
//                 Create your account
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// };
// export default RegistrationPage;

import Head from 'next/head';
import HomeContainer from '../containers/home';
const HomePage = () => {
  return (
    <>
      <Head>
        <title>BinarGram</title>
      </Head>
      <HomeContainer />
    </>
  );
};
export default HomePage;
