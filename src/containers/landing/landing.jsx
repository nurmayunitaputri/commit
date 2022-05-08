// import MainLayout from '../../components/layout/MainLayout';

const Landing = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap  bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-20 ">
          <img src="Logo Header.svg" className=" w-11/12 max-w-fit mx-auto pl-3"></img>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-black ">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-11 ">
              Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-11">
              About Us
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black mr-11">
              Features
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black">
              Contact Us
            </a>
          </div>
          <div>
            <a href="../signup" className="inline-block text-sm px-6 py-2 leading-none border rounded-lg bg-[#00229B] text-white border-white mt-4 lg:mt-0 mr-4">
              Sign Up
            </a>
          </div>
          <div>
            <a href="../login" className="inline-block text-sm px-6 py-2 leading-none border rounded-lg text-[#00229B] border-[#00229B] mt-4 lg:mt-0">
              Log In
            </a>
          </div>
        </div>
      </nav>

      {/* section 1 */}
      <div className="text-gray-600 body-font bg-white grid grid-cols-1 sm:grid-cols-2 w-full py-5">
        <div className="w-full h-full bg-white flex flex-col justify-center ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-7 md:pl-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl text-6xl mb-4  text-[#272D4E] font-[700] ">Welcome to your next growth opportunity</h1>
              <p className="mb-8 pt-7 text-lg leading-relaxed font-normal w-fit">Stands for Community IT, here we'll make it easier for you to learn or share new things about Product Design and Development.</p>
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center">
          <div className="w-11/12 ">
            <img src="LandingPage.png" className=""></img>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="text-gray-600 body-font bg-[#E2EFFF] w-full">
        <div className="flex justify-center items-center ">
          <div className="pt-20 text-5xl font-bold title-font text-[#272D4E] ">It's Your Chance ! </div>
        </div>
        <div className=" flex justify-center items-center  ">
          <div className="w-10/12 ">
            <div className="text-xl font-normal text-center text-[#333333] pt-7 ">
              Not just sharing and learning, with <span className="text-[#00229B]">My Chance</span> we will find you your best partner. <span className="text-[#00229B] font-bold">Commit</span> will link you with opportunities you want with
              at companies with similar interests. Get connected with expert, freelance and professional jobs that are suited just for you and meet your prerequisite.
            </div>
          </div>
        </div>
        <div className="container mx-auto flex px-5 pb-24 pt-10  md:flex-row flex-col items-center">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img src="ImageLandingPage_Learn.png" className=" w-full "></img>
              </div>
              <h2 className="text-3xl font-bold title-font text-[#272D4E] mt-5">Learn</h2>
              <p className="text-base leading-relaxed mt-2 text-[#333333]">Work and Study? No Problem! We help you find the most suitable Bootcamp or Course for your schedule </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 pt-16">
              <div className="rounded-lg overflow-hidden">
                <img src="ImageLandingPage_Intern.png" className=" w-full "></img>
              </div>
              <h2 className="text-3xl font-bold title-font text-[#272D4E]  mt-5">Internship</h2>
              <p className="text-base leading-relaxed mt-2 text-[#333333]">Are one off gigs your preference? CommIT helps you find internship opportunity of your choice</p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 pt-36">
              <div className="rounded-lg overflow-hidden">
                <img src="ImageLandingPage_Job.png" className=" w-full"></img>
              </div>
              <h2 className="text-3xl font-bold title-font text-[#272D4E]  mt-5">Job</h2>
              <p className="text-base leading-relaxed mt-2 text-[#333333]">Join top companies anywhere in the world as a full time employee </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="text-gray-600 body-font bg-white w-full">
        <div className="flex justify-center items-center ">
          <div className="w-7/12 pt-20 text-5xl font-bold title-font text-center text-black ">One Community to Increase Your Knowledge </div>
        </div>
        <div className=" flex justify-center items-center  ">
          <div className="w-10/12 ">
            <div className="text-base font-normal text-center items-center text-[#333333] pt-7 ">Based on our main topics below, do you see the one you interested in ?</div>
          </div>
        </div>
      </div>

      {/* section3 :jumlah gambar 3 */}
      <div className="text-gray-600 body-font bg-white w-full">
        <div className="container mx-auto flex px-5 pb-24 pt-10  flex-col items-center">
          <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 ">
              <div className="rounded-lg  w-full flex justify-center items-center overflow-hidden">
                <img src="ui ux bwa 1.png" className=" w-full"></img>
              </div>
              <div className="text-center font-bold text-3xl text-[#6C6B6B] pt-16"> UI/UX Design</div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg w-full flex justify-center items-center overflow-hidden">
                <img src="Image Landing Page Front End.png" className=" w-full "></img>
              </div>
              <div className="text-center font-bold text-3xl text-[#6C6B6B] pt-16"> Front End Engineer</div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg w-full flex justify-center items-center overflow-hidden">
                <img src="Image Landing Page Back End.png" className=" w-full"></img>
              </div>
              <div className="text-center font-bold text-3xl text-[#6C6B6B] pt-16"> Back End Engineer</div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3: jumlah gambar 2 */}
      <div className="text-gray-600 body-font bg-white w-full">
        <div className="container mx-auto px-5 pb-24 pt-5 flex-col ">
          <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 ">
              <div className="rounded-lg  w-full flex justify-center items-center overflow-hidden">
                <img src="Image Landing Page Android.png" className="  w-full "></img>
              </div>
              <div className="text-center font-bold text-3xl text-[#6C6B6B] pt-16"> Android Engineer</div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg  w-full flex justify-center items-center overflow-hidden">
                <img src="Image Landing Page QA.png" className=" w-full  "></img>
              </div>
              <div className="text-center font-bold text-3xl text-[#6C6B6B] pt-16"> Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="text-gray-600 body-font bg-[#E2EFFF] w-full">
        <div className="flex justify-center items-center ">
          <div className="pt-20 text-5xl font-bold title-font text-[#272D4E] mt-5">Get Matched to Your Opportunity </div>
        </div>
        <div className=" flex justify-center items-center  ">
          <div className="w-5/12 ">
            <div className="text-xl font-normal text-center text-[#333333] pt-7 ">
              Save time and focus your energy in getting one step closer to your next best opportunity <span className="font-semibold"> Join Us Now</span>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center py-16 ">
          <a href="../signup" className="inline-block text-sm px-6 py-2 leading-none border rounded-lg bg-[#00229B] w-[225px] font-semibold text-center h-[55px] pt-4 text-white mt-4 lg:mt-0 ">
            Register Now
          </a>
        </div>

        <div className=" w-full  ">
          <img src="terbaru landing page bawah.png" className=" h-full object-cover w-full " />
        </div>
      </div>

      <footer className="text-gray-600  ">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div></div>
        <div className="w-[389px] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="Logo Header.svg" className="  w-full pl-3"></img>
          </a>
        </div>
        <div className="flex-grow flex justify-between flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold tracking-widest text-[#00229B] text-xl mb-3">FEATURES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="../" className=" text-[#00229B] text-lg ">Simpler</a>
              </li>
              <li>
                <a href="../" className="text-[#00229B] text-lg ">My Chance</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font   tracking-widest text-[#00229B] text-xl font-semibold mb-3">COMMUNITY</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="../" className="text-[#00229B] text-lg ">About Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  tracking-widest  text-[#00229B] text-xl font-semibold mb-3">SUPPORT</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="../" className="text-[#00229B] text-lg ">Privacy Policy</a>
              </li>
              <li>
                <a href="../" className="text-[#00229B] text-lg ">Contact Us</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white pt-10 pb-16  flex items-center text-center justify-center ">
        <p className=" text-sm text-center sm:text-left">
          <a href="#" rel="noopener noreferrer" className=" text-xl font-bold ml-1 text-[#00229B]  text-center">
            © 2022 - Commit. All Rights Reserved
          </a>
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Landing;
