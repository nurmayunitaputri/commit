import { NavBar } from "../../components/navbar";
import { NavbarGuest } from "../../components/navbarguest";
import { getUser } from "../../helpers/auth";
const AboutContainer = () => {
  const user = getUser();
  return (
    <div>
      {user === null ? <NavbarGuest /> : <NavBar />}
      <div className="bg-white text-[#00229B] body-font overflow-hidden">
        <div className="container px-5 pt-12 mx-auto">
          <div className="flex flex-col text-center w-full mx-auto mb-2">
            <div className=" pt-[50px] px-2 pb-10 w-8/12 max-w-fit mx-auto"></div>
            <p className="lg:w-2/3 text-5xl font-bold mx-auto text-left leading-relaxed text-[#00229B] pt-10 pb-7">
              About Commit
            </p>
          </div>

          <div className="flex flex-col w-full justify-center bg-blue">
            {/* baris satu */}
            <div className="lg:w-2/3 text-2xl rounded-lg bg-[#E2EFFF] pb-8  mx-auto text-left leading-relaxed mb-10">
              <p className="px-10 text-2xl  font-bold mx-auto text-left leading-relaxed text-[#00229B] pt-8">
                What is Commit?
              </p>
              <p className="px-10 mx-auto font-base leading-relaxed text-lg text-left text-[#333333] pt-5">
                <span className="text-[#00229B] font-bold">Commit</span> is a
                platform for members of the IT community (UI/UX Designer,
                Front-End, Back-End, Android, and Quality Assurance) to develop
                their potential, seek experience, and to obtain information
                related to learning, internships, and job vacancies in the
                field. IT.
                <br />
                <br />
                <span className="text-[#00229B] font-bold">Commit</span> is also
                committed to helping Indonesians aged 18-30 years who have an
                interest in IT (UI/UX Designer, Front-End, Back-End, Android,
                and Quality Assurance), whether or not they have an IT
                background. This is realized by the existence of official
                content from{" "}
                <span className="text-[#00229B] font-bold">Commit</span> which
                uses language that is easily understood by beginners.
              </p>
            </div>
            {/* baris 2 */}
            <div className="flex flex-col w-full justify-center bg-blue">
              <div className="lg:w-2/3 text-2xl rounded-lg bg-[#E2EFFF] pb-8  mx-auto text-left leading-relaxed mb-10">
                <p className="px-10  text-2xl  font-bold mx-auto text-left leading-relaxed text-[#00229B] pt-8">
                  How was Commit founded?
                </p>
                <p className="px-10 mx-auto font-base leading-relaxed text-lg text-left text-[#333333] pt-5">
                  SYNRGY Academy has a Main Bootcamp class, where this class
                  facilitates people who want to increase their skills in the IT
                  field. In this Main Bootcamp, a Final Project is held in
                  groups. In this Final Project, we, Team D created this{" "}
                  <span className="text-[#00229B] font-bold">Commit</span>{" "}
                  application and website.
                </p>
              </div>
            </div>

            {/* baris 3 */}
            <div className="flex flex-col w-full justify-center bg-blue">
              <div className="lg:w-2/3 text-2xl rounded-lg bg-[#E2EFFF] pb-8  mx-auto text-left leading-relaxed mb-10">
                <p className="px-10 mb-4  text-2xl  font-bold mx-auto text-left leading-relaxed text-[#00229B] pt-8">
                  Who are Team D?
                </p>
                <div className="mx-7 text-2xl rounded-lg bg-white pb-8  text-left leading-relaxed mb-10">
                  <p className="px-10  text-lg font-bold mx-auto leading-relaxed text-[#7A97FF] text-center pt-5">
                    UI UX Division
                  </p>
                </div>
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
              © 2022 - Commit. All Rights Reserved
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;