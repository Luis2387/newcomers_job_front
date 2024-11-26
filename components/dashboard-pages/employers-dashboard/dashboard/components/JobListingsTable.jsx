"use client";

import { useState, useEffect } from 'react';
import JobService from '@/services/JobService';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const JobListingsTable = () => {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await JobService.getEmployerJobs();
        setJobs(jobData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleDeleteJob = async (jobId) => {
    const confirmed = window.confirm("Are you sure you want to delete this job?");
    if (confirmed) {
      try {
        await JobService.deleteJob(jobId);
        alert("Job deleted successfully");
        setJobs(jobs.filter(job => job.id !== jobId));
      } catch (error) {
        alert("Failed to delete job.");
      }
    }
  };


  const handleViewApplicants = (jobId) => {
  router.push(`/employers-dashboard/manage-applications?jobId=${jobId}`);
  };


  const handleEditJob = (jobId) => {
    router.push(`/employers-dashboard/post-jobs?id=${jobId}`);
  };

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>List of published Jobs</h4>
        
      </div>
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Title</th>                
                <th>Created</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.id}>
                    <td>
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="">
                            
                            <h4>
                                <Link href={`/job-single/${job.id}`}>
                                  {job.title}
                                </Link>                            
                            </h4>
                            
                            <ul className="job-info">                              
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                {job.location}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* <!-- <td className="applied">
                      <a href="#">-</a>
                    </td> --> */}                    
                    <td>
                      {new Date(job.date_posted).toLocaleDateString()} <br />                      
                    </td>
                    <td className="status">{job.active ? "Active" : "Inactive"}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button onClick={() => handleViewApplicants(job.id)} data-text="View Applicants">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button onClick={() => handleEditJob(job.id)} data-text="Edit Job">
                              <span className="la la-pencil"></span>
                            </button>
                          </li>
                          <li>
                            <button onClick={() => handleDeleteJob(job.id)} data-text="Delete Job">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
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