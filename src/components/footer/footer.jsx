export const Footer = () => {
  return (
    <div className="fixed bg-blue-200 bottom-0 right-0 h-30 w-[20%] mr-[3.2rem] border-transparent mb-7 invisible lg:visible">
      <div className="grid grid-cols-2 gap-2 px-2 text-[15px]">
        <a href="simpler" className="text-blue-800 text-left text-semibold">
          Simpler
        </a>
        <a
          href="https://g.co/kgs/sqLcsn"
          className="text-blue-800 text-left text-semibold"
        >
          Play Store
        </a>
        <a href="#" className="text-blue-800 text-left text-semibold">
          About Us
        </a>
        <a href="#" className="text-blue-800 text-left text-semibold">
          Contact Us
        </a>
        <a href="#" className="text-blue-800 text-left text-semibold">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};
