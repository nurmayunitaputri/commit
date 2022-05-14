import { Button1 } from '../../components/button';
import { useRouter } from 'next/router';
import { Input2 } from '../../components/input';
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn } from 'formik';
import * as Yup from 'yup';
import { useConfirmOtpDispatcher } from '../../redux/reducers/confirmOtp';
const validationSchema = Yup.object({
  newPassword: Yup.string().required().min(6, "Password must be at least 6 characters and must contain number & character") .matches(/(?=.*[0-9])/, /(?=.*\d)/, "Password must be at least 6 characters and must contain number & character"),
  confirmNewPassword: Yup.string().required().min(6, "Password must be at least 6 characters and must contain number & character") .matches(/(?=.*[0-9])/, /(?=.*\d)/, "Password must be at least 6 characters and must contain number & character"),
});

const initialValues = {
  newPassword: '',
  confirmNewPassword: '',
};

const ForgotContainer = () => {
  const { push } = useRouter();
  const {
    confirmOtp: { loading },
    doConfirmOtp,
  } = useConfirmOtpDispatcher();

  const onSubmit = async (values) => {
    try {
      const payload = {
        email: localStorage.getItem('email'),
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword,
      };
      await doConfirmOtp(payload);
      push(`/finishOtp`);
      console.log(payload)
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
        <div className="w-full h-full bg-white flex flex-col justify-center ">
          <div className="border border-gray-300 w-4/5 h-fit flex flex-col justify-center rounded-xl shadow-lg mx-auto ">
            <form className="max-w-[511px] max-h-[462px] w-full mx-auto bg-white rounded-2xl p-[35px] pb-3 " onSubmit={handleSubmit}>
              <img src="Logo Header.svg" className=" px-2 pb-4 w-8/12 max-w-fit mx-auto"></img>
              <h2 className="text-2xl text-[#27272E] font-bold text-center">Reset Your Password</h2>
              <div className="flex flex-col text-sm text-black font-semibold mt-3 pt-2 pb-4">
                New Password
                {/* {getIn(touched, 'password') && getIn(errors, 'password') && (
                  <div className="flex items-center justify-start text-xs text-white font-light" data-testid="error-password">
                    <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                    {getIn(errors, 'password')}
                  </div>
                )} */}
                <Input2 name="newPassword" type="newPassword" placeholder="Create Your New Password" onChange={handleChange} onBlur={handleBlur} dataTestId="input-newPassword" />
              </div>

              <div className="flex flex-col text-sm text-black font-semibold mt-3 pt-2 pb-4">
                Confirm Password
                {/* {getIn(touched, 'password') && getIn(errors, 'password') && (
                  <div className="flex items-center justify-start text-xs text-white font-light" data-testid="error-password">
                    <ExclamationCircleIcon className="w-5 h-5 text-[#FF8181] pr-1" />
                    {getIn(errors, 'password')}
                  </div>
                )} */}
                <Input2 name="confirmNewPassword" type="confirmNewPassword" placeholder="Confirm Your New Password Here" onChange={handleChange} onBlur={handleBlur} dataTestId="input-confirmNewPassword" />
              </div>

              <Button1 type="submit" label={loading ? 'Reset' : 'Reset'} />
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
