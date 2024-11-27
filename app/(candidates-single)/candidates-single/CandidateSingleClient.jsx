"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import LoginPopup from "@/components/common/form/login/Login";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaultHeader";
import MobileMenu from "@/components/header/MobileMenu";
import ResumeService from "@/services/resumeService";
import ProfileService from "@/services/JobSeekerService";

const CandidateSingleClient = ({ id }) => {
  const router = useRouter();
  const [candidate, setCandidate] = useState(null);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchDetails = async () => {
      try {
        const [profileData, resumeData] = await Promise.all([
          ProfileService.getProfile(id),
          ResumeService.getResume(id),
        ]);

        setCandidate(profileData);
        setResume(resumeData);
      } catch (error) {
        console.error("Error fetching candidate details:", error);
        router.push("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (!candidate || !resume) return <p>Candidate not found.</p>;

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
                  <h4 className="name">
                    {candidate.jobseeker?.user?.first_name || "N/A"}{" "}
                    {candidate.jobseeker?.user?.last_name || ""}
                  </h4>
                  <ul className="candidate-info">
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {candidate.location || "N/A"}
                    </li>
                  </ul>
                  <ul className="post-tags">
                    {resume.candidate_skills?.map((skill) => (
                      <li key={skill.id}>{skill.name}</li>
                    ))}
                  </ul>
                 
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="candidate-detail-outer">
          <div className="auto-container">
            <div className="row">
              {/* Content Column */}
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-detail">
                  {/* Candidates About */}
                  <div className="video-outer">
                    <h4>Candidates About</h4>
                    <p>{candidate.profile_description || "No description available."}</p>
                  </div>

                  {/* Education Section */}
                  <div className="resume-outer">
                    <h4>Education</h4>
                    {resume.educations?.map((edu, index) => (
                      <div className="resume-block" key={index}>
                        <div className="inner">
                          <div className="timeline">
                            <span className="icon">{edu.school}</span>
                          </div>
                          <div className="content-box">
                            <h4>{edu.level.name}</h4>
                            <span className="year">
                              {edu.start_date} - {edu.end_date}
                            </span>
                            <p>{edu.description}</p>
                            <p className="text">{edu.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Work and Experience Section */}
                  <div className="resume-outer">
                    <h4>Work & Experience</h4>
                    {resume.experiences?.map((exp, index) => (
                      <div className="resume-block" key={index}>
                        <div className="inner">
                          <div className="timeline">
                            <span className="icon">{exp.company}</span>
                          </div>
                          <div className="content-box">
                            <h4>{exp.position}</h4>
                            <span className="year">
                              {exp.start_date} - {exp.end_date || "Present"}
                            </span>
                            <p>{exp.company}</p>
                            <p className="text">{exp.short_description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    <div className="widget-content">
                      <ul className="job-overview"></ul>
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

export default dynamic(() => Promise.resolve(CandidateSingleClient), { ssr: false });
