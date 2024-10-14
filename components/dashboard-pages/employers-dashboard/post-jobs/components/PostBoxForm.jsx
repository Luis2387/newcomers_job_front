"use client";

import Map from "../../../Map";
import Select from "react-select";
import { useState, useRef } from "react";

const PostBoxForm = () => {
  // Manage form values
  const [formValues, setFormValues] = useState({
    minSalary: "",
    maxSalary: "",
  });

  // Create refs for salary fields
  const minSalaryRef = useRef(null);
  const maxSalaryRef = useRef(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update input values without immediate validation
    setFormValues({ ...formValues, [name]: value });
  };

  // Check if the value is a positive number on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Check if it's a positive number
    if (isNaN(value) || Number(value) <= 0) {
      alert(
        `${
          name === "minSalary" ? "Min" : "Max"
        } Salary must be a positive number.`
      );
      setFormValues({ ...formValues, [name]: "" }); // Clear the field
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    // Check if maxSalary is a positive number
    if (
      !formValues.maxSalary ||
      isNaN(formValues.maxSalary) ||
      Number(formValues.maxSalary) <= 0
    ) {
      alert("Max Salary must be a positive number");
      maxSalaryRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Ensure maxSalary is greater than or equal to minSalary
    if (Number(formValues.maxSalary) < Number(formValues.minSalary)) {
      alert("Max Salary should be greater than or equal to Min Salary");
      maxSalaryRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Job Title */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title</label>
          <input type="text" name="jobTitle" placeholder="Title" required />
        </div>

        {/* Job Description */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Description</label>
          <textarea
            name="jobDescription"
            placeholder="Please enter job description"
            required
          />
        </div>

        {/* Skills */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Skills</label>
          <Select
            defaultValue={[skills[1]]}
            isMulti
            name="specialisms"
            options={skills}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        {/* Experience Level */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Experience Level</label>
          <input
            type="text"
            name="experienceLevel"
            placeholder="How long does it take for a candidate to acquire the required skills?"
            required
          />
        </div>

        {/* Category */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Category</label>
          <select
            name="category"
            className="chosen-single form-select"
            required
          >
            <option value="">Select</option>
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
          <select name="type" className="chosen-single form-select" required>
            <option value="">Select</option>
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
            onBlur={handleBlur} // Check when input loses focus
            required
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
            onBlur={handleBlur} // Check when input loses focus
            required
          />
        </div>

        {/* Education Level */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Education Level</label>
          <select
            name="education"
            className="chosen-single form-select"
            required
          >
            <option value="">Select</option>
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
        <div className="form-group col-lg-12 col-md-12">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Please enter the address."
            required
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
