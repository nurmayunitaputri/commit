import MainLayout from '../../components/layout/MainLayout';

const Landing = () => {
  return (
    <MainLayout>
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
                Not just sharing and learning, with <span className='text-[#00229B]'>My Chance</span> we will find you your best partner. <span className='text-[#00229B] font-bold'>Commit</span> will link you with opportunities you want with at companies with similar interests. Get connected with expert, freelance and
                professional jobs that are suited just for you and meet your prerequisite.
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
    </MainLayout>
  );
};

export default Landing;
