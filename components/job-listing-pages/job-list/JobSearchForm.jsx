import SearchBox from "../components/SearchBox";

const JobSearchForm = () => {
  return (
    <div className="job-search-form">
      <div className="row">
        <div className="form-group col-lg-4 col-md-12 col-sm-12">
          <SearchBox />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
          <button type="submit" className="theme-btn btn-style-one">
            Find Jobs
          </button>
        </div>
        {/* <!-- Form Group --> */}
      </div>
    </div>
  );
};

export default JobSearchForm;
