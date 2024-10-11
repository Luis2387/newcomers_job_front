"use client";

import Map from "../../../Map";
import Select from "react-select";
import { useState, useRef } from "react";

const PostBoxForm = () => {
  // check empty input
  const [formValues, setFormValues] = useState({
    jobTitle: "",
    jobDescription: "",
    experienceLevel: "",
    minSalary: "",
    maxSalary: "",
    location: "",
  });

  // check empty input
  const jobTitleRef = useRef(null);
  const jobDescriptionRef = useRef(null);
  const experienceLevelRef = useRef(null);
  const minSalaryRef = useRef(null);
  const maxSalaryRef = useRef(null);
  const locationRef = useRef(null);

  const skills = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Management", label: "Management" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  // check empty input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if jobTitle is empty
    if (!formValues.jobTitle) {
      alert("Please fill out Job Title");
      jobTitleRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Check if jobDescription is empty
    if (!formValues.jobDescription) {
      alert("Please fill out Job Description");
      jobDescriptionRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Check if experienceLevel is empty
    if (!formValues.experienceLevel) {
      alert("Please fill out Experience Level");
      experienceLevelRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Check if Category is selected (not 'Select')
    const categorySelect = document.querySelector('select[name="category"]');
    if (categorySelect.value === "Select") {
      alert("Please select a valid Category");
      categorySelect.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Check if Type is selected (not 'Select')
    const typeSelect = document.querySelector('select[name="type"]');
    if (typeSelect.value === "Select") {
      alert("Please select a valid Type");
      typeSelect.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Check if minSalary is a positive number
    if (
      !formValues.minSalary ||
      isNaN(formValues.minSalary) ||
      Number(formValues.minSalary) <= 0
    ) {
      alert("Min Salary must be a positive number");
      minSalaryRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Check if maxSalary is a positive number and greater than minSalary
    if (
      !formValues.maxSalary ||
      isNaN(formValues.maxSalary) ||
      Number(formValues.maxSalary) <= 0
    ) {
      alert("Max Salary must be a positive number");
      maxSalaryRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (Number(formValues.maxSalary) < Number(formValues.minSalary)) {
      alert("Max Salary should be greater than Min Salary");
      maxSalaryRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Check if Education Level is selected (not 'Select')
    const educationSelect = document.querySelector('select[name="education"]');
    if (educationSelect.value === "Select") {
      alert("Please select a valid Education Level");
      educationSelect.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Check if location is empty
    if (!formValues.location) {
      alert("Please fill out Location");
      locationRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    alert("Form submitted successfully!");
    console.log("Form Submitted", formValues);
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Job Title */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Title"
            value={formValues.jobTitle}
            onChange={handleInputChange}
            ref={jobTitleRef}
          />
        </div>

        {/* Job Description */}
        <div className="form-group col-lg-12 col-md-12" ref={jobDescriptionRef}>
          <label>Job Description</label>
          <textarea
            name="jobDescription"
            placeholder="Please enter job description"
            value={formValues.jobDescription}
            onChange={handleInputChange}
          />
        </div>

        {/* Skills */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Skills</label>
          <Select
            defaultValue={[skills[2]]}
            isMulti
            name="specialisms"
            options={skills}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        {/* Experience Level */}
        <div className="form-group col-lg-6 col-md-12" ref={experienceLevelRef}>
          <label>Experience Level</label>
          <input
            type="text"
            name="experienceLevel"
            placeholder="How long does it take for a candidate to acquire the required skills?"
            value={formValues.experienceLevel}
            onChange={handleInputChange}
          />
        </div>

        {/* Category */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Category</label>
          <select name="category" className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        {/* Type */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Type</label>
          <select name="type" className="chosen-single form-select">
            <option>Select</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Temporary</option>
            <option>Freelance</option>
            <option>Internship</option>
          </select>
        </div>

        {/* Min Salary */}
        <div className="form-group col-lg-6 col-md-12" ref={minSalaryRef}>
          <label>Min Salary</label>
          <input
            type="text"
            name="minSalary"
            placeholder="Min Salary"
            value={formValues.minSalary}
            onChange={handleInputChange}
          />
        </div>

        {/* Max Salary */}
        <div className="form-group col-lg-6 col-md-12" ref={maxSalaryRef}>
          <label>Max Salary</label>
          <input
            type="text"
            name="maxSalary"
            placeholder="Max Salary"
            value={formValues.maxSalary}
            onChange={handleInputChange}
          />
        </div>

        {/* Education Level */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Education Level</label>
          <select name="education" className="chosen-single form-select">
            <option>Select</option>
            <option>Doctorate / PhD</option>
            <option>Master's Degree</option>
            <option>Bachelor's Degree</option>
            <option>Associate Degree</option>
            <option>High School Diploma</option>
            <option>Secondary School Certificate</option>
            <option>Some High School / No Diploma</option>
          </select>
        </div>

        {/* Location */}
        <div className="form-group col-lg-12 col-md-12" ref={locationRef}>
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Please enter the address."
            value={formValues.location}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
