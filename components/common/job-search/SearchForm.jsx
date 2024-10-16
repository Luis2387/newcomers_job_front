'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      router.push(`/job-list?q=${searchTerm}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center justify-content-md-between">
        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-9">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="searchTerm"
            placeholder="Job title, keywords, or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-auto">
          <button
            type="submit"
            className="theme-btn btn-style-two"
          >
            Find Jobs
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
