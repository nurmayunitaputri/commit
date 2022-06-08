import clsx from "clsx";

import { AuthProvider } from "../../providers/auth";
import { useHomeDispatcher } from "../../redux/reducers/home";
import { useEffect } from "react";
import { PostInput } from "./PostInput";
import { PostsList } from "./PostsList";
import { Profile } from "./Profile";
import { SuggestedPeople } from "./SuggestedPeople";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar/Navbar";
import { useRouter } from "next/router";

const topicOption = [
  {
    label: "UI/UX",
    value: "UI/UX",
  },
  {
    label: "Front End",
    value: "Front End",
  },
  {
    label: "Android",
    value: "Android",
  },
  {
    label: "Back End",
    value: "Back End",
  },
  {
    label: "Quality Assurance",
    value: "Quality Assurance",
  },
];

const Home = () => {
  const { push } = useRouter();
  const { home, fetchPosts, onSetFilter } = useHomeDispatcher();

  useEffect(() => {
    fetchPosts();
  }, [home.posts.filter]);

  return (
    <AuthProvider>
      <div className="bg-blue-200 min-h-screen">
        <NavBar currentPage={"home"} />

        {/* Container atas kiri */}
        <div className="fixed rounded-lg left-0 h-max w-[20%] ml-[3.2rem] border-transparent text-center invisible lg:visible pt-[80px]">
          <Profile />

          {/* Container bawah kiri  */}
          <div className="fixed rounded-lg left-0 w-[20%] ml-[3.2rem] border-transparent text-center invisible lg:visible pt-7">
            <div className="flex flex-col rounded-lg justify-between">
              <form className="w-full mx-auto bg-white pb-[10px] rounded-lg items-center">
                <h4 className="text-1xl font-bold text-[#333333] pt-[7px] flex justify-start ml-[20px]">
                  Filter
                </h4>

                <p className="text-[12px] text-gray flex justify-start ml-[20px] pb-[7px]">
                  Filter Post by Topics
                </p>
                <div className="grid grid-cols-2  gap-2 items-center px-2 ">
                  {topicOption.map((topic, index) => (
                    <div
                      key={topic.value}
                      className={clsx(
                        home.posts.filter == topic.label
                          ? "bg-blue-600"
                          : "bg-white",
                        "flex flex-col text-[10px] font-bold py-2 rounded-full  border-2 border-[#00229B] items-center",
                        index === topicOption.length - 1 && "col-span-2"
                      )}
                      onClick={() => onSetFilter(topic.value)}
                    >
                      <a
                        href="#"
                        className={
                          home.posts.filter == topic.label
                            ? "text-white"
                            : "text-[#00229B]"
                        }
                      >
                        {topic.label}
                      </a>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Container atas kanan */}
        <div className="fixed rounded-lg right-0 h-max w-[20%] mr-[3.2rem] border-transparent text-center invisible lg:visible pt-[90px]">
          <SuggestedPeople />

          {/* container tengah kanan */}
          <div className="fixed rounded-lg right-0 h-max w-[20%] mr-[3.2rem] border-transparent text-center invisible lg:visible pt-2">
            <div className="flex flex-col rounded-lg justify-between">
              <div className="w-full mx-auto bg-blue-200 pb-[10px] rounded-lg items-center">
                <div className=" flex justify-center items-center py-16 ">
                  <p
                    onClick={() => push("/simpler")}
                    className="inline-block border-1 border-[#00229B] text-sm px-6 py-2 leading-none border rounded-lg bg-[#00229B] w-[225px] font-semibold text-center h-[55px] pt-4 text-white mt-4 lg:mt-0 "
                  >
                    Subscribe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Container bawah kanan */}
          <Footer />
        </div>

        {/* Postingan */}
        <div className="w-full h-[30%] lg:w-[50%] mx-auto space-y-2 pt-20">
          <div className="border-transparent rounded-lg">
            <div className="min-h-[5rem] text-black rounded-lg p-2">
              <PostInput />
            </div>
          </div>

          <PostsList />
        </div>
      </div>
    </AuthProvider>
  );
};

export default Home;
