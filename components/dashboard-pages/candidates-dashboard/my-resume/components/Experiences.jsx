import React, { useState } from "react";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  const openModal = (index = null) => {
    setEditingIndex(index);
    if (index !== null) {
      setFormData(experiences[index]);
    } else {
      setFormData({ company: "", position: "", startDate: "", endDate: "" });
    }
    setIsModalOpen(true);
  };

  const saveExperience = () => {
    if (editingIndex === null) {
      setExperiences([...experiences, formData]);
    } else {
      const updatedExperiences = experiences.map((exp, i) =>
        i === editingIndex ? formData : exp
      );
      setExperiences(updatedExperiences);
    }
    setIsModalOpen(false);
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
      {experiences.map((experience, index) => (
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
            <span style={styles.label}>Start Date:</span>
            <span style={styles.value}>{experience.startDate}</span>
          </div>
          <div style={styles.item}>
            <span style={styles.label}>End Date:</span>
            <span style={styles.value}>{experience.endDate}</span>
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
              style={styles.inputField}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
            <input
              type="text"
              placeholder="Position"
              style={styles.inputField}
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
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
            <button type="button" style={styles.saveButton} onClick={saveExperience}>
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

export default Experiences;
