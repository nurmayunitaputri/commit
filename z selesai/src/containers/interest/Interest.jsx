import { Input, Input2 } from "../../components/input";
import { Button1 } from "../../components/button";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { NoAuthProvider } from "../../providers/auth";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import { useInterestDispatcher } from "../../redux/reducers/interest";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  interests: Yup.array().max(2, "Pilihan Interest maksimal 2"),
});

// const initialValues = {
//   // checkboxItem: '',
//   interest: '',

// };

const InterestContainer = () => {
  const {
    interest: { loading },
    doInterest,
  } = useInterestDispatcher();

  const onSubmit = async (values) => {
    try {
      const payload = {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
        name: localStorage.getItem("name"),
        phone_number: localStorage.getItem("phone_number"),
        domicile: localStorage.getItem("domicile"),
        gender: localStorage.getItem("gender"),
        interest: values.interests.join(","),
      };

      await doInterest(payload);
      window.location.href = "/login";
    } catch (error) {
      // @TODO
      toast(error);
    }
  };

  const { handleSubmit, handleBlur, handleChange, values, errors } = useFormik({
    initialValues: {
      // checkboxItem: [],
      interests: [],
    },
    validationSchema,
    onSubmit,
  });

  return (
    <NoAuthProvider>
      <main className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        {/* section kiri */}
        <div
          className="w-full h-full bg-blue-200 flex flex-col justify-center bg-cover bg-left "
          style={{
            backgroundImage: `url('Background Login Sign Up.svg')`,
          }}
        >
          <img
            src="Logo Header.svg"
            className="px-20 py-20 w-12/12 max-w-fit flex justify-items-end "
          ></img>
          <div className="px-20 text-5xl font-bold w-4/5 text-[#333333] items-center justify-center">
            Welcome to your next growth opportunity.
          </div>
          <div className="px-20 text-sm w-3/4 mt-9">
            Get connected with expert, freelance and professional jobs that are
            suited just for you and meet your prerequisite.
          </div>
          <div className="flex justify-end items-end pr-40">
            <img src="png_signup login.png" className="w-8/12 max-w-fit"></img>
          </div>
        </div>
        {/* section kanan */}
        <div className="w-full h-full bg-white flex flex-col justify-center">
          <form
            className="max-w-[480px] w-full mx-auto border bg-white rounded-2xl p-[20px]"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl text-[#27272E] font-bold text-center">
              Choose your interest
            </h2>
            <p className="text-1xl text-[#27272E] text-center p-[10px]">
              One more step and you're ready to go!
            </p>
            <div className="flex justify-center items-center pr-70">
              <img
                src="svg_interest page.svg"
                className="w-8/12 max-w-fit"
              ></img>
            </div>
            <div className="grid grid-cols-3 gap-4 text-[#4E4D4F] items-center ">
              <label
                className={`text-center cursor-pointer border border-zinc-200 p-3 rounded-lg text-[#00229B] items-center ${
                  values.interests.includes("frontend")
                    ? "bg-blue-700 text-white"
                    : "bg-transparent"
                }`}
              >
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="checkbox"
                  name="interests"
                  className="hidden"
                  value="frontend"
                />
                Frontend +
              </label>
              <label
                className={`text-center cursor-pointer border border-zinc-200 p-3 rounded-lg text-[#00229B] items-center ${
                  values.interests.includes("ui-ux")
                    ? "bg-blue-700 text-white"
                    : "bg-transparent"
                }`}
              >
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="checkbox"
                  name="interests"
                  className="hidden"
                  value="ui-ux"
                />
                UI/UX +
              </label>
              <label
                className={`text-center cursor-pointer border border-zinc-200 p-3 rounded-lg text-[#00229B] items-center ${
                  values.interests.includes("backend")
                    ? "bg-blue-700 text-white"
                    : "bg-transparent"
                }`}
              >
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="checkbox"
                  name="interests"
                  className="hidden"
                  value="backend"
                />
                Backend +
              </label>
              <label
                className={`text-center cursor-pointer border border-zinc-200 p-3 rounded-lg text-[#00229B] items-center ${
                  values.interests.includes("Android")
                    ? "bg-blue-700 text-white"
                    : "bg-transparent"
                }`}
              >
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="checkbox"
                  name="interests"
                  className="hidden"
                  value="Android"
                />
                Android +
              </label>
              <label
                className={`col-span-2 text-center cursor-pointer border border-zinc-200 p-3 rounded-lg text-[#00229B] items-center ${
                  values.interests.includes("Quality-Assurance")
                    ? "bg-blue-700 text-white"
                    : "bg-transparent"
                }`}
              >
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="checkbox"
                  name="interests"
                  className="hidden"
                  value="Quality-Assurance"
                />
                Quality Assurance +
              </label>
            </div>

            <div className="pb-20">
              <div className="mt-5 text-red-500">{errors.interests}</div>
            </div>
            <Button1
              type="submit"
              label={loading ? "Please wait..." : "Sign Up"}
            />
            <div className="flex justify-center pb-8">
              <p className="pt-2"> Already have an account?</p>
              <a href="./login" className=" pt-2 ml-2 text-[#00229B]">
                Log In
              </a>
            </div>
            {/* <div className="mt-5">
              {JSON.stringify(values)}
            </div> */}
          </form>
        </div>
      </main>
    </NoAuthProvider>
  );
};

export default InterestContainer;
