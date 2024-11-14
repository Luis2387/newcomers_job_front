"use client";

import { useState, useEffect } from "react";
import JobSeekerService from "@/services/JobSeekerService";
import { useRouter } from 'next/navigation';

const JobSeekerFormInfoBox = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    phone: "",
    email: "",
    website: "",
    profile_description: "",
    linkedin: "",
    location: "",
  });

  // Fetching profile data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await JobSeekerService.getProfile();
        setFormValues({
          phone: profileData.phone || "",
          email: profileData.email || "",
          website: profileData.website || "",
          profile_description: profileData.profile_description || "",
          linkedin: profileData.linkedin || "",
          location: profileData.location || "",
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await JobSeekerService.updateProfile(formValues);
      alert("Profile updated successfully");
      router.push('/candidates-dashboard/my-profile');
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile.");
    }
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Phone */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Please enter your phone number"
            value={formValues.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Email */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your E-mail"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Website */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input
            type="text"
            name="website"
            placeholder="Please enter your website"
            value={formValues.website}
            onChange={handleInputChange}
          />
        </div>

        {/* Location */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Please enter your address"
            value={formValues.location}
            onChange={handleInputChange}
          />
        </div>

        {/* LinkedIn */}
        <div className="form-group col-lg-6 col-md-12">
          <label>LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            placeholder="www.linkedin.com/in/yourprofile"
            value={formValues.linkedin}
            onChange={handleInputChange}
          />
        </div>

        {/* Profile Description */}
        <div className="form-group col-lg-12 col-md-12">
          <label>About Me</label>
          <textarea
            name="profile_description"
            placeholder="Describe about yourself"
            value={formValues.profile_description}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one" type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default JobSeekerFormInfoBox;
