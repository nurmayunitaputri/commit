import { NavBar } from '../../components/navbar';
const PrivacyContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-white text-[#00229B] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <div className=" pt-[50px] px-2 pb-10 w-8/12 max-w-fit mx-auto">
              <img src="/Logo.png" layout="fill" />
            </div>
            <h1 className="text-5xl title-font mb-2 mt-10 font-bold text-[#00229B]">Privacy Policy</h1>
          </div>
          <div className="flex flex-col w-full justify-center ">
            <p className="lg:w-2/3 mx-auto  leading-relaxed text-sm text-center text-[#333333] pt-5">
              This policy explains what information we collect when you use our sites, services, mobile applications, products, and content (“Services”). It also has information about how we store, use, transfer, and delete that
              information. Our aim is not just to comply with privacy law. It’s to earn your trust.
            </p>
            <p className="lg:w-2/3 text-2xl font-bold mx-auto text-left leading-relaxed text-[#333333] pt-10">Information We Collect & How We Use It</p>
            <p className="lg:w-2/3 mx-auto  leading-relaxed text-sm text-left text-[#333333] pt-5">
              Commit doesn’t make money from ads. So we don’t collect data in order to advertise to you. The tracking we do at Commit is to make our product work as well as possible. This includes basic product functions like allowing our
              metered paywall to work and key features like personalizing what posts you see based on what we think you’ll like. So, to give you the best possible experience in using Commit, we collect information from your interactions
              with our Services. Some of this information, you actively tell us (such as your email address, which we use to track your account or communicate with you). Other information, we collect based on actions you take while using
              Medium, such as what pages you view (including how much of a given page and for how long) and your use of product features (like Save to Bookmarks, posts, follows, comments and like). This information includes records of those
              interactions, your Internet Protocol address, information about your device (such as device or browser type), and referral information (how you got to a particular page).
              <br />
              <br />
              <br />
              We use this information to:
              <br />
              1. Provide, test, improve, promote and personalize the Services
              <br />
              2. Fight spam and other forms of abuse
              <br />
              3. Generate aggregate, non-identifying information about how people use the Services
            </p>
            <p className="lg:w-2/3 text-2xl font-bold mx-auto text-left leading-relaxed text-[#333333] pt-10">Data Storage</p>
            <p className="lg:w-2/3 mx-auto  leading-relaxed text-sm text-left text-[#333333] pt-5">
              Commit uses third-party vendors and hosting partners for hardware, software, networking, storage, and related technology we need to run Commit. We maintain two types of logs: server logs and event logs. By using the Services,
              you authorize Commit to transfer, store, and use your information in the Indonesia.
            </p>

            <p className="lg:w-2/3 text-2xl font-bold mx-auto text-left leading-relaxed text-[#333333] pt-10">Data Security</p>
            <p className="lg:w-2/3 mx-auto  leading-relaxed text-sm text-left text-[#333333] pt-5">
              We use encryption (HTTPS/TLS) to protect data transmitted to and from our site. However, no data transmission over the Internet is 100% secure, so we can’t guarantee security. You use the Service at your own risk, and you’re
              responsible for taking reasonable measures to secure your account.
            </p>

            <p className="lg:w-2/3 text-2xl font-bold mx-auto text-left leading-relaxed text-[#333333] pt-10">Email from Commit</p>
            <p className="lg:w-2/3 mx-auto  leading-relaxed text-sm text-left text-[#333333] pt-5">
              Sometimes we’ll send you emails about your account, service changes or new policies. You can’t opt out of this type of “transactional” email (unless you delete your account). But, you can opt out of non-administrative emails
              such as digests, newsletters, and activity notifications through your account’s Settings page. When you interact with an email sent from Commit (such as opening an email or clicking on a particular link in an email), we may
              receive information about that interaction. We won’t email you to ask for your password or other account information. If you receive such an email, please forward it to us at legal@commit.com so we can investigate.
            </p>
          </div>

         
        </div>
      </div>
   {/* footer */}
   <div className="text-gray-600 bg-[#E2EFFF]  ">
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div></div>
        <div className="w-[389px] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="Logo Header.svg" className="  w-full pl-3"></img>
          </a>
        </div>
        <div className="flex-grow flex justify-between flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold tracking-widest text-[#00229B] text-xl mb-3">FEATURES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="../simpler" className=" text-[#00229B] text-lg ">
                  Simpler
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font   tracking-widest text-[#00229B] text-xl font-semibold mb-3">COMMUNITY</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="../about" className="text-[#00229B] text-lg ">
                  About Us
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  tracking-widest  text-[#00229B] text-xl font-semibold mb-3">SUPPORT</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="../privacy" className="text-[#00229B] text-lg ">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="../contact" className="text-[#00229B] text-lg ">
                  Contact Us
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#E2EFFF] pt-5 pb-10  flex items-center text-center justify-center ">
        <p className=" text-sm text-center sm:text-left">
          <a href="#" rel="noopener noreferrer" className=" text-xl font-bold ml-1 text-[#00229B]  text-center">
            © 2022 - Commit. All Rights Reserved
          </a>
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default PrivacyContainer;
