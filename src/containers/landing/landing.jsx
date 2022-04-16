import { useRouter } from 'next/router';
import { Input, Input2 } from '../../components/input';
import { Button1 } from '../../components/button';
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn } from 'formik';
import * as Yup from 'yup';
import { useLandingDispatcher } from '../../redux/reducers/landing';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import MainLayout from '../../components/layout';

const validationSchema = Yup.object({
  email: Yup.string().required('diperlukan Email').email('Email tidak valid'),
  password: Yup.string().required('diperlukan kata sandi').min(6, 'minimal 6 karakter'),
});

const initialValues = {
  email: '',
  password: '',
};

const LandingContainer = () => {
  const { push } = useRouter();
  const {
    landing: { loading },
    doLanding,
  } = useLandingDispatcher();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
      await doLanding(payload);
      // push(`/homepage`);
      // window.location.href = '/';
    } catch (error) {
      alert(error);
    }
  };

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  console.log(errors);

  return (
    <NoAuthProvider>
      <MainLayout>
        <main>
          {/* section 1 */}
          <section className="text-gray-600 body-font bg-white grid grid-cols-1 sm:grid-cols-2 w-full py-5">
            <div className="w-full h-full bg-white flex flex-col justify-center ">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-6xl text-6xl mb-4  text-[#272D4E] font-[700] ">Welcome to your next growth opportunity</h1>
                  <p className="mb-8 pt-7 text-lg leading-relaxed font-normal w-fit">Stands for Community IT, here we'll make it easier for you to learn or share new things about Product Design and Development.</p>
                </div>
              </div>
            </div>
            <div className="bg-white flex justify-center items-center">
              <div className="w-11/12 ">
                <img src="LandingPage.png" className=""></img>
              </div>
            </div>
          </section>

          {/* section 2 */}
          <section className="text-gray-600 body-font bg-[#E2EFFF] w-full">
            <div className="flex justify-center items-center ">
              <div className="pt-9 text-5xl font-bold title-font text-[#272D4E] mt-5">It’s Your Chance ! </div>
            </div>
            <div className=" flex justify-center items-center  ">
              <div className="w-10/12 ">
                <div className="text-xl font-normal text-center text-[#333333] mt-5 ">
                  Not just sharing and learning, with My Chance we will find you your best partner. Commit will link you with opportunities you want with at companies with similar interests. Get connected with expert, freelance and
                  professional jobs that are suited just for you and meet your prerequisite.
                </div>
              </div>
            </div>
            <div className="container mx-auto flex px-5 pb-24 pt-10  md:flex-row flex-col items-center">
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-[263] w-[375] overflow-hidden">
                    <img src="ImageLandingPage_Learn.png" className=" "></img>
                  </div>
                  <h2 className="text-xl font-medium title-font text-[#272D4E] mt-5">Learn</h2>
                  <p className="text-base leading-relaxed mt-2 text-[#333333]">Work and Study? No Problem! We help you find the most suitable Bootcamp or Course for your schedule </p>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6 pt-10">
                  <div className="rounded-lg h-[300] w-[385]  overflow-hidden">
                    <img src="ImageLandingPage_Intern.png" className="  "></img>
                  </div>
                  <h2 className="text-xl font-medium title-font text-[#272D4E]  mt-5">Internship</h2>
                  <p className="text-base leading-relaxed mt-2 text-[#333333]">Are one off gigs your preference? CommIT helps you find internship opportunity of your choice</p>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6 pt-24">
                  <div className="rounded-lg h-[300] w-[385] overflow-hidden">
                    <img src="ImageLandingPage_Job.png" className=" "></img>
                  </div>
                  <h2 className="text-xl font-medium title-font text-[#272D4E]  mt-5">Job</h2>
                  <p className="text-base leading-relaxed mt-2 text-[#333333]">Join top companies anywhere in the world as a full time employee </p>
                </div>
              </div>
            </div>
          </section>

          {/* section 3 */}
          <section className="text-gray-600 body-font bg-white w-full">
            <div className="flex justify-center items-center ">
              <div className="w-7/12 pt-9 text-5xl font-bold title-font text-center text-black mt-5">One Community to Increase Your Knowledge </div>
            </div>
            <div className=" flex justify-center items-center  ">
              <div className="w-10/12 ">
                <div className="text-base font-normal text-center items-center text-[#333333] mt-5 ">
                Based on our main topics below, do you see the one you interested in ?
                </div>
              </div>
            </div>
            <div className="container mx-auto flex px-5 pb-24 pt-10 md:flex-row flex-col items-center">
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-[263] w-[375] overflow-hidden">
                    <img src="ImageLandingPage_Learn.png" className=" "></img>
                  </div>
                  <h2 className="text-xl font-medium title-font text-[#272D4E] mt-5">Learn</h2>
                  <p className="text-base leading-relaxed mt-2 text-[#333333]">Work and Study? No Problem! We help you find the most suitable Bootcamp or Course for your schedule </p>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6 ">
                  <div className="rounded-lg h-[300] w-[385]  overflow-hidden">
                    <img src="ImageLandingPage_Intern.png" className="  "></img>
                  </div>
                  <h2 className="text-xl font-medium title-font text-[#272D4E]  mt-5">Internship</h2>
                  <p className="text-base leading-relaxed mt-2 text-[#333333]">Are one off gigs your preference? CommIT helps you find internship opportunity of your choice</p>
                </div>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-[300] w-[385] overflow-hidden">
                    <img src="ImageLandingPage_Job.png" className=" "></img>
                  </div>
                  <h2 className="text-xl font-medium title-font text-[#272D4E]  mt-5">Job</h2>
                  <p className="text-base leading-relaxed mt-2 text-[#333333]">Join top companies anywhere in the world as a full time employee </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </MainLayout>
    </NoAuthProvider>
  );
};

export default LandingContainer;
