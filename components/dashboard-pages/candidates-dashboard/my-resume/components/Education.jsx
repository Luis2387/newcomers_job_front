import React, { useState } from "react";

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    level: "",
    school: "",
    startDate: "",
    endDate: "",
  });

  const openModal = (index = null) => {
    setEditingIndex(index);
    if (index !== null) {
      setFormData(educations[index]);
    } else {
      setFormData({ level: "", school: "", startDate: "", endDate: "" });
    }
    setIsModalOpen(true);
  };

  const saveEducation = () => {
    if (editingIndex === null) {
      setEducations([...educations, formData]);
    } else {
      const updatedEducations = educations.map((edu, i) =>
        i === editingIndex ? formData : edu
      );
      setEducations(updatedEducations);
    }
    setIsModalOpen(false);
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
            <span style={styles.value}>{education.level}</span>
          </div>
          <div style={styles.educationItem}>
            <span style={styles.label}>School:</span>
            <span style={styles.value}>{education.school}</span>
          </div>
          <div style={styles.educationItem}>
            <span style={styles.label}>Start Date:</span>
            <span style={styles.value}>{education.startDate}</span>
          </div>
          <div style={styles.educationItem}>
            <span style={styles.label}>End Date:</span>
            <span style={styles.value}>{education.endDate}</span>
          </div>
        </div>
      ))}
      <button
        style={styles.addButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.addButtonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.addButton.backgroundColor)}
        onClick={() => openModal()}
      >
        Add Education
      </button>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <input
              type="text"
              placeholder="Education Level"
              style={styles.inputField}
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            />
            <input
              type="text"
              placeholder="School"
              style={styles.inputField}
              value={formData.school}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
            />
            <input
              type="text"
              placeholder="Start Date"
              style={styles.inputField}
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
            <input
              type="text"
              placeholder="End Date"
              style={styles.inputField}
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
            <button type="button" style={styles.saveButton} onClick={saveEducation}>
              Save
            </button>
            <button type="button" style={styles.cancelButton} onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;


