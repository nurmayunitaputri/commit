import Head from 'next/head';
import HomeContainer from '../containers/home';
const HomePage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <HomeContainer />
    </>
  );
};
export default HomePage;