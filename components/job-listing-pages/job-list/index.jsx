import FilterJobsBox from "./FilterJobsBox";
import JobSearchForm from "./JobSearchForm";
import FilterSidebar from "./FilterSidebar";
import Login from "@/components/common/form/login/Login";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaultHeader";
import MobileMenu from "@/components/header/MobileMenu";


const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Login />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="page-title style-two">
        <div className="auto-container">
          <JobSearchForm />
          {/* <!-- Job Search Form --> */}
        </div>
      </section>
      {/* <!--End Page Title--> */}

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            {/*<div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="filter-sidebar"
              aria-labelledby="offcanvasLabel"
            >
              <div className="filters-column hide-left">
                <FilterSidebar />
              </div>
            </div>
            

            <div className="filters-column hidden-1023 col-lg-4 col-md-12 col-sm-12">
              <FilterSidebar />
            </div>
             <!-- End Filters Column --> */}

            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="ls-outer">
                <FilterJobsBox />
                {/* <!-- ls Switcher --> */}
              </div>
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
      {/* <!--End Listing Page Section --> */}
    </>
  );
};

export default index;
