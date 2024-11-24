import MobileMenu from "../../../header/MobileMenu";
import Login from "../../../common/form/login/Login";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";
import JobListingsTable from "./components/JobListingsTable";

const Index = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <Login />
      {/* End Login Popup Modal */}

      <DashboardCandidatesHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="List of Applied jobs" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          {/* <div className="row">
            <TopCardBlock />
          </div> */}
          {/* End .row top card block */}

          <div className="row">
            {/* <div className="col-xl-7 col-lg-12"> */}
              {/* <!-- Graph widget --> */}
              {/* <div className="graph-widget ls-widget"> */}
                {/* <ProfileChart /> */}
              {/* </div> */}
              {/* End profile chart */}
            {/* </div> */}
            {/* End .col */}

            <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable />
              </div>
            </div>
          </div>
            {/* End .col */}

            {/* <div className="col-lg-12"> */}
              {/* <!-- applicants Widget --> */}
              {/* <div className="applicants-widget ls-widget"> */}
                {/* <div className="widget-title"> */}
                  {/* <h4>Jobs Applied Recently</h4> */}
                {/* </div> */}
                {/* <div className="widget-content"> */}
                  {/* <div className="row"> */}
                    {/* <!-- Candidate block three --> */}

                    {/* <JobApplied /> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            {/* End .col */}
          </div>
          {/* End .row profile and notificatins */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      {/* <CopyrightFooter /> */}
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default Index;
