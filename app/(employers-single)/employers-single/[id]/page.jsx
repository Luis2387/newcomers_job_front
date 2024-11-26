'use client';

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
import JobService from "@/services/JobService"; 
import EmployerService from "@/services/EmployerService";
import LoginPopup from "@/components/common/form/login/Login";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";

const EmployerSingleClient = () => {
  const { id } = useParams(); // Obtener el id dinámico
  const [employer, setEmployer] = useState(null);
  const [categoryMap, setCategoryMap] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employerData = await EmployerService.getProfile(id);
        const categories = await JobService.getCategories();
        const categoryMap = Object.fromEntries(
          categories.map((category) => [category.id, category.name])
        );

        employerData.category = categoryMap[employerData.category] || "N/A";

        setCategoryMap(categoryMap);
        setEmployer(employerData);
      } catch (error) {
        router.push("/404");
        console.error("Error fetching employer profile or categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);


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
    name: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "10px",
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
  };

  return (
    <>
      <span className="header-span"></span>
      <LoginPopup />
      <DefaulHeader />
      <MobileMenu />

      <section style={styles.section}>
        <div style={styles.headerSection}>
          <div style={styles.headerContent}>
            <div style={styles.mainContent}>
              <h4 style={styles.name}>{employer?.company_name || "N/A"}</h4>

              <ul style={styles.employerInfo}>
                <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-briefcase"></span>
                  {employer?.category || "N/A"}
                </li>
                <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-telephone"></span>
                  Phone: {employer?.phone || "N/A"}
                </li>
                <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-mail"></span>
                  Email: {employer?.email || "N/A"}
                </li>
                <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-worldwide"></span>
                  Website:{" "}
                  <a href={employer?.website || "#"} target="_blank" rel="noopener noreferrer">
                    {employer?.website || "N/A"}
                  </a>
                </li>
                <li style={styles.employerInfoItem}>
                  <span style={styles.icon} className="flaticon-map-locator"></span>
                  Location: {employer?.location || "N/A"}
                </li>
              </ul>

              <h4 style={styles.aboutHeading}>About the Company</h4>
              <p style={styles.aboutText}>
                {employer?.profile_description ||
                  "N/A"}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterDefault footerStyle="alternate5" />
    </>
  );
};

export default dynamic(() => Promise.resolve(EmployerSingleClient), {
  ssr: false,
});
