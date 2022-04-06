import { Button1 } from '../../components/button';
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn } from 'formik';
import * as Yup from 'yup';
import { useForgotDispatcher } from '../../redux/reducers/forgot';
const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const initialValues = {
  email: '',
  password: '',
};

const ForgotContainer = () => {
  const {
    forgot: { loading },
    doForgot,
  } = useForgotDispatcher();

  const onSubmit = async (values) => {
    try {
      const payload = {
        identifier: values.email,
        password: values.password,
      };
      await doForgot(payload);
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
          <div className='flex justify-end items-end pr-40'>
          <img src="png_signup login.png" className=" w-8/12 max-w-fit "></img>
          </div>
        </div>

        {/* section kanan */}
        <div className="w-full h-full bg-white flex flex-col justify-center ">
          <div className="border border-gray-300 w-4/5 h-fit flex flex-col justify-center rounded-xl shadow-lg mx-auto ">
            <form className="max-w-[511px] max-h-[462px] w-full mx-auto bg-white rounded-2xl p-[35px] pb-3 " onSubmit={handleSubmit}>
              <img src="Logo Header.svg" className=" px-2 pb-4 w-8/12 max-w-fit mx-auto"></img>
              <h2 className="text-2xl text-[#27272E] font-bold text-center">Forgot Password</h2>
              <div className="flex flex-col text-black text-sm mt-7 py-2  font-semibold">
                <label>OTP (Verification Code)</label>
                <input className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none" type="text" placeholder="Enter your email here.."  onChange={handleChange} 
                onBlur={handleBlur} />
              </div>

              <Button1 type="submit" label={loading ? 'Please wait...' : 'Send OTP'} />
              <br />
              <br />
            </form>
          </div>
        </div>
      </main>
    </NoAuthProvider>
  );
};

export default ForgotContainer;
