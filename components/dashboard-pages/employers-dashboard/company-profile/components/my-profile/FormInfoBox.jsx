"use client";

import Select from "react-select";
import { useState, useEffect } from "react";
import EmployerService from "@/services/EmployerService";
import JobService from "@/services/JobService";
import { useRouter } from 'next/navigation';

const FormInfoBox = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    id: null,
    phone: "",
    email: "",
    website: "",
    profile_description: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    tiktok: "",
    location: "",
    category: "",
  });

  const [categoryOptions, setCategoryOptions] = useState([]);

  // Fetching profile data and categories on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await EmployerService.getProfile();
        setFormValues({
          id: profileData.id || null,
          phone: profileData.phone || "",
          email: profileData.email || "",
          website: profileData.website || "",
          profile_description: profileData.profile_description || "",
          linkedin: profileData.linkedin || "",
          facebook: profileData.facebook || "",
          twitter: profileData.twitter || "",
          tiktok: profileData.tiktok || "",
          location: profileData.location || "",
          category: profileData.category || "",
        });

        // Fetch categories
        const categories = await JobService.getCategories();
        setCategoryOptions(categories.map(category => ({
          value: category.id,
          label: category.name,
        })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCategoryChange = (selectedOption) => {
    setFormValues({ ...formValues, category: selectedOption ? selectedOption.value : "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await EmployerService.updateProfile(formValues);
      alert("Profile updated successfully");
      router.push('/employers-dashboard/company-profile');
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile.");
    }
  };

  const handleViewPublicProfile = () => {
    router.push(`/employers-single/${formValues.id}`);
  };

  return (
    <>
      <div className="form-header d-flex justify-content-between align-items-center mb-4">
        <h4>Edit Company Profile</h4>
        <button
          className="theme-btn btn-style-one"
          onClick={handleViewPublicProfile}
        >
          View Public Profile
        </button>
      </div>
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
            required
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
            required
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
            required
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
            required
          />
        </div>

        {/* Category */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Category</label>
          <select
            name="category"
            value={formValues.category || ''}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select Category</option>
            {categoryOptions.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Social Media Fields */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Facebook</label>
          <input
            type="text"
            name="facebook"
            placeholder="www.facebook.com/yourprofile"
            value={formValues.facebook}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Twitter</label>
          <input
            type="text"
            name="twitter"
            placeholder="www.twitter.com/yourprofile"
            value={formValues.twitter}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            placeholder="www.linkedin.com/in/yourprofile"
            value={formValues.linkedin}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>TikTok</label>
          <input
            type="text"
            name="tiktok"
            placeholder="www.tiktok.com/@yourprofile"
            value={formValues.tiktok}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Profile Description */}
        <div className="form-group col-lg-12 col-md-12">
          <label>About Company</label>
          <textarea
            name="profile_description"
            placeholder="Describe about your company"
            value={formValues.profile_description}
            onChange={handleInputChange}
            required
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
    </>
  );
};

export default FormInfoBox;
