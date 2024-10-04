import MainBanner from "../../components/common/main/MainBanner";
import Header from "./Header";
import Login from "../../components/common/form/login/Login";
import MobileMenu from "../../components/header/MobileMenu";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Login />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <MainBanner />
      {/* End Hero Section */}

    </>
  );
};

export default index;
