"use client";

const FormInfoBox = () => {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Use alert to notify user of successful form submission
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <form className="default-form" onSubmit={handleSubmit}>
        <div className="row">
          {/* <!-- Email address --> */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Email address</label>
            <input
              type="text"
              name="address"
              placeholder="Please enter your E-mail."
              required
            />
          </div>

          {/* <!-- Website --> */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Website</label>
            <input
              type="text"
              name="website"
              placeholder="www.invision.com"
              required
            />
          </div>

          {/* <!-- Phone --> */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="0 123 456 7890"
              required
            />
          </div>

          {/* <!-- Location --> */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Please enter your address."
              required
            />
          </div>

          {/* <!-- Est. Since --> */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Est. Since</label>
            <input
              type="text"
              name="established"
              placeholder="06.04.2020"
              required
            />
          </div>

          {/* <!-- Category --> */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Category</label>
            <select
              name="companyCategory"
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

          {/* <!-- About Company --> */}
          <div className="form-group col-lg-12 col-md-12">
            <label>About Company</label>
            <textarea placeholder=" " required></textarea>
          </div>

          {/* <!-- Submit --> */}
          <div className="form-group col-lg-6 col-md-12">
            <button type="submit" className="theme-btn btn-style-one">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormInfoBox;