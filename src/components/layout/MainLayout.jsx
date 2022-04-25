import Navbarlanding from './elements/Navbarlanding';
import Footerlanding from './elements/Footerlanding';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbarlanding />

      <main className="min-h-screen mx-auto ">{children}</main>
      <Footerlanding />
    </>
  );
};

export default MainLayout;
