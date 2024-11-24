"use client";

import { useEffect, useState } from 'react';
import ApplicationService from '@/services/ApplicationService';

const JobListingsTable = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await ApplicationService.getApplications();
        setJobs(data);
      } catch (err) {
        setError('Failed to load applications');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <p>Loading applications...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Job Applications</h4>
      </div>
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Application Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.job.employer.company_name}</td>
                    <td>{job.job.title}</td>
                    <td>{job.job.location}</td>
                    <td>{new Date(job.application_date).toLocaleDateString()}</td>
                    <td>{job.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No applications found.</td>
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
