import React, { useState, useEffect } from "react"


const Skills = ({ skills = [], setResumeData }) => {
  const [skillList, setSkillList] = useState(skills);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    proficiency: "basic",
  });

  useEffect(() => {
    // Synchronize skillList with skills from props
    setSkillList(skills);
  }, [skills]);

  const openModal = (index = null) => {
    setEditingIndex(index);
    if (index !== null) {
      setFormData(skillList[index]);
    } else {
      setFormData({ name: "", proficiency: "basic" });
    }
    setIsModalOpen(true);
  };

  const saveSkill = () => {
    let updatedList;
    if (editingIndex === null) {
      updatedList = [...skillList, formData];
    } else {
      updatedList = skillList.map((skill, i) => (i === editingIndex ? formData : skill));
    }
    setSkillList(updatedList);
    setResumeData(prev => ({ ...prev, candidate_skills: updatedList }));
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      {skillList.map((skill, index) => (
        <div
          key={index}
          style={styles.entry}
          onClick={() => openModal(index)}
        >
          <div style={styles.item}>
            <span style={styles.label}>Skill:</span>
            <span style={styles.value}>{skill.name}</span>
          </div>
          <div style={styles.item}>
            <span style={styles.label}>Proficiency:</span>
            <span style={styles.value}>{skill.proficiency}</span>
          </div>
        </div>
      ))}
      <button style={styles.addButton} onClick={() => openModal()}>
        Add Skill
      </button>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <input
              type="text"
              placeholder="Skill Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={styles.inputField}
            />
            <label htmlFor="proficiency">Proficiency:</label>
            <select
              id="proficiency"
              name="proficiency"
              value={formData.proficiency}
              onChange={handleInputChange}
              style={styles.inputField}
            >
              <option value="basic">Basic</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button type="button" style={styles.saveButton} onClick={saveSkill}>
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

export default Skills;
