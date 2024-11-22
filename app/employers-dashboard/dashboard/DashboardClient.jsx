"use client";

import dynamic from "next/dynamic";

const DashboardHome = dynamic(
  () => import("@/components/dashboard-pages/employers-dashboard/dashboard"),
  { ssr: false } // Client-side rendering only
);

const DashboardClient = () => {
  return <DashboardHome />;
};

export default DashboardClient;
