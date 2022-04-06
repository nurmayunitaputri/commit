// import Input from '../components/input';
// import Button from '../components/button';
// import { SubTitle, Title } from '../components/typography';

// import Head from 'next/head';
// const RegistrationContainer = () => {
//   return (
//     <main className="w-full text-gray-700 h-screen flex flex-col space-y-3 justify-center items-center">
//       <div className="w-1/4 mx-auto py-5">
//         <Title text="Sign up here" />
//         <SubTitle content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
//       </div>
//       <form className="w-1/4 mx-auto border p-5 rounded-2xl">
//         <Input name="username" label="Username" type="text" placeholder="Your username" />
//         <Input name="email" label="Email" type="text" placeholder="your@email.com" />
//         <Input name="password" label="Password" type="password" placeholder="Your secret password" />
//         <Button type="submit" label="Create an account now!" />
//       </form>
//     </main>
//   );
// };

// const RegistrationPage = () => {
//   return (
//     <>
//       <Head>
//         <title>Sign Up</title>
//       </Head>
//       <RegistrationContainer />
//     </>
//   );
// };

// export default RegistrationPage;

import Head from 'next/head';
import RegistrationContainer from '../containers/registration';
const RegistrationPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <RegistrationContainer />
    </>
  );
};
export default RegistrationPage;
