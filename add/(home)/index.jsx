import Hero17 from "../../components/hero/hero-17";
import Header from "./Header";
import Login from "../../components/common/form/login/Login";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Login />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <Hero17 />
      {/* End Hero Section */}

    </>
  );
};

export default index;
