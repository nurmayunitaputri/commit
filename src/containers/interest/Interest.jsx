import { Input, Input2 } from '../../components/input';
import { Button1 } from '../../components/button';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn } from 'formik';
import * as Yup from 'yup';
import { useInterestDispatcher } from '../../redux/reducers/interest';

const validationSchema = Yup.object({
  email: Yup.string().required('diperlukan Email').email('Email tidak valid'),
  password: Yup.string().required('diperlukan kata sandi').min(6, 'Kata sandi gunakan 6-10 karakter, tanpa spasi').max(10, 'Kata sandi gunakan 6-10 karakter, tanpa spasi').matches(/^\S+$/, 'Kata sandi gunakan 6-10 karakter, tanpa spasi'),
});

const initialValues = {
  email: '',
  password: '',
};

const InterestContainer = () => {
  const {
    interest: { loading },
    doInterest,
  } = useInterestDispatcher();

  const onSubmit = async (values) => {
    try {
      const payload = {
        identifier: values.email,
        password: values.password,
      };
      await doInterest(payload);
      window.location.href = '/';
    } catch (error) {
      alert(error);
    }
  };

  //   const submitLogin = await callAPI({
  //     url: '/posts',
  //     method: 'post',
  //     data: payload,
  //     headers: {
  //       Authorization: Bearer ${getJwt()},
  //     },
  //   });
  //   if (submitLogin.status === 200) {
  //     setLoading(false);
  //     alert('Create posts success!');
  //     push('/Homepage');
  //   }
  // };

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <NoAuthProvider>
      <main className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        {/* section kiri */}
        <div className="w-full h-full bg-blue-200 flex flex-col justify-center bg-cover bg-left "
              style={{
                backgroundImage: `url('Background Login Sign Up.svg')`,
              }}
            >
              <img src="Logo Header.svg" className="px-20 py-20 w-12/12 max-w-fit flex justify-items-end "></img>
          <div className="px-20 text-5xl font-bold w-4/5 text-[#333333] items-center justify-center">Welcome to your next growth opportunity.</div>
          <div className="px-20 text-sm w-3/4 mt-9">Get connected with expert, freelance and professional jobs that are suited just for you and meet your prerequisite.</div>
          <div className='flex justify-end items-end pr-40'>
          <img src="png_signup login.png" className="w-8/12 max-w-fit"></img>
          </div>
        </div>
        {/* section kanan */}
        <div className="w-full h-full bg-white flex flex-col justify-center">
            <form className="max-w-[480px] w-full mx-auto border bg-white rounded-2xl p-[20px]">
            <h2 className="text-2xl text-[#27272E] font-bold text-center">Choose your interest</h2>
            <p className="text-1xl text-[#27272E] text-center p-[10px]">One more step and you're ready to go!</p>
          <div className='flex justify-center items-center pr-70'>
          <img src="svg_interest page.svg" className="w-8/12 max-w-fit"></img>
          </div>
        <div className="grid grid-cols-3 gap-4 text-[#4E4D4F] items-center ">
              <div className="flex flex-col font-bold  py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center">
              <a href="#" className=" text-[#00229B]">
                UI/UX +
              </a>
              </div>
              <div className="flex flex-col font-bold py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center">
              <a href="#" className=" text-[#00229B]">
                ANDROID+
              </a>
              </div>
              <div className="flex flex-col font-bold  py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center ">
              <a href="#" className=" text-[#00229B]">
                FE- Front End+
              </a>
              </div>
              <div className="flex flex-col font-bold  py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center">
              <a href="#" className=" text-[#00229B]">
                BE- Back End+
              </a>
              </div>
              <div className="flex flex-col font-bold  py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center col-span-2">
              <a href="#" className=" text-[#00229B]">
                QA- Quality Assurance+
              </a>
              </div>
        </div>
            {/* <div className="flex flex-col text-[#4E4D4F] py-2">
              <label>Email</label>
              <input className="rounded-lg bg-[#E2EFFF] mt-2 p-2 border border-zinc-900 focus:bg-white focus:outline-[#2196F3]" type="text" placeholder="Enter your email here" />
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label>Password</label>
              <Input />
            </div> */}
            {/* <div>
              <a href="../registration" className="text-[#00229B]">
                Forgot Password?
              </a>
            </div> */}
            <div className="pb-20">
            </div>
            <Button1 type="submit" label={loading ? 'Please wait...' : 'Next'} />
            <div className="flex justify-center pb-8">
              <p> already have an account?</p>
              <a href="" className=" ml-2 text-[#00229B]">
                Login
              </a>
            </div>
          </form>
        </div>
      </main>

    </NoAuthProvider>
  );
};

export default InterestContainer;
