import { NavBar } from '../../components/navbar/Navbar';
import { useRouter } from 'next/router';
import { Input } from '../../components/input';
import { Button1 } from '../../components/button';
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn } from 'formik';
import * as Yup from 'yup';
import { useSimplerDispatcher } from '../../redux/reducers/simpler';
import { toast } from 'react-toastify';
const validationSchema = Yup.object({
  email: Yup.string().required().email(),
});

const initialValues = {
  email: '',
};

const SimplerContainer = () => {
  const { push } = useRouter();
  const {
    simpler: { loading },
    doSimpler,
  } = useSimplerDispatcher();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const payload = {
        email: values.email,
      };
      await doSimpler(payload);
      localStorage.setItem('email', values.email);
      push(`/sendOtp`);
    } catch (error) {
      alert(error);
    }
  };

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <NavBar />
      <div className="bg-blue-200 text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 mt-8 text-gray-900">Welcome to Simpler ! </h1>
            <img src="Group 383.png" className=" pt-[50px] px-2 pb-6 w-8/12 max-w-fit mx-auto"></img>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Simpler will make everything simpler for you !</p>
          </div>
          <div className="flex flex-col w-4/6 justify-center">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">• Premium contents or posts from Commit and Verified Users</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">• IT contents with non-technical language provide by Commit to make it easier for you to understand</p>
          </div>

          {/* 3 kotak div */}
          {/* kotak 1 */}
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full drop-shadow-2xl">
              <div className="h-full p-6 rounded-[34px] border-2 bg-white border-gray-300 flex flex-col relative overflow-hidden">
                <div className=" flex justify-end mb-3">
                  <div className="w-3/6 inline-block text-sm px-6 py-2 font-bold leading-none border rounded-full text-[#00229B] border-[#00229B] bg-[#00229B] text-center mt-4 lg:mt-0">Regular</div>
                </div>
                <div className="text-3xl  pb-4 mb-4 border-b border-gray-200 leading-none text-[#7A97FF]">
                  IDR 10.000 <span className="text-lg text-#7A97FF]">/Month</span>
                </div>
                <div className="text-xl  pb-4 mb-4 text-[#7A97FF]">1 Month</div>
                <p className="flex items-center  mb-2 text-[#7A97FF]">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Premium contents
                </p>
                <p className="flex items-center text-[#7A97FF] mb-10 ">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  IT contents with Non - Technical Language
                </p>

                <div className="w-full h-9 inline-block text-base px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-8 lg:mt-0 ">Regular</div>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
            {/* kotak 2 */}
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full drop-shadow-2xl">
              <div className="h-full p-6 rounded-[34px] border-2 bg-white border-gray-300 flex flex-col relative overflow-hidden">
                <div className=" flex justify-end mb-3">
                  <div className="w-3/6 inline-block text-sm px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-4 lg:mt-0">Regular</div>
                </div>
                <div className="text-3xl pb-4 mb-4 border-b border-gray-200 leading-none text-[#7A97FF]">
                  IDR 10.000 <span className="text-lg text-#7A97FF]">/Month</span>
                </div>
                <div className="text-xl  pb-4 mb-4 text-[#7A97FF]">1 Month</div>
                <p className="flex items-center mb-2 text-[#7A97FF]">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Premium contents
                </p>
                <p className="flex items-center text-[#7A97FF] mb-10 ">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  IT contents with Non - Technical Language
                </p>

                <div className="w-full h-9 inline-block text-base px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-8 lg:mt-0 ">Regular</div>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
            {/* kotak 3 */}
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full drop-shadow-2xl">
              <div className="h-full p-6 rounded-[34px] border-2 bg-white border-gray-300 flex flex-col relative overflow-hidden">
                <div className=" flex justify-end mb-3">
                  <div className="w-3/6 inline-block text-sm px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-4 lg:mt-0">Regular</div>
                </div>
                <div className="text-3xl pb-4 mb-4 border-b border-gray-200 leading-none text-[#7A97FF]">
                  IDR 10.000 <span className="text-lg text-#7A97FF]">/Month</span>
                </div>
                <div className="text-xl  pb-4 mb-4 text-[#7A97FF]">1 Month</div>
                <p className="flex items-center mb-2 text-[#7A97FF]">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Premium contents
                </p>
                <p className="flex items-center text-[#7A97FF] mb-10 ">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  IT contents with Non - Technical Language
                </p>

                <div className="w-full h-9 inline-block text-base px-6 py-2 leading-none border rounded-full text-white border-[#00229B] bg-[#00229B] text-center  mt-8 lg:mt-0 ">Regular</div>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplerContainer;