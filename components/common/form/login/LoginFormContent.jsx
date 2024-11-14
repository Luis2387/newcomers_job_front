'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import authService from '../../../../services/authService';
import Cookies from 'js-cookie';
import Link from 'next/link';

const FormContent = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const router = useRouter();

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
      const data = await authService.loginUser(formData);
      const { access, refresh } = data;

      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      Cookies.set('access_token', access, { path: '/' });

      document.querySelector('body > div.modal-backdrop.fade.show').style.display = 'none';
      document.body.style.overflow = 'auto';

      const profile = await authService.userTypeProfile(access);
      const userType = profile.user_type;

      localStorage.setItem('user_type', userType);
      Cookies.set('user_type', userType, { expires: 1 });

      if (userType === 'employer') {
        router.push('/employers-dashboard/dashboard');
      } else if (userType === 'jobseeker') {
        router.push('/candidates-dashboard/dashboard');
      } else {
        alert('Login failed');
      }

    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
      alert('Failed to login');
    }
  };

  return (
    <div className="form-inner">
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit">
            Log In
          </button>
        </div>
      </form>

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{' '}
          <Link href="#" className="call-modal signup" data-bs-toggle="modal" data-bs-target="#registerModal">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
