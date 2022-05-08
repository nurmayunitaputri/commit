import { Button1 } from '../../components/button';
import Link from 'next/link';

const FinishOtpContainer = () => {
  return (
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
          <form className="max-w-[511px] max-h-[462px] w-full mx-auto bg-white rounded-2xl px-20 pb-3 ">
            <h2 className="text-2xl text-[#27272E] pt-[62px] font-bold text-center">Your password has been reseted succesfully</h2>
            <div className="text-center text-[14px] pt-[11px] ">Now you can Log In with your new password.</div>
            <img src="Logo Header.svg" className=" pt-[50px] px-2 pb-6 w-8/12 max-w-fit mx-auto"></img>

            <Link href="/login">
              <a className="inline-block px-6 text-center leading-none border  border-white lg:mt-0 mr-4 w-full py-3 mt-6 text-base bg-[#E2EFFF] text-[#00229B] hover:bg-[#00229B] hover:text-white font-semibold rounded-lg">
                Return to Log In
              </a>
              {/* <Button1 type="button" className="pb-20" label="Return to Log In" /> */}
            </Link>

            {/* <a href="../login" className="inline-block text-sm px-6 py-2 leading-none border rounded-lg bg-[#00229B] text-white border-white mt-4 lg:mt-0 mr-4">
                Sign Up
              </a> */}

            <br />
            <br />
          </form>
        </div>
      </div>
    </main>
  );
};

export default FinishOtpContainer;
