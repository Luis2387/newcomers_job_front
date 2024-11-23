"use client";

import React, { useState } from "react";
import MobileMenu from "../../../header/MobileMenu";
import Login from "../../../common/form/login/Login";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";

const EmployerDashboard = () => {
  const jobListings = [
    {
      id: 1,
      applicant: "John Doe",
      title: "Software Engineer",
      created: "Nov 10, 2024",
      status: "Interviewing",
    },
    {
      id: 2,
      applicant: "Jane Smith",
      title: "Data Analyst",
      created: "Nov 15, 2024",
      status: "Shortlisted",
    },
    {
      id: 3,
      applicant: "Alice Johnson",
      title: "Product Manager",
      created: "Nov 12, 2024",
      status: "Hired",
    },
  ];

  const [jobStatuses, setJobStatuses] = useState(
    jobListings.reduce((acc, job) => {
      acc[job.id] = job.status;
      return acc;
    }, {})
  );

  const handleStatusChange = (jobId, newStatus) => {
    setJobStatuses((prevStatuses) => ({
      ...prevStatuses,
      [jobId]: newStatus,
    }));
  };

  // Styling for the "My Job Listings" table to match the existing dashboard aesthetic
  const styles = {
    tableContainer: {
      marginTop: "30px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    tableHeader: {
      backgroundColor: "#f8f9fa",
      fontWeight: "bold",
      fontSize: "14px",
      padding: "12px",
      textAlign: "left",
      borderBottom: "2px solid #ddd",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
    },
    tableCell: {
      padding: "12px",
      fontSize: "14px",
    },
    dropdown: {
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      backgroundColor: "#fff",
    },
    actionLink: {
      color: "#007bff",
      textDecoration: "none",
      cursor: "pointer",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "15px",
    },
  };

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* Header */}
      <Login />
      <DashboardCandidatesHeader />
      <MobileMenu />
      <DashboardCandidatesSidebar />

      {/* Dashboard */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          {/* Breadcrumb */}
          <BreadCrumb title="Employer Dashboard" />

          {/* Collapsible sidebar button */}
          <MenuToggler />

          {/* Job Listings Table Section */}
          <div style={styles.tableContainer}>
            <h3 style={styles.sectionTitle}>My Job Listings</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Applicant</th>
                  <th style={styles.tableHeader}>Job Title</th>
                  <th style={styles.tableHeader}>Date Created</th>
                  <th style={styles.tableHeader}>Status</th>
                  <th style={styles.tableHeader}>Action</th>
                </tr>
              </thead>
              <tbody>
                {jobListings.map((job) => (
                  <tr key={job.id} style={styles.tableRow}>
                    <td style={styles.tableCell}>{job.applicant}</td>
                    <td style={styles.tableCell}>{job.title}</td>
                    <td style={styles.tableCell}>{job.created}</td>
                    <td style={styles.tableCell}>
                      <select
                        style={styles.dropdown}
                        value={jobStatuses[job.id]}
                        onChange={(e) => handleStatusChange(job.id, e.target.value)}
                      >
                        <option value="Under Review">Under Review</option>
                        <option value="Interviewing">Interviewing</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Hired">Hired</option>
                      </select>
                    </td>
                    <td style={styles.tableCell}>
                      <a href={`/candidates-single-v1/${job.id}`} style={styles.actionLink}>
                        Click on Profile
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployerDashboard;
