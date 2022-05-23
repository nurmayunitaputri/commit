import Head from 'next/head';
import ContactContainer from '../containers/contact';
const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us </title>
      </Head>
      <ContactContainer />
    </>
  );
};
export default ContactPage;
