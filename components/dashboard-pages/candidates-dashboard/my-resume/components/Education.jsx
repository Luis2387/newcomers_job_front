import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import JobService from "@/services/JobService";

const Education = ({ educations = [], setEducations }) => {
  const [educationList, setEducationList] = useState(educations);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    level: { id: "", name: "" },
    school: "",
    startDate: new Date(),
    endDate: new Date(),
  }); 
  const [educationLevels, setEducationLevels] = useState([]);

  useEffect(() => {
    const fetchEducationLevels = async () => {
      try {
        const levels = await JobService.getEducationLevels();
        setEducationLevels(levels);
      } catch (error) {
        console.error("Error fetching education levels:", error);
      }
    };

    fetchEducationLevels();
  }, []);

  useEffect(() => {
    setEducationList(educations);
  }, [educations]);

  const openModal = (index = null) => {
  setEditingIndex(index);
  if (index !== null) {
    const education = educationList[index];
    const selectedLevel = educationLevels.find((level) => level.id === parseInt(education.level?.id || education.level));
    
    setFormData({
      ...education,
      level: selectedLevel || {},
      startDate: education.start_date ? new Date(education.start_date) : new Date(),
      endDate: education.end_date ? new Date(education.end_date) : new Date(),
    });
  } else {
    setFormData({
      level: "",
      school: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  }
  setIsModalOpen(true);
};


  const saveEducation = () => {
  let updatedList;

  const selectedLevel = educationLevels.find((level) => level.id === parseInt(formData.level?.id || formData.level));

  const formattedData = {
    ...formData,
    level: selectedLevel || {},
    start_date: formData.startDate ? formData.startDate.toISOString().split("T")[0] : null,
    end_date: formData.endDate ? formData.endDate.toISOString().split("T")[0] : null,
  };

  if (editingIndex === null) {
    updatedList = [...educationList, formattedData];
  } else {
    updatedList = educationList.map((edu, i) => (i === editingIndex ? formattedData : edu));
  }

  setEducationList(updatedList);
    if (setEducations) {
      setEducations(updatedList);
    }
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


  const handleLevelChange = (e) => {
    const selectedId = e.target.value;
    const selectedLevel = educationLevels.find(level => level.id === parseInt(selectedId));
    setFormData({ ...formData, level: { id: selectedId, name: selectedLevel ? selectedLevel.name : "" } });
  };

  // Inline styles in JavaScript
  const styles = {
    educationEntry: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid #e0e0e0",
      cursor: "pointer",
      fontSize: "0.9rem",
      transition: "background-color 0.3s ease",
    },
    educationItem: {
      flex: "1", // Distribute space evenly for each item
      textAlign: "left",
    },
    label: {
      fontWeight: "600",
      color: "#333",
      marginRight: "5px",
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
      transition: "background-color 0.3s ease",
    },
    addButtonHover: {
      backgroundColor: "#357ab7",
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
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
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
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "0.85rem",
      backgroundColor: "#4a90e2",
      color: "#fff",
      marginRight: "10px",
    },
    cancelButton: {
      padding: "6px 14px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "0.85rem",
      backgroundColor: "#d9534f",
      color: "#fff",
    },
  };

  

  return (
    <div>
      {educations.map((education, index) => (
        <div
          key={index}
          style={styles.educationEntry}
          onClick={() => openModal(index)}
        >
          <div style={styles.educationItem}>
            <span style={styles.label}>Level:</span>
            <span style={styles.value}>
              {education.level?.name || 
                (typeof education.level === "string" || typeof education.level === "number"
                  ? educationLevels.find(level => level.id === parseInt(education.level))?.name || "N/A"
                  : "N/A")}
            </span>
          </div>
          <div style={styles.educationItem}>
            <span style={styles.label}>School:</span>
            <span style={styles.value}>{education.school}</span>
          </div>          
          <div style={styles.educationItem}>
            <span style={styles.label}>Start Date:</span>            
            {formatDate(education.start_date, education.start_date, education.startDate)}
          </div>
          <div style={styles.educationItem}>
            <span style={styles.label}>End Date:</span>
            {formatDate(education.end_date, education.end_date, education.endDate)} 
          </div>
        </div>
      ))}
      <button
        type="button"
        style={styles.addButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.addButtonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.addButton.backgroundColor)}
        onClick={(e) => {
          e.stopPropagation();
          openModal();
        }}
      >
        Add Education
      </button>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <select
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              style={styles.inputField}
            >
              <option value="">Select Education Level</option>
              {educationLevels.map(level => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>
            <input
            type="text"
            placeholder="School"
            value={formData.school}
            onChange={(e) => setFormData({ ...formData, school: e.target.value })}
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
              <button type="button" style={styles.saveButton} onClick={saveEducation}>
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

export default Education;


