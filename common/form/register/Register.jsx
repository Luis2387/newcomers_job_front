
'use client'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CandidateFormContent from "./CandidateFormContent"; // For candidates
import EmployerFormContent from "./EmployerFormContent"; // For employers
import Link from "next/link";

const Register = () => {
  return (
    <div className="form-inner">
      <h3>Join for free!</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> Candidate
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <CandidateFormContent />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <EmployerFormContent />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link
            href="#"
            className="call-modal login"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            data-bs-target="#loginPopupModal"
          >
            LogIn
          </Link>
        </div>       
        
      </div>
      
    </div>
  );
};

export default Register;
