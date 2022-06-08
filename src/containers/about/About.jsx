import { NavBar } from "../../components/navbar";
import { NavbarGuest } from "../../components/navbarguest";
import { getUser } from "../../helpers/auth";
const AboutContainer = () => {
  const user = getUser();
  return (
    <div>
      {user === null ? <NavbarGuest /> : <NavBar />}
      <div className="bg-white text-[#00229B] body-font overflow-hidden">
        <div className="container px-5 pt-1 mx-auto">
          <div className="flex flex-col text-center w-full mx-auto pt-10 mb-2">
            <div className=" px-2 pb-10 w-8/12 max-w-fit mx-auto"></div>
            <p className="lg:w-2/3 text-5xl font-bold mx-auto text-left leading-relaxed text-[#00229B] pt-1 pb-7">
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
                  <p className="px-10  text-lg font-bold mx-auto leading-relaxed text-[#7A97FF] text-center pt-5">UI UX Division</p>
                  <div className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                      <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="Vanessa.jpg"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Vanessa Alexandra</p>
                              <a href='https://www.instagram.com/vanessaalxndra/' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                              <a href='https://www.linkedin.com/in/vanessa-alexandra-175a4522a/' className="mb-4 text-base ">LinkedIn</a>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="Shinta.jpg"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Shinta Dewi Pramesti</p>
                              <a href='https://www.instagram.com/shinndp/' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                            </div>
                          </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="Rafli.jpeg"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Rafli Adiansyah</p>
                              <a href='https://instagram.com/rafliadiansyh ' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                              <a href='https://www.linkedin.com/in/rafliadiansyah/' className="mb-4 text-base ">LinkedIn</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* DIvisi Backend */}
                <div className="mx-7 text-2xl rounded-lg bg-white pb-8  text-left leading-relaxed mb-10">
                  <p className="px-10  text-lg font-bold mx-auto leading-relaxed text-[#7A97FF] text-center pt-5">Back-End Division</p>
                  <div className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                      <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="Indra.jpg"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Indra Hasan</p>
                              <a href='https://www.instagram.com/indrahsan/' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                              <a href='https://www.linkedin.com/in/indra-hasan-3b534a19b/' className="mb-4 text-base ">LinkedIn</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Divisi Front-End */}
                <div className="mx-7 text-2xl rounded-lg bg-white pb-8  text-left leading-relaxed mb-10">
                  <p className="px-10  text-lg font-bold mx-auto leading-relaxed text-[#7A97FF] text-center pt-5">Front-End Division</p>
                  <div className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                      <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="Nurma.jpg"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Nurma Yunita Putri</p>
                              <a href='https://www.instagram.com/putri.nyp/' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                              <a href='https://www.linkedin.com/in/nurma-yunita-putri-a682b2226/' className="mb-4 text-base ">LinkedIn</a>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="sheilla.jpg"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Sheilla Sara Yasmine</p>
                              <a href='https://www.instagram.com/sheilayasmine/' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                              <a href='https://www.linkedin.com/in/sheila-yasmine-3552b1226/' className="mb-4 text-base ">LinkedIn</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Divisi Android */}
                <div className="mx-7 text-2xl rounded-lg bg-white pb-8  text-left leading-relaxed mb-10">
                  <p className="px-10  text-lg font-bold mx-auto leading-relaxed text-[#7A97FF] text-center pt-5">Android Division</p>
                  <div className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                      <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="no_profile.png"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Ma'ruf Rahman</p>
                              <a href='https://www.instagram.com/maruf.rahmann/' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                              <a href=' https://www.linkedin.com/in/marufrahmanofficial/' className="mb-4 text-base ">LinkedIn</a>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="Desinta.jpg"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Desinta Dewi Ramadani</p>
                              <a href='https://www.instagram.com/desinta.dr/' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                              <a href='https://www.linkedin.com/in/desintadewir/' className="mb-4 text-base ">LinkedIn</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Divisi QA */}
                <div className="mx-7 text-2xl rounded-lg bg-white pb-8  text-left leading-relaxed mb-10">
                  <p className="px-10  text-lg font-bold mx-auto leading-relaxed text-[#7A97FF] text-center pt-5">Quality Assurance Division</p>
                  <div className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                      <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="Aul.jpg"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Zahrotul Aulia</p>
                              <a href='https://instagram.com/zahrotulaulia_' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                            </div>
                          </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="Christopher.JPG"></img>
                            <div className="flex-grow sm:pl-8">
                              <p className="title-font font-medium text-base text-gray-900">Christopher Ekaputra</p>
                              <a href='https://www.instagram.com/c_ekptr/' className="text-gray-500 text-base mb-3">Instagram</a>
                              <br />
                              <a href='https://www.linkedin.com/in/christopher-ekaputra-88645b1b6/' className="mb-4 text-base ">LinkedIn</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
