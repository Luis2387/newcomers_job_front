import React, { useState, useEffect } from "react";
import resumeService from "@/services/resumeService";
import Education from "./Education";
import Experience from "./Experiences";
import Skills from "./Skills";

const ResumeForm = () => {
  const [resumeData, setResumeData] = useState({
    candidate_skills: [],
    educations: [],
    experiences: [],
  });

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await resumeService.getResume();
        setResumeData(data);
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    fetchResume();
  }, []);

  const handleSave = async (event) => {
  event.preventDefault();
  console.log("Datos enviados al backend:", resumeData);
  try {
    if (resumeData.id) {
      await resumeService.updateResume(resumeData.id, resumeData);
      //setResumeData(updatedData);
      console.log("Data updated successfully");
    } else {
      console.error("No resume ID found for updating");
    }
  } catch (error) {
    console.error("Error updating data:", error);
  }
};



  return (
    <form className="default-form" onSubmit={handleSave}>
      <div className="row">
        <div className="col-lg-12">
          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>Education</h4>
              </div>
              <div className="widget-content">
                <Education educations={resumeData.educations} setResumeData={setResumeData} />
              </div>
            </div>
          </div>

          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>Skills</h4>
              </div>
              <div className="widget-content">
                <Skills skills={resumeData.candidate_skills} setResumeData={setResumeData} />
              </div>
            </div>
          </div>

          <div className="ls-widget">
            <div className="tabs-box">
              <div className="widget-title">
                <h4>Experience</h4>
              </div>
              <div className="widget-content">
                <Experience experiences={resumeData.experiences} setResumeData={setResumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group col-lg-12 col-md-12 text-right">
        <button className="theme-btn btn-style-one" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default ResumeForm;
