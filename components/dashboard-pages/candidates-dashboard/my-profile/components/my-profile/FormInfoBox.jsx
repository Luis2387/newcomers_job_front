
'use client'

import Select from "react-select";

const FormInfoBox = () => {
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <form action="#" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="name"
            placeholder="0 123 456 7890"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input
            type="text"
            name="name"
            placeholder="creativelayers"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input
            type="text"
            name="name"
            placeholder="www.jerome.com"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <input type="text" name="name" placeholder="5 Years" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Age</label>
          <input
            type="text"
            name="name"
            placeholder="27"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Education Levels</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>PhD</option>
            <option>Master's Degree</option>
            <option>Bachelor's Degree</option>
            <option>Associate's Degree</option>
            <option>High School</option>
            <option>Middle School</option>
          </select>
        </div>
        

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Languages</label>
          <input
            type="text"
            name="name"
            placeholder="English, Turkish"
            required
          />
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Categories </label>
          <Select
            defaultValue={[catOptions[1]]}
            isMulti
            name="colors"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

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

          {/* Tiktok Input */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Tiktok</label>
            <input type="text" name="googlePlus" placeholder="" />
          </div>


        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>About me</label>
          <textarea placeholder=""></textarea>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
