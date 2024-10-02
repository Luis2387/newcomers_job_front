import { useState } from 'react';
import authService from '../../../../services/authService';

const EmployerFormContent = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    password: '',
    user_type: 'employer',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await authService.registerUser(formData);
      if (response) {
        alert('Company registered successfully');
      }
    } catch (error) {
      console.error('Error registering company:', error.response?.data || error.message);
      alert('Failed to register company');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="user_type" value="employer" />
      
      {/* Company Name */}
      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
      </div>

      {/* Email Address */}
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />
      </div>

      {/* Password */}
      <div className="form-group">
        <label>Password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </div>

      {/* Register Button */}
      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default EmployerFormContent;

