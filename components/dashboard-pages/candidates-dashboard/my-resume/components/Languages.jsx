import React, { useState } from "react";

const Languages = () => {
  const [languages, setLanguages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    language: "",
    proficiency: "",
  });

  const openModal = (index = null) => {
    setEditingIndex(index);
    if (index !== null) {
      setFormData(languages[index]);
    } else {
      setFormData({ language: "", proficiency: "" });
    }
    setIsModalOpen(true);
  };

  const saveLanguage = () => {
    if (editingIndex === null) {
      setLanguages([...languages, formData]);
    } else {
      const updatedLanguages = languages.map((lang, i) =>
        i === editingIndex ? formData : lang
      );
      setLanguages(updatedLanguages);
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
      {languages.map((language, index) => (
        <div
          key={index}
          style={styles.entry}
          onClick={() => openModal(index)}
        >
          <div style={styles.item}>
            <span style={styles.label}>Language:</span>
            <span style={styles.value}>{language.language}</span>
          </div>
          <div style={styles.item}>
            <span style={styles.label}>Proficiency:</span>
            <span style={styles.value}>{language.proficiency}</span>
          </div>
        </div>
      ))}
      <button style={styles.addButton} onClick={() => openModal()}>
        Add Language
      </button>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <input
              type="text"
              placeholder="Language"
              style={styles.inputField}
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            />
            <input
              type="text"
              placeholder="Proficiency"
              style={styles.inputField}
              value={formData.proficiency}
              onChange={(e) => setFormData({ ...formData, proficiency: e.target.value })}
            />
            <button type="button" style={styles.saveButton} onClick={saveLanguage}>
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

export default Languages;

