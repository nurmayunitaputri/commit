import Input from '../../components/input';
import { Button1 } from "../../components/button"
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn } from 'formik';
import * as Yup from 'yup';
import { useSignupDispatcher } from '../../redux/reducers/signup';
const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
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
        <div class="grid grid-cols-3 gap-4 text-[#4E4D4F] items-center ">
              <div class="flex flex-col font-bold  py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center">
              <a href="#" className=" text-[#00229B]">
                UI/UX +
              </a>
              </div>
              <div class="flex flex-col font-bold py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center">
              <a href="#" className=" text-[#00229B]">
                ANDROID+
              </a>
              </div>
              <div class="flex flex-col font-bold  py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center ">
              <a href="#" className=" text-[#00229B]">
                FE- Front End+
              </a>
              </div>
              <div class="flex flex-col font-bold  py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center">
              <a href="#" className=" text-[#00229B]">
                BE- Back End+
              </a>
              </div>
              <div class="flex flex-col font-bold  py-2 rounded-lg bg-[#E2EFFF] border border-zinc-100 items-center">
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
            <Button1 type="submit" label={loading ? 'Please wait...' : 'Next'} />
            <div className="flex justify-center">
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

export default SignupContainer;
