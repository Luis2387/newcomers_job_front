'use client';

import AddPortfolio from "./AddPortfolio";
import Education from "./Education";
import Experiences from "./Experiences";

const index = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder=""></textarea>
        </div>

        <div className="col-lg-12">
          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>Education</h4>
              </div>
              <Education />
            </div>
          </div>
          
          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>Experiences</h4>
              </div>
              <div className="widget-content">
                <Experiences />
              </div>
            </div>
          </div>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <AddPortfolio />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default index;