import clsx from "clsx";
import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";

import { AuthProvider } from "../../providers/auth";
import { useHomeDispatcher } from "../../redux/reducers/home";
import { useSimplerDispatcher } from "../../redux/reducers/simpler/slice";
import { Profile } from "../home/Profile";
import { SuggestedPeople } from "../home/SuggestedPeople";
import { OfficialContainer } from "./official/OfficialContainer";
import { VerifiedContainer } from "./verified/VerifiedContainer";

const topicOption = [
  {
    label: "UI/UX",
    value: "UI/UX",
  },
  {
    label: "Front End",
    value: "Front End",
  },
  {
    label: "Android",
    value: "Android",
  },
  {
    label: "Back End",
    value: "Back End",
  },
  {
    label: "Quality Assurance",
    value: "Quality Assurance",
  },
];

const SimplerContainer = () => {
  const { home, fetchProfile } = useHomeDispatcher();
  const { simpler, handleSetFilter } = useSimplerDispatcher();
  const { profile } = home;
  const [tab, setTab] = useState("official");

  const onSetFilter = (value) => {
    handleSetFilter(value);
  };

  useEffect(() => {
    if (!profile) {
      fetchProfile();
    }
  }, []);

  if (profile?.data?.status?.toLowerCase() === "verified") {
    return (
      <AuthProvider>
        <NavBar currentPage="simpler" />
        {/* Container atas kiri */}
        <div className="fixed rounded-lg left-0 w-[20%] ml-[3.2rem] border-transparent text-center invisible lg:visible pt-[80px]">
          <Profile />

          {/* Container bawah kiri  */}
          <div className="fixed rounded-lg left-0 w-[20%] ml-[3.2rem] border-transparent text-center invisible lg:visible pt-7">
            <div className="flex flex-col rounded-lg justify-between">
              <form className="w-full mx-auto bg-white pb-[10px] rounded-lg items-center">
                <h4 className="text-1xl font-bold text-[#333333] pt-[7px] flex justify-start ml-[20px]">
                  Filter
                </h4>

                <p className="text-[12px] text-gray flex justify-start ml-[20px] pb-[7px]">
                  Filter Post by Topics
                </p>
                <div className="grid grid-cols-2  gap-2 items-center px-2 ">
                  {topicOption.map((topic, index) => (
                    <div
                      key={topic.value}
                      className={clsx(
                        simpler.filter == topic.label
                          ? "bg-blue-600"
                          : "bg-white",
                        "flex flex-col text-[10px] font-bold py-2 rounded-full  border-2 border-[#00229B] items-center",
                        index === topicOption.length - 1 && "col-span-2"
                      )}
                      onClick={() => onSetFilter(topic.value)}
                    >
                      <a
                        href="#"
                        className={
                          home.posts.filter == topic.label
                            ? "text-white"
                            : "text-[#00229B]"
                        }
                      >
                        {topic.label}
                      </a>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="fixed rounded-lg right-0 h-max w-[20%] mr-[3.2rem] border-transparent text-center invisible lg:visible pt-[90px]">
          <div className="flex flex-row text-black bg-white rounded-lg mb-5">
            <p
              className={clsx(
                "p-2 rounded-lg text-xl pr-1",
                tab === "official" && "bg-[#00229B] text-white"
              )}
              onClick={() => {
                handleSetFilter("");
                setTab("official");
              }}
            >
              Official Account
            </p>
            <p
              className={clsx(
                "p-2 rounded-lg text-xl",
                tab === "verified" && "bg-[#00229B] text-white"
              )}
              onClick={() => {
                handleSetFilter("");
                setTab("verified");
              }}
            >
              Verified Account
            </p>
          </div>
          <SuggestedPeople />
        </div>
        <div className="bg-blue-200 text-[#00229B] body-font overflow-hidden min-h-screen">
          <div className="container px-5 py-3 mx-auto">
            <Footer />
            {tab === "official" ? <OfficialContainer /> : <VerifiedContainer />}
          </div>
        </div>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <div>
        <NavBar />
        <div className="bg-blue-200 text-[#00229B] body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-2">
              <h1 className="text-6xl  title-font mb-2 mt-10 font-bold text-[#00229B]">
                Welcome to Simpler !
              </h1>
              <div className=" pt-[50px] px-2 pb-10 w-8/12 max-w-fit mx-auto">
                <img src="/Group 383.png" layout="fill" />
              </div>
            </div>
            <div className="flex flex-col w-full justify-center ">
              <div className="w-5/6 self-center">
                <p className="lg:w-2/3 text-center mx-auto leading-relaxed text-2xl font-bold text-[#00229B]">
                  Simpler will make everything simpler for you !
                </p>
                <p className="lg:w-2/3 mx-auto pl-16 leading-relaxed text-sm text-[#00229B]">
                  • Premium contents or posts from Commit and Verified Users
                </p>
                <p className="lg:w-2/3 mx-auto pl-16  leading-relaxed text-sm text-[#00229B]">
                  • IT contents with non-technical language provide by Commit to
                  make it easier for you to understand
                </p>

                <p className="lg:w-2/3 pt-16 pb-3 text-center mx-auto leading-relaxed text-2xl text-[#00229B]">
                  You can only purchase Simpler on our Mobile App{" "}
                  <span className="font-bold">Download Now !</span>
                </p>
                <div className="flex justify-center">
                  <button
                    class="bg-[#00229B] inline-flex py-3 px-5 mb-16 rounded-lg items-center focus:outline-none"
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.commit.app"
                      )
                    }
                  >
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2193_13321)">
                        <path
                          d="M25.9706 22.9185C30.4085 20.6419 33.7727 18.9071 34.0627 18.7722C34.9903 18.3113 35.9483 17.0914 34.0627 16.1438C33.4539 15.8458 30.1761 14.1651 25.9706 11.9975L20.1406 17.4985L25.9706 22.9184V22.9185Z"
                          fill="#FFD900"
                        />
                        <path
                          d="M20.1404 17.4985L1.57715 34.9784C2.01287 35.0323 2.50479 34.9244 3.08475 34.6265C4.30236 34.0038 17.2103 27.4178 25.9704 22.9198L20.1404 17.4985Z"
                          fill="#F43249"
                        />
                        <path
                          d="M20.1409 17.4985L25.9709 12.0246C25.9709 12.0246 4.39094 1.02114 3.08527 0.371601C2.59336 0.0993928 2.04211 0.0185352 1.54883 0.0993928L20.1409 17.4985Z"
                          fill="#00EE76"
                        />
                        <path
                          d="M20.1406 17.4985L1.54846 0.0994263C0.793906 0.262419 0.15625 0.885266 0.15625 2.15906V32.9188C0.15625 34.0847 0.649668 34.9244 1.5773 35.0054L20.1406 17.4985Z"
                          fill="#00D3FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2193_13321">
                          <rect
                            width="35"
                            height="35"
                            fill="white"
                            transform="translate(0.15625 0.069519)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span class="ml-4 flex items-start flex-col leading-none">
                      <span class="text-xs text-white mb-1">GET IT ON</span>
                      <span class="title-font text-white font-medium">
                        Google Play
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 3 kotak div */}
            {/* kotak 1 */}
            <div className="flex flex-wrap -m-4 pt-10 justify-center">
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full drop-shadow-2xl">
                <div className="h-full p-6 rounded-[34px] border-2 bg-white border-white flex flex-col relative overflow-hidden">
                  <div className=" flex justify-end mb-3">
                    <div className="w-3/6 inline-block text-sm px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center mt-4 lg:mt-0">
                      Regular
                    </div>
                  </div>
                  <div className="text-3xl  pb-4 pt-5  border-gray-200 leading-none text-[#7A97FF]">
                    IDR 10.000
                    <span className="text-lg text-[#7A97FF]">/Month</span>
                  </div>
                  <div className="text-xl pb-2 text-[#7A97FF]">1 Month</div>
                  <div className="text-sm pb-4 mb-4 text-[#7A97FF]">
                    For most community that want to optimize knowledge
                  </div>
                  <p className="flex items-center  mb-2 text-[#7A97FF]">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-200 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Premium contents
                  </p>

                  <p className="flex items-center text-[#7A97FF] mb-10 ">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-200 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    IT contents with Non - Technical Language
                  </p>
                  <div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.commit.app"
                      className="w-full h-9 inline-block text-base px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-8 lg:mt-0 "
                    >
                      Choose Plan
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 mt-3"></p>
                </div>
              </div>
              {/* kotak 2 */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full drop-shadow-2xl">
                <div className="h-full p-6 rounded-[34px] border-2 bg-[#00229B] border-[#00229B] flex flex-col relative overflow-hidden">
                  <div className=" flex justify-end mb-3">
                    <div className="inline-block text-sm px-6 py-2 leading-none border rounded-full text-white  bg-[#7A97FF] text-center  mt-4 lg:mt-0 border-[#7A97FF] ">
                      Most Popular
                    </div>
                  </div>
                  <div className="text-3xl pb-4 pt-5  border-[#7A97FF] leading-none text-white">
                    IDR 5.000
                    <span className="text-lg text-#7A97FF] text-white">
                      /Month
                    </span>
                  </div>
                  <div className="text-xl  pb-2 text-white">6 Month</div>
                  <div className="text-sm pb-4 mb-4 text-white">
                    For most community that want to optimize knowledge
                  </div>
                  <p className="flex items-center mb-2 text-white">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-700 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Premium contents
                  </p>
                  <p className="flex items-center mb-10 text-white ">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-700 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    IT contents with Non - Technical Language
                  </p>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.commit.app"
                    className="w-full h-9 inline-block text-base px-6 py-2 leading-none border rounded-full text-white  bg-[#7A97FF] text-center  mt-8 lg:mt-0 border-[#7A97FF]  "
                  >
                    Choose Plan
                  </a>
                  <p className="text-xs text-gray-500 mt-3"></p>
                </div>
              </div>
              {/* kotak 3 */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full drop-shadow-2xl">
                <div className="h-full p-6 rounded-[34px] border-2 bg-white border-white flex flex-col relative overflow-hidden">
                  <div className=" flex justify-end mb-3">
                    <div className=" inline-block text-sm px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-4 lg:mt-0">
                      Recommended
                    </div>
                  </div>
                  <div className="text-3xl pb-4 pt-5 border-gray-200 leading-none text-[#7A97FF]">
                    IDR 8.000{" "}
                    <span className="text-lg text-#7A97FF]">/Month</span>
                  </div>
                  <div className="text-xl  pb-2 text-[#7A97FF]">3 Month</div>
                  <div className="text-sm pb-4 mb-4 text-[#7A97FF]">
                    For most community that want to optimize knowledge
                  </div>
                  <p className="flex items-center mb-2 text-[#7A97FF]">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-200 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Premium contents
                  </p>
                  <p className="flex items-center text-[#7A97FF] mb-10 ">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-200 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    IT contents with Non - Technical Language
                  </p>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.commit.app"
                    className="w-full h-9 inline-block text-base px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-8 lg:mt-0 "
                  >
                    Choose Plan
                  </a>
                  <p className="text-xs text-gray-500 mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default SimplerContainer;
