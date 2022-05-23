import { useRouter } from "next/router";
import { NavBar } from "../../components/navbar/Navbar";
import { AuthProvider } from "../../providers/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MenuIcon } from "@heroicons/react/outline";
import { useHomeDispatcher } from "../../redux/reducers/home";
import { useEffect, useState } from "react";
import { PostInput } from "./PostInput";
import { PostsList } from "./PostsList";
import { Profile } from "./Profile";
import { SuggestedPeople } from "./SuggestedPeople";
import { Footer } from "../../components/footer";

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
        <NavBar />

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
          <SuggestedPeople />

          {/* container tengah kanan */}
          <div className="fixed rounded-lg right-0 h-max w-[20%] mr-[3.2rem] border-transparent text-center invisible lg:visible pt-2">
            <div className="flex flex-col rounded-lg justify-between">
              <form className="w-full mx-auto bg-blue-200 pb-[10px] rounded-lg items-center">
                <div className=" flex justify-center items-center py-16 ">
                  <a
                    href="../signup"
                    className="inline-block border-1 border-[#00229B] text-sm px-6 py-2 leading-none border rounded-lg bg-[#00229B] w-[225px] font-semibold text-center h-[55px] pt-4 text-white mt-4 lg:mt-0 "
                  >
                    Upgrade Now
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Container bawah kanan */}
          <Footer />
        </div>

        {/* Postingan */}
        <div className="w-full h-[30%] lg:w-[50%] mx-auto space-y-2 pt-20">
          <div className="border-transparent rounded-lg">
            <div className="min-h-[5rem] text-black rounded-lg p-2">
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
