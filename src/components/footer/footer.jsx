import Link from "next/link";
export const Footer = () => {
  return (
    <div className="fixed bg-blue-200 bottom-0 right-0 h-30 w-[20%] mr-[3.2rem] border-transparent mb-7 invisible lg:visible">
      <div className="grid grid-cols-2 gap-2 pr-1 text-[15px]">
        <a href="simpler" className="text-[#00229B]  text-left text-sm font-semibold">
          Simpler
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.commit.app"
          className="text-[#00229B]  text-left text-sm font-semibold"
        >
          Play Store
        </a>
        <Link href="/about">
        <a href="" className="text-[#00229B]  text-left text-sm font-semibold">
          About Us
        </a>
        </Link>
        <Link href="/contact">
        <a href="" className="text-[#00229B]  text-left text-sm font-semibold">
          Contact Us & FAQ
        </a>
        </Link>
        <Link href="/privacy">
        <a href="" className="text-[#00229B] text-left text-sm font-semibold">
          Privacy Policy
        </a>
        </Link>
      </div>
    </div>
  );
};
