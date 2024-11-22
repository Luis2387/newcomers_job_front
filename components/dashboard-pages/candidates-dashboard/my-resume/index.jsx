"use client";
import MobileMenu from "../../../header/MobileMenu";
import Login from "../../../common/form/login/Login";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import Resume from "./components";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";
import React, { useState } from "react";
import ResumeForm from "./components";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* End Header Span */}

      <DashboardCandidatesHeader />
      <MobileMenu />
      <DashboardCandidatesSidebar />

      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="My Resume" />
          <MenuToggler />

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <button onClick={openForm}></button>
                    {/* Trigger button for form */}
                  </div>
                  <div className="widget-content">
                    <Resume />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pop-up form */}
    </div>
  );
};

export default Index;