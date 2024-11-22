import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const Experience = ({ experiences = [], setResumeData }) => {
  const [experienceList, setExperienceList] = useState(experiences);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    startDate: new Date(),
    endDate: new Date(),
    short_description: "",
  });

  useEffect(() => {
    // Synchronize experienceList with experiences from props
    setExperienceList(experiences);
  }, [experiences]);

  const openModal = (index = null) => {
  setEditingIndex(index);
  if (index !== null) {
    const experience = experienceList[index];
    setFormData({
      ...experience,
      startDate: experience.start_date ? new Date(experience.start_date) : new Date(),
      endDate: experience.end_date ? new Date(experience.end_date) : new Date(),
    });
  } else {
    setFormData({
      company: "",
      position: "",
      short_description: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  }
  setIsModalOpen(true);
};


  const saveExperience = () => {
  let updatedList;
  const formattedData = {
    ...formData,
    start_date: formData.startDate ? formData.startDate.toISOString().split("T")[0] : null,
    end_date: formData.endDate ? formData.endDate.toISOString().split("T")[0] : null,
  };

  if (editingIndex === null) {
    updatedList = [...experienceList, formattedData];
  } else {
    updatedList = experienceList.map((exp, i) => (i === editingIndex ? formattedData : exp));
  }

  setExperienceList(updatedList);
  setResumeData((prev) => ({ ...prev, experiences: updatedList }));
  setIsModalOpen(false);
};


  const CustomDatePicker = ({ placeholder, selectedDate, onChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="yyyy-MM-dd"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      customInput={
        <input
          type="text"
          placeholder={placeholder}
          style={styles.inputField}
          value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
          readOnly
        />
      }
    />
  );
  };

  const formatDate = (date, dbDate, pickerDate) => {
  
  if (dbDate) return dbDate;

  
  if (pickerDate instanceof Date) {
    return pickerDate.toISOString().split('T')[0];
  }

  
  return 'N/A';
  };

  const handleDateChange = (date, field) => {
  if (date) {
    date.setHours(0, 0, 0, 0);
    setFormData((prevData) => ({
      ...prevData,
      [field]: date,
    }));
  }
};


  const styles = {
    entry: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid #e0e0e0",
      cursor: "pointer",
      fontSize: "0.9rem",
    },
    item: {
      flex: "1",
      textAlign: "left",
    },
    label: {
      fontWeight: "600",
      marginRight: "5px",
      color: "#333",
    },
    value: {
      color: "#555",
    },
    addButton: {
      backgroundColor: "#4a90e2",
      color: "#fff",
      padding: "6px 14px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "0.85rem",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "450px",
      width: "100%",
    },
    inputField: {
      width: "calc(100% - 20px)",
      padding: "8px",
      margin: "8px 0",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "0.85rem",
    },
    saveButton: {
      padding: "6px 14px",
      backgroundColor: "#4a90e2",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "0.85rem",
    },
    cancelButton: {
      padding: "6px 14px",
      backgroundColor: "#d9534f",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "0.85rem",
    },
  };

  return (
    <div>
      {experienceList.map((experience, index) => (
        <div
          key={index}
          style={styles.entry}
          onClick={() => openModal(index)}
        >
          <div style={styles.item}>
            <span style={styles.label}>Company:</span>
            <span style={styles.value}>{experience.company}</span>
          </div>
          <div style={styles.item}>
            <span style={styles.label}>Position:</span>
            <span style={styles.value}>{experience.position}</span>
          </div>
          <div style={styles.item}>
            <span style={styles.label}>Short Description:</span>
            <span style={styles.value}>{experience.short_description}</span>
          </div>
          <div style={styles.item}>
            <span style={styles.label}>Start Date:</span>
            <span style={styles.value}>
              {formatDate(experience.start_date, experience.start_date, experience.startDate)}
            </span>
          </div>
          <div style={styles.item}>
            <span style={styles.label}>End Date:</span>
            <span style={styles.value}>
              {formatDate(experience.end_date, experience.end_date, experience.endDate)} 
            </span>
          </div>
        </div>
      ))}
      <button style={styles.addButton} onClick={() => openModal()}>
        Add Experience
      </button>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <input
            type="text"
            placeholder="Company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            style={styles.inputField}
            />
            <input
            type="text"
            placeholder="Position"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            style={styles.inputField}
            />
            <input
            type="text"
            placeholder="Short Description"
            value={formData.short_description}
            onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
            style={styles.inputField}
            />
            <CustomDatePicker
              placeholder="Start Date"
              selectedDate={formData.startDate}
              onChange={(date) => handleDateChange(date, "startDate")}
            />
            <CustomDatePicker
              placeholder="End Date"
              selectedDate={formData.endDate}
              onChange={(date) => handleDateChange(date, "endDate")}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button type="button" style={styles.saveButton} onClick={saveExperience}>
                Save
              </button>
              <button type="button" style={styles.cancelButton} onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
