import Head from "next/head";
import ProfileUserContainer from "../../containers/profileuser/ProfileUser";

const ProfileUserPage = () => {
  return (
    <>
      <Head>
        <title>Detail Post - Commit</title>
      </Head>
      <ProfileUserContainer />
    </>
  );
};
export default ProfileUserPage;
