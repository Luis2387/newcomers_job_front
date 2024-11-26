'use client';

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import JobService from "@/services/JobService"; 
import Link from "next/link";
import Image from "next/image";

const FilterJobsBox = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('q');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const jobData = await JobService.searchJobs(searchTerm);
        setJobs(jobData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchJobs();
    }
  }, [searchTerm]);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  if (jobs.length === 0) {
    return <p>No jobs found.</p>;
  }

  return (
    <>
      <div className="ls-switcher">
        <div className="show-result">
          <div className="text">
            Showing <strong>{jobs.length}</strong> jobs for "{searchTerm}"
          </div>
        </div>
      </div>
      {/* End top filter bar box */}

      {jobs.map((job) => (
        <div className="job-block" key={job.id}>
          <div className="inner-box">
            <div className="content">              
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
                <li>
                  <span className="icon flaticon-clock-3"></span>
                  {new Date(job.date_posted).toLocaleDateString()}
                </li>
                <li>
                  <span className="icon flaticon-money"></span>
                  {`${job.min_salary} - ${job.max_salary}`}
                </li>
              </ul>
              <ul className="job-other-info">
                {/* <li className="time">
                  {job.job_type.name}
                </li>*/}
                <li className="privacy">
                  {job.experience_level}
                </li>
                {/*<li className="required">
                  {job.category.name}
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FilterJobsBox;
