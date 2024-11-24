"use client";

import { useParams } from "next/navigation";
import employers from "@/data/employers"; 
import LoginPopup from "@/components/common/form/login/Login";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";

const EmployerSingleClient = () => {
  const { id } = useParams(); // Get the dynamic `id` from the URL
  const employer =
    employers.find((item) => item.id == id) || employers[0];

  const styles = {
    section: {
      fontFamily: "Arial, sans-serif",
      margin: "40px auto",
      maxWidth: "1200px",
      padding: "20px",
    },
    headerSection: {
      backgroundColor: "#f9f9f9",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    headerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "20px",
    },
    mainContent: {
      flex: "1",
    },
    sidebar: {
      flex: "0.4",
    },
    name: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "10px",
    },
    tagline: {
      fontSize: "16px",
      fontStyle: "italic",
      color: "#666",
      marginBottom: "20px",
    },
    employerInfo: {
      listStyle: "none",
      padding: 0,
      margin: "10px 0",
    },
    employerInfoItem: {
      marginBottom: "8px",
      color: "#666",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
    },
    icon: {
      marginRight: "8px",
      color: "#999",
    },
    aboutHeading: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#333",
      margin: "20px 0 10px",
    },
    aboutText: {
      color: "#666",
      fontSize: "14px",
      lineHeight: "1.8",
    },
    btnBox: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
    },
    themeBtn: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "12px 25px",
      border: "none",
      borderRadius: "4px",
      fontSize: "14px",
      cursor: "pointer",
      textDecoration: "none",
      fontWeight: "bold",
    },
    bookmarkBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "18px",
      color: "#666",
    },
  };

  return (
    <>
      <span className="header-span"></span>

      <LoginPopup />
      <DefaulHeader />
      <MobileMenu />

      <section style={styles.section}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <div style={styles.headerContent}>
            {/* Main Content */}
            <div style={styles.mainContent}>
              <h4 style={styles.name}>{employer?.name}</h4>
              <p style={styles.tagline}>
                Your Trusted Partner in {employer?.industry}.
              </p>
              <ul style={styles.employerInfo}>
                {/* <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-briefcase"></span>
                  {employer?.industry}
                </li> */}

                <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-telephone"></span>{" "}
                  Phone: {employer?.foundedYear}
                </li>
                <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-mail"></span>{" "}
                  E-mail: {employer?.foundedYear}
                </li>
                <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-worldwide"></span>
                  Website: 
                </li>
                <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-map-locator"></span>
                  Location: {employer?.location}
                </li>

              </ul>

              {/* About the Company */}
              <h4 style={styles.aboutHeading}>About the Company</h4>
              <p style={styles.aboutText}>
                {employer?.description ||
                  "We are dedicated to delivering excellence and innovation in every project. Join us and be part of a dynamic team."}
              </p>

              <div style={styles.btnBox}>
                <a
                  style={styles.themeBtn}
                  href={employer?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                <button style={styles.bookmarkBtn}>
                  <i className="flaticon-bookmark"></i>
                </button>
              </div>
            </div>

            {/* Sidebar Highlights (Optional) */}
            <div style={styles.sidebar}>
              <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
                <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px", color: "#333" }}>Key Highlights</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={styles.employerInfoItem}>
                    <span style={styles.icon} className="flaticon-rocket"></span>
                    Industry: {employer?.industry}
                  </li>
                  <li style={styles.employerInfoItem}>
                    <span style={styles.icon} className="flaticon-group"></span>
                    Employees: {employer?.companySize}
                  </li>
                  <li style={styles.employerInfoItem}>
                    <span style={styles.icon} className="flaticon-trophy"></span>
                    Awards: {employer?.awards || "N/A"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <FooterDefault footerStyle="alternate5" /> */}
    </>
  );
};

export default EmployerSingleClient;
