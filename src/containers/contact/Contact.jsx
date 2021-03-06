import { NavBar } from "../../components/navbar";
import { NavbarGuest } from "../../components/navbarguest";
import { getUser } from "../../helpers/auth";

const ContactContainer = () => {
  const user = getUser();
  return (
    <div>
      {user === null ? <NavbarGuest /> : <NavBar />}

      <div className="bg-white text-[#00229B] body-font overflow-hidden">
        <div className="container px-5 py-12  mx-auto">
          {/* bagian satu */}
          <div className="text-gray-600 body-font overflow-hidden ">
            <div className="container px-5 pt-16 pb-5 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h1 className="text-[#00229B] text-5xl title-font font-bold  mb-4">
                    Contact Us
                  </h1>

                  <p className="leading-relaxed mb-4 text-base">
                    For customer service and business matter only. If you want
                    to do Account Verification, please read the FAQ first before
                    contacting us.
                  </p>
                  <p className="leading-relaxed mb-4 text-[#2F69FF] font-bold text-base">
                    tech.commitapp@gmail.com
                  </p>
                </div>
                <img
                  alt="Contact"
                  className="ml-20 lg:w-1/4 w-1/4 lg:h-auto h-auto object-cover object-center rounded"
                  src="contact.png"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 pt-10 pb-20 mx-auto pl-9 ">
            <div className="lg:w-4/5 mx-auto ">
              <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-[#00229B] text-5xl title-font font-bold  mb-4">
                  FAQ
                </h1>

                <p className="leading-relaxed mb-4 text-[#7A97FF] text-2xl font-bold ">
                  Frequently Asked Questions
                </p>
                <p className="leading-relaxed mb-1 text-[#333333] text-2xl font-bold ">
                  What do I get as a Verified user ?
                </p>
                <p className="leading-relaxed mb-4 text-base">
                  As soon as you are registered as a Verified user, you will be
                  able to post Premium contents on SImpler Community and you
                  will get paid for each post you made.
                </p>

                <p className="leading-relaxed mb-1 text-[#333333] text-2xl font-bold ">
                  How do I make my account verified ?
                </p>
                <p className="leading-relaxed mb-4 text-base">
                  1. Make sure your followers count has reached or exceeded 20
                  followers.
                  <br />
                  2. Prepare a scan of your ID card.
                  <br />
                  3. Send the email to our email address listed in Contact Us,
                  with email subject ???Verify Account??? and following information
                  as Your Account Name, Bank Name, and your Account Number.
                  <br />
                  4. Attach a scan of your ID card for verification.
                  <br />
                  5. Please patiently wait until further information within 3-5
                  working days.
                </p>
              </div>
            </div>
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
              <h2 className="title-font font-semibold tracking-widest text-[#00229B] text-xl mb-3">
                FEATURES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="../simpler" className=" text-[#00229B] text-lg ">
                    Simpler
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font   tracking-widest text-[#00229B] text-xl font-semibold mb-3">
                COMMUNITY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="../about" className="text-[#00229B] text-lg ">
                    About Us
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  tracking-widest  text-[#00229B] text-xl font-semibold mb-3">
                SUPPORT
              </h2>
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
            <a
              href="#"
              rel="noopener noreferrer"
              className=" text-xl font-bold ml-1 text-[#00229B]  text-center"
            >
              ?? 2022 - Commit. All Rights Reserved
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
