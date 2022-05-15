import Head from 'next/head';
import ConfirmOtpContainer from '../containers/confirmOtp';
const ConfirmOtpPage = () => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <ConfirmOtpContainer />
    </>
  );
};
export default ConfirmOtpPage;
