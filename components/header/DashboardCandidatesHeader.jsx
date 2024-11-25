'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import employerProfileMenuData from "../../data/employerProfileMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import authService from '@/services/authService';

import { usePathname } from "next/navigation";
const DashboardCandidatesHeader = () => {
    const [navbar, setNavbar] = useState(false);



    const changeBackground = () => {
        if (window.scrollY >= 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const handleLogout = () => {
        authService.logout();
      };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        // <!-- Main Header-->
        <header
            className={`main-header header-shaddow  ${
                navbar ? "fixed-header " : ""
            }`}
        >
            <div className="container-fluid">
                {/* <!-- Main box --> */}
                <div className="main-box">
                    {/* <!--Nav Outer --> */}
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        alt="brand"
                                        src="/images/logo.svg"
                                        width={154}
                                        height={50}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                        {/* End .logo-box */}

                        {/* <!-- Main Menu End--> */}
                    </div>
                    {/* End .nav-outer */}

                    <div className="outer-box">

                        <div className="dropdown dashboard-option">
                            <a
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {/* <Image
                                    alt="avatar"
                                    className="thumb"
                                    src="/images/resource/candidate-1.png"
                                    width={50}
                                    height={50}
                                /> */}
                                <span className="name">My Account</span>
                            </a>

                            <ul className="dropdown-menu">
                            {employerProfileMenuData.map((item) => (
                              <li
                                key={item.id}
                                className={`${isActiveLink(item.routePath, usePathname()) ? 'active' : ''} mb-1`}
                              >
                                {item.name === 'Logout' ? (
                                  <a onClick={handleLogout}>
                                    <i className={`la ${item.icon}`}></i> {item.name}
                                  </a>
                                ) : (
                                  <Link href={item.routePath}>
                                    <i className={`la ${item.icon}`}></i> {item.name}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* End dropdown */}
                    </div>
                    {/* End outer-box */}
                </div>
            </div>
        </header>
    );
};

export default DashboardCandidatesHeader;
