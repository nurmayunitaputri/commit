import Head from 'next/head';
import ProfileContainer from '../containers/signup';
const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Profile - Commit</title>
      </Head>
      <ProfileContainer />
    </>
  );
};
export default ProfilePage;
