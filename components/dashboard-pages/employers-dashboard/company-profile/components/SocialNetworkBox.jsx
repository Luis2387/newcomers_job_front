"use client";

const SocialNetworkBox = () => {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    alert("Form submitted successfully!");
  };

  return (
    <div>
      <form className="default-form" onSubmit={handleSubmit}>
        <div className="row">
          {/* Facebook Input */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Facebook</label>
            <input
              type="text"
              name="facebook"
              placeholder="www.facebook.com/Invision"
            />
          </div>

          {/* Twitter Input */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Twitter</label>
            <input type="text" name="twitter" placeholder="" />
          </div>

          {/* LinkedIn Input */}
          <div className="form-group col-lg-6 col-md-12">
            <label>LinkedIn</label>
            <input type="text" name="linkedin" placeholder="" />
          </div>

          {/* Google Plus Input */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Google Plus</label>
            <input type="text" name="googlePlus" placeholder="" />
          </div>

          {/* Submit Button */}
          <div className="form-group col-lg-6 col-md-12">
            <button type="submit" className="theme-btn btn-style-one">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialNetworkBox;