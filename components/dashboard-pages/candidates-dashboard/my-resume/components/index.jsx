'use client';



import Education from "./Education";
import Experience from "./Experiences";
import Languages from "./Languages";
import Skills from "./Skills";

const index = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        

        <div className="col-lg-12">
          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>Education</h4>
              </div>
              <div className="widget-content">
              <Education />
            </div>
            </div>
          </div>

        <div className="ls-widget">
          <div className="tabs-box">
            <div className="widget-title">
              <h4> Languages</h4>
            </div>
            <div className="widget-content">
            <Languages/>
            </div>

          </div>
        </div>
        <div className= "ls-widget">
          <div className="tabs-box">
            <div className="widget-title">
              <h4>  Skills</h4>
            </div>
            <div className="widget-content">
            <Skills/>
            </div>

          </div>
        </div>

          
          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>Experience</h4>
              </div>
              <div className="widget-content">
                <Experience />
              </div>
            </div>

      
          </div>
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