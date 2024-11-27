"use client";

import React, { useEffect, useState } from "react";
import MobileMenu from "../../../header/MobileMenu";
import Login from "../../../common/form/login/Login";
import DashboardHeader from "../../../header/DashboardHeader";
import BreadCrumb from "../../BreadCrumb";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import MenuToggler from "../../MenuToggler";
import ApplicationService from "@/services/ApplicationService"; 
import { useSearchParams } from "next/navigation";

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [jobStatuses, setJobStatuses] = useState({});
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        if (jobId) {
          const data = await ApplicationService.getJobApplicants(jobId);
          setApplicants(data);

          const initialStatuses = data.reduce((acc, app) => {
            acc[app.id] = app.status;
            return acc;
          }, {});
          setJobStatuses(initialStatuses);
        }
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchApplicants();
  }, [jobId]);


  const handleStatusChange = async (applicationId, newStatus) => {
  try {
    await ApplicationService.updateApplicationStatus(applicationId, newStatus);
    setJobStatuses((prevStatuses) => ({
      ...prevStatuses,
      [applicationId]: newStatus,
    }));
    alert("Application status updated successfully");
  } catch (error) {
    console.error("Error updating application status:", error);
    alert("Failed to update application status. Please try again.");
  }
};


  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      <Login />
      <DashboardHeader />
      <MobileMenu />
      <DashboardEmployerSidebar />

      {/* Dashboard */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Manage Applications" />
          <MenuToggler />

          {/* Job Listings Table Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="widget-title">
                  <h4>List of applicants for the Job</h4>
                </div>
                <div className="widget-content">
                  <div className="table-outer">
                    <table className="default-table manage-job-table">
                      <thead>
                        <tr>
                          <th>Applicant</th>
                          <th>Job Title</th>
                          <th>Date Applied</th>
                          <th>Status</th>
                          <th>Profile</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applicants.length > 0 ? (
                          applicants.map((application) => (
                            <tr key={application.id}>
                              <td>{`${application.jobseeker.user.first_name} ${application.jobseeker.user.last_name}`}</td>
                              <td>{application.job.title}</td>
                              <td>
                                {new Date(application.application_date).toLocaleDateString()}
                              </td>
                              <td>
                                <select
                                  className="form-select"
                                  value={jobStatuses[application.id]}
                                  onChange={(e) =>
                                    handleStatusChange(application.id, e.target.value)
                                  }
                                >
                                  <option value="Under Review">Applied</option>
                                  <option value="Under Review">Under Review</option>
                                  <option value="Interviewing">Interviewing</option>
                                  <option value="Shortlisted">Shortlisted</option>
                                  <option value="Hired">Hired</option>
                                </select>
                              </td>
                              <td>
                                <div className="option-box">
                                  <ul className="option-list">
                                    <li>
                                      <a
                                        href={`/candidates-single/${application.jobseeker_profile_id}`}
                                        data-text="View Profile"
                                        className="action-button"
                                      >
                                        <span className="la la-eye"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5">No applicants found.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* End ls-widget */}
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* End Dashboard */}
    </div>
  );
};

export default Applicants;
