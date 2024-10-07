import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/employer-dashboard/dashboard";

export const metadata = {
  title: "Employer Dashboard",
  description: "Employer Dashboard",
};

const index = () => {
  return (
    <>
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
