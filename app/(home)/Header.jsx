
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../../components/header/HeaderNavContent";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header -type-17 ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    width={154}
                    height={50}
                    src="/images/talent.svg"
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}

            {/* <!-- Login/Register --> */}
            <div className="btn-box">
              <a
                href="#"
                className="theme-btn -outline-dark-blue -rounded call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                Login
              </a>
              <a
              href="#"
              className="theme-btn btn-style-one"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            >
              Register
            </a>
            </div>
          </div>
        </div>
        {/* <!-- Main box --> */}
      </div>
    </header>
  );
};

export default Header;
