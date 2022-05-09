import { useRouter } from 'next/router';
import { Input, Input2, Input3} from '../../components/input';
import { Button1 } from '../../components/button';
import { NoAuthProvider } from '../../providers/auth';
import { useFormik, getIn, FormikConsumer } from 'formik';
import * as Yup from 'yup';
import { MenuIcon } from '@heroicons/react/outline';
import { useHalamanDispatcher } from '../../redux/reducers/halaman';

const validationSchema = Yup.object({
  email: Yup.string().required('diperlukan Email').email('Email tidak valid'),
  password: Yup.string().required('diperlukan kata sandi').min(6, 'minimal 6 karakter'),
  // name: Yup.string().required(''),
  // phone_number: Yup.number('diperlukan phone number').max(11, 'maximal 11'),
  // domicile: Yup.string().required(''),
  // gender: Yup.string().required(''),
});

const initialValues = {
  email: '',
  password: '',
  // name: '',
  // phone_number: '',
  // domicile: '',
  // gender: ''
};

const Halaman = () => {
  const { push } = useRouter();
  const {
    halaman: { loading },
    doHalaman,
  } = useHalamanDispatcher();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const payload = {
        email: values.email,
        password: values.password,
        // name: values.name,
        // phone_number: values.phone_number,
        // domicile: values.domicile,
        // gender: values.gender,
      };
      await doHalaman(payload);
      // push(``);
    } catch (error) {
      alert(error);
    }
  };

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  console.log(errors)
  
  return (
    <NoAuthProvider>
        <div className="bg-blue-200">
          <nav className="h-max fixed left-0 right-0 w-full shadow-md bg-white z-50">
            <div className="container mx-auto py-3 px-3 lg:px-0">
              <div className="flex justify-between items-start">
                <div className="flex text-white ">    
                  <img src="Logo Header.svg" className=" w-11/12 max-w-fit mx-auto pr-10"></img>
                </div>
                <div className="visible lg:invisible transition-all">
                  <button type="button" className="border rounded-lg p-2">
                    <MenuIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="w-full block lg:flex ml-auto items-center">
                  <div className="text-sm flex items-center pt-2">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-blue-300 mr-11 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                        <p className="text-grey-500 flex items-center ml-1"> Home </p>
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-blue-300 mr-11 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <p className="text-grey-500 flex items-center "> Simpler </p>
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 focus:text-blue-700 focus:outline-none text-blue-300 mr-11 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-grey-500 flex items-center">My Chance </p>
                    </a>
                  </div>
                    <div className="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
                      <div className="responsive text-black text-sm "> 
                        <div className="input-group responsive text-black text-sm xl:w-80 flex items-center pt-2 ml-10">
                          <input type="search" className="pr-3 pl-10 form-control relative min-w-0 items-center block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg p-[20] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute mb-0 ml-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            {/* <div className="border-l-4 mr-2">
                            </div> */}
                        </div>
                      </div>
                    </div>
                      <div className="dropdown-toggle hidden-arrow pt-2 mr-2 border-l-4" href="#" id="dropdownMenuButton2" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false" > hallo, Angga
                      </div>   
                      <div className="relative pt-2 mr-20">
                        <button className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                          <img className="h-full w-full object-cover" src="kewren.jpg" alt="avatar"></img>            
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </nav>

        {/* Container atas kiri */}
            <div className="fixed rounded-lg left-0 h-max w-[20%] ml-[3.2rem] border-transparent text-center invisible lg:visible pt-[80px]">
              <div className="flex flex-col justify-between items-stretch py-2 rounded-lg">
                <form className="py-2 rounded-tr-lg rounded-tl-lg bg-white">
                  <button className=" h-20 w-20 rounded-full overflow-hidden border-2 text-center">
                        <img className="h-full w-full object-cover" src="kewren.jpg" alt="avatar"></img>            
                  </button>
                    <h4 className="text-1xl font-bold text-[#333333] p-[10px] flex justify-center"> Angga Yunanda </h4>
                      <div className="flex justify-center text-sm">
                        <p className="px-[2%] py-[2%] text-[10px] rounded  bg-[#708beb] text-white">
                              UI/UX
                        </p>
                        <p className="text-gray-400 pl-3 px-[5px] py-[5px]"> DKI Jakarta </p>
                      </div>
                        <div className="text-center text-[14px] text-black py-[8px]">
                          Follow Your Dream!
                        </div>
                        <div className="flex justify-center border-t-4 pt-2">
                          <div className="text-black text-center px-5 rounded-lg">
                              Followers
                              <p className="text-black text-center">
                                3543
                              </p>
                          </div>
                          <div className="text-black text-center px-5">
                                Following
                              <p className="text-black text-center">
                                321
                              </p>
                          </div>  
                        </div>
                </form>
              </div>

              {/* Container bawah kiri  */}
                <div className="fixed rounded-lg left-0 w-[20%] ml-[3.2rem] border-transparent text-center invisible lg:visible pt-7">
                  <div className="flex flex-col rounded-lg justify-between"> 
                    <form className="w-full mx-auto bg-white pb-[10px] rounded-lg items-center">
                        <h4 className="text-1xl font-bold text-[#333333] pt-[7px] flex justify-start ml-[20px]">
                          Filter
                        </h4>
                        <p className="text-[12px] text-gray flex justify-start ml-[20px] pb-[7px]">Filter Your Post by Tags</p>
                          <div className="grid grid-cols-2 gap-2 items-center px-2 ">
                            <div className="flex flex-col text-[10px] font-bold py-2 rounded-full bg-white border border-[#00229B] items-center">
                              <a href="#" className="text-[#00229B]">UI/UX</a>
                            </div>
                            <div className="flex flex-col text-[10px] font-bold py-2 rounded-full bg-white  border border-[#00229B] items-center">
                              <a href="#" className="text-[#00229B]">Android</a>
                            </div>
                            <div className="flex flex-col text-[10px] font-bold py-2 rounded-full bg-white  border border-[#00229B] items-center">
                              <a href="#" className="text-[#00229B]">Frontend</a>
                            </div>
                            <div className="flex flex-col text-[10px] font-bold py-2 rounded-full bg-white  border border-[#00229B] items-center">
                              <a href="#" className="text-[#00229B]">Backend</a>
                            </div>
                            <div className="flex flex-col text-[10px] font-bold py-2 col-span-2 rounded-full bg-white border border-[#00229B] items-center">
                              <a href="#" className="text-[#97a3ce]">Quality Assurance</a>
                            </div>
                          </div>
                   </form>
                  </div>
                </div>
            </div>

          {/* Container atas kanan */}
            <div className="fixed rounded-lg right-0 h-max w-[20%] mr-[3.2rem] border-transparent text-center invisible lg:visible pt-[90px]">
              <div className="flex flex-col rounded-lg justify-between">
                <form className="w-full mx-auto bg-white pb-[10px] rounded-lg items-center">
                    <p className="text-[14px] font-bold text-[#333333] pt-[20px] flex justify-start ml-[20px]">
                     People you may follow
                    </p>
                    <div className="flex items-start ml-3 pt-3 text-sm ">
                        <button className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                          <img className="h-full w-full object-cover" src="cewek.jpg" alt="avatar"></img>           
                        </button>
                        <p className="ml-[5px] text-[12px] font-bold pr-[3px]">
                          Jen Conor
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <button className="block overflow-hidden px-[3%] py-[2%] text-[12px] rounded-lg ml-[33px] bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-600 ">
                              Follow
                        </button>
                    </div>
                      {/* <p className="text-blue-500 text-[10px] pr-10 mb-20">
                            Quality Assurance
                      </p>  */}
                    <div className="flex items-start ml-3 pt-2 text-sm ">
                        <button className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                          <img className="h-full w-full object-cover" src="cewe.jpg" alt="avatar"></img>           
                        </button>
                        <p className="ml-[5px] text-[12px] font-bold pr-[3px]">
                          Keylie Smith
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <button className="block overflow-hidden px-[3%] py-[2%] text-[12px] rounded-lg ml-5 bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-600">
                              Follow
                        </button>
                    </div>
                    <div className="flex items-start ml-3 pt-2 text-sm ">
                        <button className="block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                          <img className="h-full w-full object-cover" src="cowo.jpg" alt="avatar"></img>           
                        </button>
                        <p className="ml-[5px] text-[12px] font-bold pr-[3px]">
                          Lebron James
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <button className="block overflow-hidden px-[3%] py-[2%] text-[12px] rounded-lg ml-[10px] bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-600">
                              Follow
                        </button>
                    </div>
                </form>
              </div>

            {/* Container bawah kanan */}
              <div className="fixed bg-blue-200 bottom-0 right-0 h-30 w-[20%] mr-[3.2rem] border-transparent mb-7 invisible lg:visible">
                <div className="grid grid-cols-2 gap-2 px-2 text-[15px]">
                  <a href="#" className="text-blue-800 text-left">
                    Help
                  </a>
                  <a href="#" className="text-blue-800 text-left text-semibold">
                    Simpler
                  </a>
                  <a href="#" className="text-blue-800 text-left text-semibold">
                    About Us
                  </a>
                  <a href="#" className="text-blue-800 text-left text-semibold">
                    Contact Us
                  </a>
                  <a href="#" className="text-blue-800 text-left text-semibold">
                    My Chance
                  </a>
                  <a href="#" className="text-blue-800 text-left text-semibold">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-blue-800 text-left text-semibold">
                    Premium
                  </a>
                </div>
              </div>
            </div>
          
        {/* Postingan */}
            <div className="w-full h-[30%] lg:w-[50%] mx-auto space-y-3 pt-20">
            <div className="border-transparent  rounded-lg ">
              <div className="min-h-[15rem] text-white rounded-lg p-2">
                <form className= "py-2 rounded-lg bg-white pl-2">
                  <div className="flex flex-cols ml-2 items-center pt-2">
                      <div className="block h-[50px] w-[50px] rounded-full overflow-hidden border-2 ">
                        <img className="h-full w-full object-cover" src="kewren.jpg" alt="avatar"></img>           
                      </div>
                      <label htmlFor="caption" className="block w-full mb-3">
              <div className="font-bold mb-1">Caption</div>
              <textarea
                name="caption"
                type="text"
                className="py-2 focus:ring-0 focus:outline-none border-b w-full resize-none"
                placeholder="Type your post caption"
                rows={5}
                onChange={handleChange}
                onBlur={handleBlur}
                dataTestId="input-caption"
              />
              {touched && errors && touched.caption && errors.caption && <div className="text-xs text-red-500 pb-3" data-testid="error-caption">{errors.caption}</div>}
            </label>
                   </div>
                   <div className="flex flex-cols gap-[10%] bg-white items-start pt-[15%] rounded-lg ">
                <a href="#" className="block focus:text-blue-700 text-[#a8b8f1] focus:outline-none ml-[15px]">
                 <div className="flex items-start text-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                        <p className="ml-[5px] text-[12px] pt-[10px] font-semibold text-[#a8b8f1]">
                          Media
                        </p>
                  </div>
                </a>
                <a href="#" className="block focus:text-blue-700 text-[#a8b8f1] focus:outline-none ml-[15px]">
                  <div className="flex items-start text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="ml-[5px] text-[12px] pt-[10px] font-semibold text-[#a8b8f1]">
                          Public Post
                        </p>
                  </div>
                </a>
                        <button className="block overflow-hidden h-[35px] w-[50px] text-[12px] rounded-lg ml-[220px] bg-[#a8b8f1] text-white focus:outline-none focus:bg-blue-700">
                              Post     
                        </button>
                    </div>
                </form>
              </div>
            </div>

          {/* Postingan 2 */}
            <div className="border-transparent  rounded-lg ">
              <div className="min-h-[15rem] text-white rounded-lg p-2">
                <form className= "py-2 rounded-lg bg-white pl-2">
                  <div className="flex flex-cols ml-2 items-center pt-2">
                      <div className="block h-[50px] w-[50px] rounded-full overflow-hidden border-2 ">
                        <img className="h-full w-full object-cover" src="kewren.jpg" alt="avatar"></img>           
                      </div>
                      <h4 className="text-[15px] font-bold text-[#333333] p-[5px] pb-[20px] flex justify-center"> Angga Yunanda </h4>
                      <div className="pb-7 ml-[400px]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                  </div>
                  {/* <div className="flex justify-start">
                        <p className="text-gray-400 text-[12px] ml-[60px] ">
                              UI/UX
                        </p>
                        <p className="text-gray-400 text-[12px] ml-[10px]">  4hr ago  </p>
                        <div className="ml-2 pb-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                  </div> */}
                   <div className="flex flex-cols gap-2 bg-white items-start pt-5 rounded-lg text-gray-700 text-[12px] ml-2 ">
                      [Under standing User Experience [UI/UX]] 
                      <br/>
                      User Experience [UI] is the process of designing a product trought a user approach . With this approach, 
                      you can create a product that fits the needs and desires of users.
                      <br/>
                      A product with a good UX design will create a pleasant experience for user when using your product.
                      Users become easy and comfortable when using the product
                    </div>
                     <p className="text-gray-400 text-[12px] ml-2 pt-5">
                       See more ...
                     </p>
                     <div className="flex flex-cols gap-[5%] bg-white items-start pt-[5%] rounded-lg ">
                <a href="#" className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[10px]">
                 <div className="flex items-start text-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                        <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
                          88
                        </p>
                  </div>
                </a>
                <a href="#" className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[2px]">
                  <div className="flex items-start text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                        <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
                          12
                        </p>
                  </div>
                </a>
                <a href="#" className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[63%]">
                  <div className="flex items-start text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  </div>
                </a>
                    </div>
                </form>
              </div>
            </div>

          {/* Postinga 3 */}
          <div className="border-transparent  rounded-lg ">
              <div className="min-h-[15rem] text-white rounded-lg p-2">
                <form className= "py-2 rounded-lg bg-white pl-2">
                  <div className="flex flex-cols ml-2 items-center pt-2">
                      <div className="block h-[50px] w-[50px] rounded-full overflow-hidden border-2 ">
                        <img className="h-full w-full object-cover" src="Commit.jpg" alt="avatar"></img>           
                      </div>
                      <h4 className="text-[15px] font-bold text-[#333333] p-[5px] pb-[20px] flex justify-center"> Commit </h4>
                      <div className="pb-4 ml-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <div className="pb-7 ml-[440px]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                  </div>
                  {/* <div className="flex justify-start">
                        <p className="text-gray-400 text-[12px] ml-[60px] ">
                              UI/UX
                        </p>
                        <p className="text-gray-400 text-[12px] ml-[10px]">  4hr ago  </p>
                        <div className="ml-2 pb-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                  </div> */}
                   <div className="flex flex-cols gap-2 bg-white items-start pt-5 rounded-lg text-gray-700 text-[12px] ml-2 ">
                      [Front-End Developer] 
                      <br/>
                      A front-end developer is required to be able to master programming languages such as HTML, CSS, and JavaScript in order to produce a good, attractive, and interactive
                      wb layout that allows visitors to have an interesting. experience when visiting the website, starting from design,
                      selection. font, colors, dropdown menus, to sliders and other components that stimulate interaction with site visitors.
                    </div>
                     <p className="text-gray-400 text-[12px] ml-2 pt-5">
                       See more ...
                     </p>
                     <div className="block h-[50%] w-[90%] ml-7 pt-5">
                        <img className="h-full w-full object-cover" src="frontend.png" alt="avatar"></img>           
                      </div>
                     <div className="flex flex-cols gap-[5%] bg-white items-start pt-[5%] rounded-lg ">
                      <a href="#" className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[10px]">
                      <div className="flex items-start text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                              <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
                                2
                              </p>
                        </div>
                      </a>
                      <a href="#" className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[2px]">
                        <div className="flex items-start text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                              <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
                                5
                              </p>
                        </div>
                      </a>
                      <a href="#" className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[65%]">
                        <div className="flex items-start text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        </div>
                      </a>
                    </div>
                </form>
              </div>
            </div>

          {/* Postingaan 4 */}
          <div className="border-transparent  rounded-lg ">
              <div className="min-h-[15rem] text-white rounded-lg p-2">
                <form className= "py-2 rounded-lg bg-white pl-2">
                  <div className="flex flex-cols ml-2 items-center pt-2">
                      <div className="block h-[50px] w-[50px] rounded-full overflow-hidden border-2 ">
                        <img className="h-full w-full object-cover" src="cewek.jpg" alt="avatar"></img>           
                      </div>
                      <h4 className="text-[15px] font-bold text-[#333333] p-[5px] pb-[20px] flex justify-center"> Jen Conor </h4>
                      <div className="pb-7 ml-[450px]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg
                    </div>
                  </div>
                   <div className="flex flex-cols gap-2 bg-white items-start pt-5 rounded-lg text-gray-700 text-[12px] ml-2 ">
                      [Develop Android UI By Jen Conor] 
                    </div>
                     <p className="text-gray-400 text-[12px] ml-2 pt-5">
                       See more ...
                     </p>
                     <div className="block h-[50%] w-[90%] ml-7 pt-5">
                        <img className="h-full w-full object-cover" src="Android.png" alt="avatar"></img>           
                      </div>
                     {/* <div
                        class="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
                        style="padding-top: 42.857143%">
                        <iframe
                          class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                          src="https://youtu.be/ysEN5RaKOlA"
                          allowfullscreen=""
                          data-gtm-yt-inspected-2340190_699="true"
                          id="240632615"></iframe>
                      </div> */}
                     <div className="flex flex-cols gap-[5%] bg-white items-start pt-[5%] rounded-lg ">
                <a href="#" className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[10px]">
                 <div className="flex items-start text-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                        <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
                          121
                        </p>
                  </div>
                </a>
                <a href="#" className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[2px]">
                  <div className="flex items-start text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                        <p className="ml-[5px] text-[12px] pt-[8px] font-semibold text-gray-500">
                          100
                        </p>
                  </div>
                </a>
                <a href="#" className="block focus:text-blue-700 text-gray-500 focus:outline-none ml-[63%]">
                  <div className="flex items-start text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  </div>
                </a>
                    </div>
                </form>
              </div>
            </div>


          </div>
        </div>
    </NoAuthProvider>
  );
};

export default Halaman;


// 
                 
//                   <div className="fixed rounded-lg left-0 w-[18%] ml-[3.2rem] border text-center invisible lg:visible pt-[25%]">
//                       <div className="flex flex-col rounded-lg justify-between">
//                           <form className="w-full mx-auto bg-white pb-[10px] rounded-lg items-center">
//                             <h4 className="text-1xl font-bold text-[#333333] pt-[7px] flex justify-start ml-[20px]">
//                               Filter
//                             </h4>
//                             <p className="text-sm text-gray flex justify-start ml-[20px] pb-[7px]">Filter Your Post by Tags</p>
//                               <div className="grid grid-cols-2 gap-4 items-center px-2 ">
//                                   <div className="flex flex-col text-[14px] font-bold py-2 rounded-full bg-white border border-[#00229B] items-center">
//                                     <a href="#" className="text-[#00229B]">UI/UX</a>
//                                   </div>
//                                   <div className="flex flex-col text-[14px] font-bold py-2 rounded-full bg-white  border border-[#00229B] items-center">
//                                     <a href="#" className="text-[#00229B]">Android</a>
//                                   </div>
//                                   <div className="flex flex-col text-[14px] font-bold py-2 rounded-full bg-white  border border-[#00229B] items-center">
//                                     <a href="#" className="text-[#00229B]">Frontend</a>
//                                   </div>
//                                   <div className="flex flex-col text-[14px] font-bold py-2 rounded-full bg-white  border border-[#00229B] items-center">
//                                     <a href="#" className="text-[#00229B]">Backend</a>
//                                   </div>
//                                   <div className="flex flex-col text-[14px] font-bold py-2 col-span-2 rounded-full bg-white border border-[#00229B] items-center">
//                                     <a href="#" className="text-[#00229B]">Quality Assurance</a>
//                                   </div>
//                               </div>
//                            </form>
//                       </div>
//                   </div>  
//                 </div>
//               </div>
 
//         {/* List Post */}
//           <div className="w-full lg:w-[50%] mx-auto space-y-3 bg-blue-100">
//             <div className="border rounded-2xl pt-20">
//               <div className="p-3 font-bold">Post Title</div>
//               <div className="min-h-[15rem] bg-white text-black rounded-br-2xl rounded-bl-2xl p-3">
//                   <div className="relative">
//                     <button className="block h-[50px] w-[50px] rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
//                       <img className="h-full w-full object-cover" src="blur.jpg" alt="avatar"></img>            
//                     </button>
//                   </div>
//               </div>
//             </div>
//             <div className="border rounded-2xl">
//               <div className="p-3 font-bold">Post Title</div>
//               <div className="min-h-[15rem] bg-blue-300 text-white rounded-br-2xl rounded-bl-2xl p-3">
//                 Content Here
//               </div>
//             </div>
//             <div className="border rounded-2xl">
//               <div className="p-3 font-bold">Post Title</div>
//               <div className="min-h-[15rem] bg-blue-300 text-white rounded-br-2xl rounded-bl-2xl p-3">
//                 Content Here
//               </div>
//             </div>
//             <div className="border rounded-2xl">
//               <div className="p-3 font-bold">Post Title</div>
//               <div className="min-h-[15rem] bg-blue-300 text-white rounded-br-2xl rounded-bl-2xl p-3">
//                 Content Here
//               </div>
//             </div>
//           </div>
 
//       {/* SubContentBottomLeft */}
         
//           {/* <div className="fixed bg-red-100 bottom-0 left-0 h-10 w-[20%] ml-[3.2rem] border text-center mb-16 invisible lg:visible">
//             bottom left
//           </div> */}
 
//       {/* SubContentBottomRight */}
 
//           <div className="fixed bg-red-100 bottom-0 right-0 h-10 w-[20%] mr-[3.2rem] border text-center mb-16 invisible lg:visible">
//           <form className=" max-w-[260px] w-full mx-auto bg-white rounded-2xl ml-10 items-center">
//                 <div className="">
//                 <h4 className="text-1xl font-bold text-[#333333] p-[10px] flex justify-start ml-[8px]">
//                    Filter
//                 </h4>
//                 <p className="text-sm text-gray p-[10px] flex justify-start ml-[8px]">Filter Your Post by Tags</p>
               
//                   <div className="grid grid-cols-2 gap-4 items-center px-2 ">
//                       <div className="flex flex-col font-bold py-2 rounded-full bg-[#E2EFFF] border border-zinc-100 items-center">
//                         <a href="#" className="text-[#00229B]">UI/UX</a>
//                       </div>
//                       <div className="flex flex-col font-bold py-2 rounded-full bg-[#E2EFFF] border border-zinc-100 items-center">
//                         <a href="#" className="text-[#00229B]">Android</a>
//                       </div>
//                       <div className="flex flex-col font-bold py-2 rounded-full bg-[#E2EFFF] border border-zinc-100 items-center">
//                         <a href="#" className="text-[#00229B]">Feontend</a>
//                       </div>
//                       <div className="flex flex-col font-bold py-2 rounded-full bg-[#E2EFFF] border border-zinc-100 items-center">
//                         <a href="#" className="text-[#00229B]">Backend</a>
//                       </div>
//                       <div className="flex flex-col font-bold py-2 col-span-2 rounded-full bg-[#E2EFFF] border border-zinc-100 items-center">
//                         <a href="#" className="text-[#00229B]">Quality Assurance</a>
//                       </div>
//                   </div>
//                 </div>
//               </form>
//           </div>
 
//       {/* Content */}
     
//         </div>

