import Head from 'next/head';
import SignupContainer from '../containers/signup';
const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up - BinarGram</title>
      </Head>
      <SignupContainer />
    </>
  );
};
export default SignupPage;
