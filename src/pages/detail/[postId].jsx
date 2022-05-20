import Head from "next/head";
import { useRouter } from "next/router";
import DetailContainer from "../../containers/Detail";

const DetailPage = () => {
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
