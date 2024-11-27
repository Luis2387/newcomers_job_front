'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
import JobService from "@/services/JobService";
import ApplicationService from "@/services/ApplicationService";
import Login from "@/components/common/form/login/Login";
import DefaulHeader from "@/components/header/DefaultHeader";
import MobileMenu from "@/components/header/MobileMenu";
import FooterDefault from "@/components/footer/common-footer";


const JobSingle = ({ params }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [categories, setCategories] = useState({});
  const [jobTypes, setJobTypes] = useState({});
  const [educationLevels, setEducationLevels] = useState({});
  const [skills, setSkills] = useState({});

  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const jobData = await JobService.getJob(id);        

        const [categoriesData, jobTypesData, educationLevelsData, skillsData] =
          await Promise.all([
            JobService.getCategories(),
            JobService.getJobTypes(),
            JobService.getEducationLevels(),
            JobService.getSkills(),
          ]);

        const categoriesMap = Object.fromEntries(
          categoriesData.map((item) => [item.id, item.name])
        );
        const jobTypesMap = Object.fromEntries(
          jobTypesData.map((item) => [item.id, item.name])
        );
        const educationLevelsMap = Object.fromEntries(
          educationLevelsData.map((item) => [item.id, item.name])
        );
        const skillsMap = Object.fromEntries(
          skillsData.map((item) => [item.id, `${item.name} - ${item.description}`])
        );

        jobData.category = categoriesMap[jobData.category] || "N/A";
        jobData.job_type = jobTypesMap[jobData.job_type] || "N/A";
        jobData.education_level =
          educationLevelsMap[jobData.education_level] || "N/A";
        jobData.skills = jobData.skills.map((id) => skillsMap[id] || "N/A");

        setCategories(categoriesMap);
        setJobTypes(jobTypesMap);
        setEducationLevels(educationLevelsMap);
        setSkills(skillsMap);
        setJob(jobData);

        const token = localStorage.getItem("access_token");
        setIsAuthenticated(!!token);
      } catch (error) {
        router.push("/404");
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  const handleApply = async () => {
    if (!isAuthenticated) {
      const loginModal = document.querySelector("#loginPopupModal");
      if (loginModal) {
        const bootstrapModal = new bootstrap.Modal(loginModal);
        bootstrapModal.show();
      }
      return;
    }

    try {
      await ApplicationService.createApplication({ job: id });
      alert("Application submitted successfully!");
      router.push('/candidates-dashboard/dashboard');
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting application.");
    }
  };

  return (
    <>
      {/* Header Span */}
      <span className="header-span"></span>

      <Login />
      {/* End Login Popup Modal */}
      {/* Header */}
      <DefaulHeader />
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Job Detail Section */}
      <section className="job-detail-section">
        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              {/* Job Details Column */}
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-block-outer">
                  <div className="job-block-seven style-two">
                    <div className="inner-box">
                      <div className="content">
                        <h4>{job?.title || "N/A"}</h4>

                        <ul className="job-info">
                          <li>
                            <span className="icon flaticon-briefcase"></span>
                            {job?.employer_profile?.company_name || "N/A"}
                          </li>
                          <li>
                            <span className="icon flaticon-map-locator"></span>
                            {job?.location || "N/A"}
                          </li>
                          <li>
                            <span className="icon flaticon-clock-3"></span>
                            {new Date(job?.date_posted).toLocaleDateString() || "N/A"}
                          </li>
                          <li>
                            <span className="icon flaticon-money"></span>
                            ${job?.min_salary || 0} - ${job?.max_salary || 0}
                          </li>
                        </ul>

                        <ul className="job-other-info">
                          <li className="time">{job?.job_type}</li>
                          <li className="required">{job?.experience_level}</li>
                          <li className="privacy">{job?.category}</li>
                          <li className="required">{job?.education_level}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Description and Skills */}
                <div className="job-detail">
                  <h4>Job Description</h4>
                  <p>{job?.description || "No description available"}</p>

                  <h4>Skills & Experience</h4>
                  <ul className="list-style-three">
                    {job?.skills?.length > 0 ? (
                      job.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))
                    ) : (
                      <li>No skills provided</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Company Info Sidebar */}
              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="btn-box">
                    <button
                      className="theme-btn btn-style-one"
                      onClick={handleApply}
                    >
                      Apply For Job
                    </button>
                  </div>

                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      <div className="company-title">
                        <h5 className="company-name">
                          {job?.employer_profile?.company_name || "N/A"}
                        </h5>
                        <a
                          href={`/employers-single/${job?.employer_profile?.id}`}
                          className="profile-link"
                        >
                          View company profile
                        </a>
                      </div>

                      <ul className="company-info">
                        <li>
                          Category:{" "}
                          <span>
                            {categories[job?.employer_profile?.category] || "N/A"}
                          </span>
                        </li>
                        <li>
                          Phone:{" "}
                          <span>{job?.employer_profile?.phone || "N/A"}</span>
                        </li>
                        <li>
                          Email:{" "}
                          <span>{job?.employer_profile?.email || "N/A"}</span>
                        </li>
                        <li>
                          Location:{" "}
                          <span>{job?.employer_profile?.location || "N/A"}</span>
                        </li>
                        <li>
                          Website:{" "}
                          <a href={job?.employer_profile?.website || "#"}>
                            {job?.employer_profile?.website || "N/A"}
                          </a>
                        </li>
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
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(JobSingle), {
  ssr: false,
});
