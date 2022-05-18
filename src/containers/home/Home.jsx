import { useRouter } from "next/router";

import { AuthProvider } from "../../providers/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MenuIcon } from "@heroicons/react/outline";
import { useHomeDispatcher } from "../../redux/reducers/home";
import { useEffect, useState } from "react";
import { PostInput } from "./PostInput";
import { PostsList } from "./PostsList";
import { Profile } from "./Profile";

const validationSchema = Yup.object({
  email: Yup.string().required("diperlukan Email").email("Email tidak valid"),
  password: Yup.string()
    .required("diperlukan kata sandi")
    .min(6, "minimal 6 karakter"),
  // name: Yup.string().required(''),
  // phone_number: Yup.number('diperlukan phone number').max(11, 'maximal 11'),
  // domicile: Yup.string().required(''),
  // gender: Yup.string().required(''),
});

const initialValues = {
  email: "",
  password: "",
  // name: '',
  // phone_number: '',
  // domicile: '',
  // gender: ''
};

const Home = () => {
  const { push } = useRouter();
  const {
    home: { loading },
    doHome,
  } = useHomeDispatcher();
  const [name, setName] = useState("");

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const payload = {
        email: values.email,
        password: values.password,
        // name: values.name,
        // phone_number: values.phone_number,
        // domicile: values.domicile,
        // gender: values.gender,
      };
      await doHome(payload);
      // push(``);
    } catch (error) {
      alert(error);
    }
  };

  const handleOnLoggedOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    push("/");
  };

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues,
      validationSchema,
      onSubmit,
    }
  );
  console.log(errors);

  useEffect(() => {
    const { fullname } = JSON.parse(localStorage.getItem("user"));
    setName(fullname);
  }, []);

  return (
    <AuthProvider>
      <div className="bg-blue-200 min-h-screen">
        <nav className="h-max fixed left-0 right-0 w-full shadow-md bg-white z-50">
          <div className="container mx-auto py-3 px-3 lg:px-0">
            <div className="flex justify-between items-start">
              <div className="flex text-white ">
                <img
                  src="Logo Header.svg"
                  className=" w-11/12 max-w-fit mx-auto pr-10"
                ></img>
              </div>
              <div className="visible lg:invisible transition-all">
                <button type="button" className="border rounded-lg p-2">
                  <MenuIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="w-full block lg:flex ml-auto items-center ">
                <div className="input-group responsive text-black text-sm xl:w-80 flex items-center">
                  <input
                    type="search"
                    className="pr-3 pl-10 form-control relative min-w-0 items-center block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg p-[20] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute mb-0 ml-3 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  {/* <div className="border-l-4 mr-2">
                            </div> */}
                </div>
                <div className="text-sm flex items-center pt-2 pl-10">
                  <a
                    href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-gray-400 mr-11 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-3 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <p className="text-grey-700 flex items-center ml-1">
                      {" "}
                      Home{" "}
                    </p>
                  </a>
                  <a
                    href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-gray-400 mr-11 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <p className="text-grey-700 flex items-center ">
                      {" "}
                      Simpler{" "}
                    </p>
                  </a>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
                  <div className="responsive text-black text-sm "></div>
                </div>
                <div
                  className="dropdown-toggle hidden-arrow pt-2 mr-2 "
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  hallo, {name}
                </div>
                <div className="relative pl-3">
                  <button className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                    <img
                      className="h-full w-full object-cover"
                      src="no_profile.png"
                      alt="avatar"
                    ></img>
                  </button>
                </div>
                <div className="relative pl-10" onClick={handleOnLoggedOut}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Container atas kiri */}
        <div className="fixed rounded-lg left-0 h-max w-[20%] ml-[3.2rem] border-transparent text-center invisible lg:visible pt-[80px]">
          <Profile />

          {/* Container bawah kiri  */}
          <div className="fixed rounded-lg left-0 w-[20%] ml-[3.2rem] border-transparent text-center invisible lg:visible pt-7">
            <div className="flex flex-col rounded-lg justify-between">
              <form className="w-full mx-auto bg-white pb-[10px] rounded-lg items-center">
                <h4 className="text-1xl font-bold text-[#333333] pt-[7px] flex justify-start ml-[20px]">
                  Filter
                </h4>
                <p className="text-[12px] text-gray flex justify-start ml-[20px] pb-[7px]">
                  Filter Your Post by Tags
                </p>
                <div className="grid grid-cols-2 gap-2 items-center px-2 ">
                  <div className="flex flex-col text-[10px] font-bold py-2 rounded-full bg-white border border-[#00229B] items-center">
                    <a href="#" className="text-[#00229B]">
                      UI/UX
                    </a>
                  </div>
                  <div className="flex flex-col text-[10px] font-bold py-2 rounded-full bg-white  border border-[#00229B] items-center">
                    <a href="#" className="text-[#00229B]">
                      Android
                    </a>
                  </div>
                  <div className="flex flex-col text-[10px] font-bold py-2 rounded-full bg-white  border border-[#00229B] items-center">
                    <a href="#" className="text-[#00229B]">
                      Frontend
                    </a>
                  </div>
                  <div className="flex flex-col text-[10px] font-bold py-2 rounded-full bg-white  border border-[#00229B] items-center">
                    <a href="#" className="text-[#00229B]">
                      Backend
                    </a>
                  </div>
                  <div className="flex flex-col text-[10px] font-bold py-2 col-span-2 rounded-full bg-white border border-[#00229B] items-center">
                    <a href="#" className="text-[#00229B]">
                      Quality Assurance
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Container atas kanan */}
        <div className="fixed rounded-lg right-0 h-max w-[20%] mr-[3.2rem] border-transparent text-center invisible lg:visible pt-[90px]">
          <div className="flex flex-col rounded-lg justify-between">
            <form className="w-full mx-auto bg-white pb-[10px] rounded-lg items-center">
              <p className="text-[14px] font-bold text-[#333333] pt-[20px] flex justify-start ml-[20px]">
                People you may follow
              </p>
              <div className="flex items-start ml-3 pt-3 text-sm ">
                <button className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                  <img
                    className="h-full w-full object-cover"
                    src="cewek.jpg"
                    alt="avatar"
                  ></img>
                </button>
                <p className="ml-[5px] text-[12px] font-bold pr-[3px]">
                  Jen Conor
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <button className="block overflow-hidden px-[3%] py-[2%] text-[12px] rounded-lg ml-[33px] bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-600 ">
                  Follow
                </button>
              </div>
              {/* <p className="text-blue-500 text-[10px] pr-10 mb-20">
                            Quality Assurance
                      </p>  */}
              <div className="flex items-start ml-3 pt-2 text-sm ">
                <button className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                  <img
                    className="h-full w-full object-cover"
                    src="cewe.jpg"
                    alt="avatar"
                  ></img>
                </button>
                <p className="ml-[5px] text-[12px] font-bold pr-[3px]">
                  Keylie Smith
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <button className="block overflow-hidden px-[3%] py-[2%] text-[12px] rounded-lg ml-5 bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-600">
                  Follow
                </button>
              </div>
              <div className="flex items-start ml-3 pt-2 text-sm ">
                <button className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                  <img
                    className="h-full w-full object-cover"
                    src="cowo.jpg"
                    alt="avatar"
                  ></img>
                </button>
                <p className="ml-[5px] text-[12px] font-bold pr-[3px]">
                  Lebron James
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <button className="block overflow-hidden px-[3%] py-[2%] text-[12px] rounded-lg ml-[10px] bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-600">
                  Follow
                </button>
              </div>
            </form>
          </div>

          {/* container tengah kanan */}
          <div className="fixed rounded-lg right-0 h-max w-[20%] mr-[3.2rem] border-transparent text-center invisible lg:visible pt-2">
            <div className="flex flex-col rounded-lg justify-between">
              <form className="w-full mx-auto bg-white pb-[10px] rounded-lg items-center">
                <img
                  className="h-full w-full object-cover"
                  src="Image_Upgrade Premium.png"
                  alt="avatar"
                ></img>
              </form>
            </div>
          </div>

          {/* Container bawah kanan */}
          <div className="fixed bg-blue-200 bottom-0 right-0 h-30 w-[20%] mr-[3.2rem] border-transparent mb-7 invisible lg:visible">
            <div className="grid grid-cols-2 gap-2 px-2 text-[15px]">
              <a href="#" className="text-blue-800 text-left">
                Help
              </a>
              <a href="#" className="text-blue-800 text-left text-semibold">
                Simpler
              </a>
              <a href="#" className="text-blue-800 text-left text-semibold">
                About Us
              </a>
              <a href="#" className="text-blue-800 text-left text-semibold">
                Contact Us
              </a>
              <a href="#" className="text-blue-800 text-left text-semibold">
                My Chance
              </a>
              <a href="#" className="text-blue-800 text-left text-semibold">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-800 text-left text-semibold">
                Premium
              </a>
              <a
                href="https://g.co/kgs/sqLcsn"
                className="text-blue-800 text-left text-semibold"
              >
                Playstore
              </a>
            </div>
          </div>
        </div>

        {/* Postingan */}
        <div className="w-full h-[30%] lg:w-[50%] mx-auto space-y-3 pt-20">
          <div className="border-transparent  rounded-lg ">
            <div className="min-h-[15rem] text-black rounded-lg p-2">
              <PostInput />
            </div>
          </div>

          <PostsList />
        </div>
      </div>
    </AuthProvider>
  );
};

export default Home;
