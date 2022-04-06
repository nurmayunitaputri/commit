import Input from '../../components/input';
import { Button1 } from "../../components/button"
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn } from 'formik';
import * as Yup from 'yup';
import { useLoginDispatcher } from '../../redux/reducers/login';
const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginContainer = () => {
  const {
    login: { loading },
    doLogin,
  } = useLoginDispatcher();

  const onSubmit = async (values) => {
    try {
      const payload = {
        identifier: values.email,
        password: values.password,
      };
      await doLogin(payload);
      window.location.href = '/';
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
    <NoAuthProvider>
      <main className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        {/* section kiri */}
        <div className="w-full h-full bg-blue-200 flex flex-col justify-center ">
          <div className="px-4 text-5xl font-bold w-1/2 text-[#333333] items-center justify-center ">Welcome to your next growth opportunity.</div>
          <div className="ml-20 text-xs w-72 mt-9">Get connected with expert, freelance and professional jobs that are suited just for you and meet your prerequisite.</div>
          {/* <img src={loginImg} className='w-44 h-56 flex justify-end'></img> */}
        </div>
        {/* section kanan */}
        <div className="w-full h-full bg-white flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto border border-zinc-900 bg-white rounded-2xl p-[35px]">
            <h2 className="text-2xl text-[#27272E] font-bold text-center">Log In</h2>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label>Email</label>
              <input className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none" type="text" placeholder="Enter your email here" />
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label>Password</label>
              <Input className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none" type="text" placeholder="Enter your password"/>
            </div>
            <div>
              <a href="../registration" className="text-[#00229B]">
                Forgot Password?
              </a>
            </div>
            <Button1 type="submit" label={loading ? 'Please wait...' : 'Login'} />
            <div className="flex justify-center">
              <a href="#" className=" ml-2 text-[#00229B]">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </main>
    </NoAuthProvider>
  );
};

export default LoginContainer;
