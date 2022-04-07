import { Input, Input2 } from '../../components/input';
import { Button1 } from '../../components/button';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn } from 'formik';
import * as Yup from 'yup';
import { useSignupDispatcher } from '../../redux/reducers/signup';

const validationSchema = Yup.object({
  email: Yup.string().required('diperlukan Email').email('Email tidak valid'),
  password: Yup.string().required('diperlukan kata sandi').min(6, 'Kata sandi gunakan 6-10 karakter, tanpa spasi').max(10, 'Kata sandi gunakan 6-10 karakter, tanpa spasi').matches(/^\S+$/, 'Kata sandi gunakan 6-10 karakter, tanpa spasi'),
});

const initialValues = {
  email: '',
  password: '',
};

const SignupContainer = () => {
  const {
    signup: { loading },
    doSignup,
  } = useSignupDispatcher();

  const onSubmit = async (values) => {
    try {
      const payload = {
        identifier: values.email,
        password: values.password,
      };
      await doSignup(payload);
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
      <main className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
        {/* section kiri */}
        <div
          className="w-full h-full bg-blue-200 flex flex-col justify-center bg-cover bg-left "
          style={{
            backgroundImage: `url('Background Login Sign Up.svg')`,
          }}
        >
          <img src="Logo Header.svg" className=" px-20 py-20 w-12/12 max-w-fit flex justify-items-end "></img>
          <div className="px-20 text-5xl font-bold w-4/5 text-[#333333] items-center justify-center ">Welcome to your next growth opportunity.</div>
          <div className="px-20 text-sm w-3/4 mt-9 pb-9">Get connected with expert, freelance and professional jobs that are suited just for you and meet your prerequisite.</div>
          <div className="flex justify-end items-end pr-40">
            <img src="png_signup login.png" className=" w-8/12 max-w-fit "></img>
          </div>
        </div>

        {/* section kanan */}
        <div className="w-full h-full bg-white flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto border bg-white rounded-2xl p-[20px]">
            <h2 className="text-2xl text-[#27272E] font-bold text-center">Create your account</h2>
            <p className="text-1xl text-[#27272E] text-center p-[10px]">its free and easy</p>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label>Full Name</label>
              <Input type="text" placeholder="Enter your name here" />
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label>Email</label>
              <Input type="text" placeholder="Enter your email here" />
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label>Domicile</label>
              <select className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none">
                <option hidden>Domicile</option>
                <option>Aceh</option>
                <option>Bali</option>
                <option>Bangka Belitung</option>
                <option>Banten</option>
                <option>Bengkulu</option>
                <option>Jawa Tengah</option>
                <option>Kalimantan Tengah</option>
                <option>Sulawesi Tengah</option>
                <option>Jawa Timur</option>
                <option>Kalimantan Timur</option>
              </select>
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label>Gender</label>
              <select className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none">
                <option hidden>Gender</option>
                <option>Female</option>
                <option>Male</option>
              </select>
              {/* <input className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none" type="text" placeholder="Select your option" /> */}
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label>Phone Number</label>
              <Input type="text" placeholder="Select your option" />
            </div>
            <div className="flexflex-col text-[#4E4D4F] py-2">
              <label>Password</label>
              <Input2 className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none" type="text" placeholder="Enter your password" />
            </div>
            <div className="text-xs text-[#27272E]">
              <p> Password must be at leat 6 characters and must contain number & letter.</p>
              {/* <a href="../registration" className="text-[#00229B]"> 
                Forgot Password? 
              </a> */}
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label className="inLine-flex items-center">
                <input type="checkbox" class="shadow checked:shadow-xl" />
                <span className="text-xs text-[#00229B]"> By Creating an account means you agree to the our Privacy Policy</span>
              </label>
            </div>
            <Button1 type="submit" label={loading ? 'Please wait...' : 'Sign Up'} />
            <div className="flex justify-center pt-3">
              <p> already have account?</p>
              <a href="../login" className=" ml-2 text-[#00229B]">
                Login
              </a>
            </div>
          </form>
        </div>
      </main>
    </NoAuthProvider>
  );
};

export default SignupContainer;
