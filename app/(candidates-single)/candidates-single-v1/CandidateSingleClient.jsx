"use client";

import dynamic from "next/dynamic";
import candidates from "@/data/candidates";
import candidateResume from "@/data/candidateResume";
import LoginPopup from "@/components/common/form/login/Login";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaultHeader";
import MobileMenu from "@/components/header/MobileMenu";

import GalleryBox from "@/components/candidates-single-pages/shared-components/GalleryBox";
import Social from "@/components/candidates-single-pages/social/Social";
import JobSkills from "@/components/candidates-single-pages/shared-components/JobSkills";
import AboutVideo from "@/components/candidates-single-pages/shared-components/AboutVideo";
import Image from "next/image";

const CandidateSingleClient = ({ id }) => {
  const candidate =
    candidates.find((item) => item.id == id) || candidates[0];

  return (
    <>
      <span className="header-span"></span>

      <LoginPopup />
      <DefaulHeader />
      <MobileMenu />

      <section className="candidate-detail-section">
        <div className="upper-box">
          <div className="auto-container">
            <div className="candidate-block-five">
              <div className="inner-box">
                <div className="content">
                  
                  <h4 className="name">{candidate?.name}</h4>
                  <ul className="candidate-info">
                    <li className="designation">{candidate?.designation}</li>
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {candidate?.location}
                    </li>
                    <li>
                      <span className="icon flaticon-money"></span> $
                      {candidate?.hourlyRate} / hour
                    </li>
                    <li>
                      <span className="icon flaticon-clock"></span> Member
                      Since,Aug 19, 2020
                    </li>
                  </ul>
                  <ul className="post-tags">
                    {candidate?.tags?.map((val, i) => (
                      <li key={i}>{val}</li>
                    ))}
                  </ul>
                </div>
                <div className="btn-box">
                  <a
                    className="theme-btn btn-style-one"
                    href="/images/sample.pdf"
                    download
                  >
                    Download Resume 
                  </a>
                  <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="candidate-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-detail">
                  <div className="video-outer">
                    <h4>Candidates About</h4>
                    <p>Sample candidate description...</p>
                  </div>
                  
                  <div className="portfolio-outer">
                    <div className="row">
                    
                    </div>
                  </div>
                  {candidateResume.map((resume) => (
                    <div
                      className={`resume-outer ${resume.themeColor}`}
                      key={resume.id}
                    >
                      <div className="upper-title">
                        <h4>{resume?.title}</h4>
                      </div>
                      {resume?.blockList?.map((item) => (
                        <div className="resume-block" key={item.id}>
                          <div className="inner">
                            <span className="name">{item.meta}</span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item.name}</h3>
                                <span>{item.industry}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item.year}</span>
                              </div>
                            </div>
                            <div className="text">{item.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    <div className="widget-content">
                      <ul className="job-overview">
                        
                      </ul>
                    </div>
                  </div>
                  
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterDefault footerStyle="alternate5" />
    </>
  );
};

export default CandidateSingleClient;
