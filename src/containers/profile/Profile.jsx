import { AuthProvider } from "../../providers/auth";
import * as Yup from "yup";
import { NavBar } from "../../components/navbar/Navbar";

import { PostsList } from "../home/PostsList";
import { useHomeDispatcher } from "../../redux/reducers/home";
import { useEffect } from "react";
import { CogIcon } from "@heroicons/react/solid";
import { Footer } from "../../components/footer";

const ProfileContainer = () => {
  const { fetchProfile, home } = useHomeDispatcher();
  const { profile } = home;
  const { loading, data } = profile;

  useEffect(() => {
    if (Object.keys(data).length == 0) {
      fetchProfile();
    }
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <AuthProvider>
      <div className="bg-blue-200 min-h-screen">
        <Footer />
        <NavBar />
        <div className="w-full h-[30%] lg:w-[50%] mx-auto space-y-2 pt-20">
          <div className="border-transparent rounded-lg ">
            <div className="min-h-[5rem] text-black rounded-lg pt-10  pb-12 bg-white  ">
              <div className="flex flex-row w-full px-12">
                <img
                  class="w-60 h-25 rounded-full mr-2 object-cover"
                  src="/no_profile.png"
                  alt="Rounded avatar"
                />
                <div className="text-black ml-3 w-full">
                  <div className="flex flex-row justify-between">
                    <p className="font-bold">{data.fullname}</p>
                    <CogIcon height={30} width={30} color="#0341fc" />
                  </div>
                  <div className="flex flex-row space-x-2 my-2  items-center">
                    <div className="bg-[#708beb] py-1 px-2 rounded-md text-white">
                      <p>{data.passion}</p>
                    </div>
                    <p className="text-gray-400 font-light">• {data.region}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-light">{data.bio}</p>
                  </div>
                  <div className="flex flex-row justify-evenly px-1 text-center mt-5 space-x-10">
                    <div>
                      <p className="font-bold">4</p>
                      <p>Posts</p>
                    </div>
                    <div className="h-35 bg-gray-300 w-[1px]" />
                    <div>
                      <p className="font-bold">{data.total_followers}</p>
                      <p>Followers</p>
                    </div>
                    <div className="h-35 bg-gray-300 w-[1px]" />
                    <div>
                      <p className="font-bold">{data.total_following}</p>
                      <p>Following</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PostsList />
        </div>
      </div>
    </AuthProvider>
  );
};

export default ProfileContainer;
