"use client";

import Select from "react-select";
import { useState, useRef, useEffect } from "react";
import JobService from '@/services/JobService';

const PostBoxForm = () => {
  const [formValues, setFormValues] = useState({
    jobTitle: "",
    jobDescription: "",
    experienceLevel: "",
    category: "",
    type: "",
    minSalary: "",
    maxSalary: "",
    education: "",
    location: "",
    skills: [],
  });

  const [skillsOptions, setSkillsOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [jobTypeOptions, setJobTypeOptions] = useState([]);
  const [educationLevelOptions, setEducationLevelOptions] = useState([]);
  const minSalaryRef = useRef(null);
  const maxSalaryRef = useRef(null);

  // Fetching options for select inputs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const skills = await JobService.getSkills();
        const categories = await JobService.getCategories();
        const jobTypes = await JobService.getJobTypes();
        const educationLevels = await JobService.getEducationLevels();

        setSkillsOptions(skills.map(skill => ({ value: skill.id, label: skill.name })));
        setCategoryOptions(categories.map(category => ({ value: category.id, label: category.name })));
        setJobTypeOptions(jobTypes.map(jobType => ({ value: jobType.id, label: jobType.name })));
        setEducationLevelOptions(educationLevels.map(level => ({ value: level.id, label: level.name })));
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData();
  }, []); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSkillsChange = (selectedOptions) => {
    const skills = selectedOptions.map(option => option.value);
    setFormValues({ ...formValues, skills });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (isNaN(value) || Number(value) <= 0) {
      alert(`${name === "minSalary" ? "Min" : "Max"} Salary must be a positive number.`);
      setFormValues({ ...formValues, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formValues.minSalary || isNaN(formValues.minSalary) || Number(formValues.minSalary) <= 0) {
      alert("Min Salary must be a positive number.");
      minSalaryRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (!formValues.maxSalary || isNaN(formValues.maxSalary) || Number(formValues.maxSalary) <= 0) {
      alert("Max Salary must be a positive number.");
      maxSalaryRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (Number(formValues.maxSalary) < Number(formValues.minSalary)) {
      alert("Max Salary must be greater than or equal to Min Salary.");
      maxSalaryRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const jobData = {
      title: formValues.jobTitle,
      description: formValues.jobDescription,
      experience_level: formValues.experienceLevel,
      min_salary: formValues.minSalary,
      max_salary: formValues.maxSalary,
      location: formValues.location,
      job_type: formValues.type,
      category: formValues.category,
      education_level: formValues.education,
      skills: formValues.skills,
    };

    try {
      await JobService.createJob(jobData);
      alert("Job created successfully");
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Error creating job.");
    }
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
            required
          />
        </div>

        {/* Job Description */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Description</label>
          <textarea
            name="jobDescription"
            placeholder="Please enter job description"
            value={formValues.jobDescription}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Skills */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Skills</label>
          <Select
            isMulti
            name="skills"
            options={skillsOptions}
            onChange={handleSkillsChange}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

        {/* Experience Level */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Experience Level</label>
          <input
            type="text"
            name="experienceLevel"
            placeholder="Experience level required"
            value={formValues.experienceLevel}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Category */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Category</label>
          <select
            name="category"
            value={formValues.category}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select</option>
            {categoryOptions.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Job Type */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Job Type</label>
          <select
            name="type"
            value={formValues.type}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select</option>
            {jobTypeOptions.map(jobType => (
              <option key={jobType.value} value={jobType.value}>
                {jobType.label}
              </option>
            ))}
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
            onBlur={handleBlur}
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
            onBlur={handleBlur}
            required
          />
        </div>

        {/* Education Level */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Education Level</label>
          <select
            name="education"
            value={formValues.education}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select</option>
            {educationLevelOptions.map(level => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Please enter the address/city/country"
            value={formValues.location}
            onChange={handleInputChange}
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

