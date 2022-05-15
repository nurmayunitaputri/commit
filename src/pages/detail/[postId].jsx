import Head from "next/head";
import { useRouter } from "next/router";
import DetailContainer from "../../containers/detail";

const DetailPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <>
      <Head>
        <title>Detail Post - Commit</title>
      </Head>
      <DetailContainer />
    </>
  );
};
export default DetailPage;
