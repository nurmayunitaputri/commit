import Head from 'next/head';
import ForgotContainer from '../containers/sendOtp';
const SendOtpPage = () => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <ForgotContainer />
    </>
  );
};
export default SendOtpPage;
