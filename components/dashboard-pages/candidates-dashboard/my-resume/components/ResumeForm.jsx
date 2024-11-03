
import React from "react";

const ResumeForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <form>
          {/* Add form fields here, such as name, experience, skills, etc. */}
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Experience:
            <textarea name="experience" />
          </label>
          {/* Add more fields as needed */}
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
