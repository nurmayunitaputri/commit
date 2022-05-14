import { useRouter } from 'next/router';
import { Input, Input2, Input3 } from '../../components/input';
import { Button1 } from '../../components/button';
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn } from 'formik';
import * as Yup from 'yup';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { useSignupDispatcher } from '../../redux/reducers/signup';

const validationSchema = Yup.object({
  email: Yup.string().required('There is something wrong with your email please check your email again').email('Email tidak valid'),
  password: Yup.string().required('password must be at least 6 character and must contain number & letter ').min(6, 'password must be at least 6 character and must contain number & letter'),
  name: Yup.string().required('Something is wrong. please check your name'),
  domicile: Yup.string().required('please choose a domicile'),
  gender: Yup.string().required('please choose a gender'),
  phone_number: Yup.number().required('there is something wrong with your number, please make sure your numbers starts with 0  '),
  // interest: Yup.string().required(''),
});

const initialValues = {
  email: '',
  password: '',
  name: '',
  phone_number: '',
  domicile: '',
  gender: '',
  // interest: '',
};

const SignupContainer = () => {
  const { push } = useRouter();
  const {
    signup: { loading },
    doSignup,
  } = useSignupDispatcher();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const payload = {
        email: values.email,
        password: values.password,
        name: values.name,
        phone_number: values.phone_number,
        domicile: values.domicile,
        gender: values.gender,
        // interest: values.interest,
      };
      await doSignup(payload);
      localStorage.setItem('email', values.email);
      localStorage.setItem('password', values.password);
      localStorage.setItem('name', values.name);
      localStorage.setItem('phone_number', values.phone_number);
      localStorage.setItem('domicile', values.domicile);
      localStorage.setItem('gender', values.gender);
      push(`/interest`);
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
        <div className="w-full h-full bg-white flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto  bg-white rounded-2xl p-[20px]" onSubmit={handleSubmit}>
            <h2 className="text-2xl text-[#27272E] font-bold text-center">Create your account</h2>
            <p className="text-1xl text-[#27272E] text-center p-[10px]">its free and easy</p>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label className="font-semibold text-black text-sm ">Full Name</label>
              <Input3 name="name" type="name" placeholder="Enter your name here" onChange={handleChange} onBlur={handleBlur} dataTestId="input-fullname" isValid={getIn(touched, 'name') && !getIn(errors, 'name')} />
              {getIn(touched, 'name') && getIn(errors, 'name') && (
                <div className="flex items-center justify-start text-xs text-red-500 font-light" data-testid="error-name">
                  <ExclamationCircleIcon className="w-5 h-5 text-red pr-1" />
                  {getIn(errors, 'name')}
                </div>
              )}
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label className="font-semibold text-black text-sm ">Email</label>
              <Input3 name="email" type="email" placeholder="Enter your email here" onChange={handleChange} onBlur={handleBlur} dataTestId="input-email" isValid={getIn(touched, 'email') && !getIn(errors, 'email')} />
              {getIn(touched, 'email') && getIn(errors, 'email') && (
                <div className="flex items-center justify-start text-xs text-red-500 font-light" data-testid="error-email">
                  <ExclamationCircleIcon className="w-5 h-5 text-red pr-1" />
                  {getIn(errors, 'email')}
                </div>
              )}
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label className="font-semibold text-black text-sm ">Domicile</label>
              <select
                name="domicile"
                type="domicile"
                placeholder="domicile"
                className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                dataTestId="input-domicile"
                isValid={getIn(touched, 'full name') && !getIn(errors, 'full name')}
              >
                <option hidden>Domicile</option>
                <option value="Aceh">Aceh</option>
                <option value="Barat">Sumatera Barat</option>
                <option value="Sumatera Utara">Sumatera Utara</option>
                <option value="Sumatera Selatan">Sumatera Selatan</option>
                <option value="Lampung">Lampung</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Riau">Riau</option>
                <option value="Kepulauan Riau">Kepulauan Riau</option>
                <option value="Jambi">Jambi</option>
                <option value="Kepulauan Bangka">Kepulauan Bangka Belitung</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="DKI Jakarta">DKI Jakarta</option>
                <option value="Banten">Banten</option>
                <option value="Jawa Barta">Jawa Barat</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Jawa Timur">Jawa Timur</option>
                <option value="DIY Yogyakarta">DIY Yogyakarta</option>
                <option value="Bali">Bali</option>
                <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                <option value="Nusa Tengggara Timur">Nusa Tenggara Timur</option>
                <option value="Kalimantan Barat">Kalimanta Barat</option>
                <option value="Kalimantan Selatan">Kalimanta Selatan</option>
                <option value="Kalimantan Tengah">Kalimanta Tengah</option>
                <option valye="Kalimantan Timur">Kalimanta Timur</option>
                <option value="Sulawesi Barat">Sulawesi Barat</option>
                <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                <option value="Sulawesi Tegah">Sulawesi Tengah</option>
                <option value="Sulawesi Utara">Sulawesi Utara</option>
                <option value="Gorontolo">Gorontalo</option>
                <option value="Maluku">Maluku</option>
                <option value="Maluku Utara">Maluku Utara</option>
                <option value="Papua">Papua</option>
                <option value="Papua Barat">Papua Barat</option>
              </select>
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label className="font-semibold text-black text-sm ">Gender</label>
              <select
                name="gender"
                type="gender"
                placeholder="Domicile"
                className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none "
                onChange={handleChange}
                onBlur={handleBlur}
                dataTestId="input-gender"
                isValid={getIn(touched, 'gender') && !getIn(errors, 'gender')}
              >
                <option value="gender" hidden>
                  Gender
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              {/* <input className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none" type="text" placeholder="Select your option" /> */}
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label className="font-semibold text-black text-sm ">Phone Number</label>
              <Input name="phone_number" type="phone_number" placeholder="Enter your number" onChange={handleChange} onBlur={handleBlur} dataTestId="phone_number" isValid={getIn(touched, 'phone_number') && !getIn(errors, 'phone_number')} />
              {getIn(touched, 'phone_number') && getIn(errors, 'phone_number') && (
                <div className="flex items-center justify-start text-xs text-red-500 font-light" data-testid="error-phone_number">
                  <ExclamationCircleIcon className="w-5 h-5 text-red pr-1" />
                  {getIn(errors, 'phone_number')}
                </div>
              )}
            </div>
            <div className="flexflex-col text-[#4E4D4F] py-2">
              <label className="font-semibold text-black text-sm">Password</label>
              <Input2
                name="password"
                type="password"
                className="rounded-lg mt-2 p-2 text-sm border max-h-11 border-zinc-900 focus:outline-none"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                dataTestId="password"
                isValid={getIn(touched, 'password') && !getIn(errors, 'passwrod')}
              />
              {getIn(touched, 'password') && getIn(errors, 'password') && (
                <div className="flex items-center justify-start text-xs text-red-500 font-light" data-testid="error-password">
                  <ExclamationCircleIcon className="w-5 h-5 text-red pr-1" />
                  {getIn(errors, 'password')}
                </div>
              )}
            </div>
            <div className="text-xs text-[#27272E]">
              <p> Password must be at leat 6 characters and must contain number & letter.</p>
              {/* <a href="../registration" className="text-[#00229B]"> 
                Forgot Password? 
              </a> */}
            </div>
            <div className="flex flex-col text-[#4E4D4F] py-2">
              <label className="inLine-flex items-center">
                <input
                  type="checkbox"
                  class="shadow checked:shadow-xl"
                  onChange={(target) => {
                    console.log('hitcheckbox');
                  }}
                />
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
