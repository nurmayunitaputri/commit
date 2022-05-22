import Head from "next/head";
import ProfileContainer from "../containers/profile";
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
