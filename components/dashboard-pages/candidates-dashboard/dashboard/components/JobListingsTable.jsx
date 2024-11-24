"use client";

import { useState } from 'react';

const JobListingsTable = () => {
  const [jobs] = useState([
    { id: 1, company: 'Company A', title: 'Developer', location: 'New York', date_posted: '2024-11-07', status: 'Applied' },
    { id: 2, company: 'Company B', title: 'Designer', location: 'San Francisco', date_posted: '2024-11-06', status: 'Under Review' },
  ]);

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Job Listings</h4>
        <div className="chosen-outer">
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 Years</option>
          </select>
        </div>
      </div>
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Title</th>
                <th>Location</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.company}</td>
                    <td>{job.title}</td>
                    <td>{job.location}</td>
                    <td>{new Date(job.date_posted).toLocaleDateString()}</td>
                    <td>{job.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No jobs found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobListingsTable;