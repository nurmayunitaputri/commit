import Head from "next/head";
import LandingContainer from "../containers/landing";
import { NoAuthProvider } from "../providers/auth";

const LandingPage = () => {
  return (
    <NoAuthProvider>
      <>
        <Head>
          <title>Landing Page - Commit</title>
        </Head>
        <LandingContainer />
      </>
    </NoAuthProvider>
  );
};
export default LandingPage;
