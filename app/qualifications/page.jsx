"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const QualificationsPage = () => {
  const [activeTab, setActiveTab] = useState("equivalency");

  const tabs = [
    {
      id: "equivalency",
      title: "Degree Equivalency",
      content: (
        <>
          <p>
            Learn how to assess the equivalency of your foreign qualifications.
            Use trusted services like:
          </p>
          <ul>
            <li>
              <Link href="https://wes.org" target="_blank">
                World Education Services (WES)
              </Link>
            </li>
            <li>
              <Link href="https://www.cicic.ca" target="_blank">
                Canadian Information Centre for International Credentials (CICIC)
              </Link>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "recognition",
      title: "Credential Recognition",
      content: (
        <>
          <p>
            Find out how to get your credentials recognized by local institutions:
          </p>
          <ul>
            <li>
              <Link href="https://www.alberta.ca/iqas" target="_blank">
                International Qualifications Assessment Service (IQAS)
              </Link>
            </li>
            <li>
              <Link href="https://www.bc.ca/immigration/credentials" target="_blank">
                BC Credential Recognition
              </Link>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "licensing",
      title: "Professional Licensing",
      content: (
        <>
          <p>
            Steps to obtain licensure or certification for specific professions:
          </p>
          <ul>
            <li>
              <Link href="https://peo.on.ca" target="_blank">
                Professional Engineers Ontario (PEO)
              </Link>
            </li>
            <li>
              <Link href="https://cpa.ca" target="_blank">
                Chartered Professional Accountants (CPA)
              </Link>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <PageContainer>
      <Header>
        <h1>Qualifications Information</h1>
        <p>
          Explore resources to help you assess, recognize, and validate your
          qualifications in the local job market.
        </p>
      </Header>

      <TabsContainer>
        <TabNavigation>
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </TabButton>
          ))}
        </TabNavigation>

        <TabContent
          as={motion.div}
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </TabContent>
      </TabsContainer>

      <Footer>
        <p>
          Need more help? <Link href="/contact">Contact us</Link> for further
          assistance.
        </p>
      </Footer>
    </PageContainer>
  );
};

export default QualificationsPage;

const PageContainer = styled.div`
  padding: 2rem;
  background: #f9fafc;
  font-family: "Arial", sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1d3557;
  }

  p {
    font-size: 1.1rem;
    color: #7d8597;
  }
`;

const TabsContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  background: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const TabNavigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button`
  background: ${(props) => (props.active ? "#457b9d" : "#e5e5e5")};
  color: ${(props) => (props.active ? "#ffffff" : "#333333")};
  font-size: 1rem;
  font-weight: 500;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${(props) => (props.active ? "#1d3557" : "#d4d4d4")};
  }
`;

const TabContent = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 1rem;
  color: #495057;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 2rem;

  p {
    font-size: 1rem;
    color: #7d8597;

    a {
      color: #457b9d;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
