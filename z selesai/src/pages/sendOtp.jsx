import Head from 'next/head';
import SendOtpContainer from '../containers/sendOtp';
const SendOtpPage = () => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <SendOtpContainer />
    </>
  );
};
export default SendOtpPage;
