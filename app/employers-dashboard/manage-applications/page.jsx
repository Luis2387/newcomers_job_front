import dynamic from "next/dynamic";
import ManageApplications from "@/components/dashboard-pages/employers-dashboard/manage-applications";

export const metadata = {
  title: "Manage Applications",
  description: "Manage Applications",
};

const index = () => {
  return (
    <>
      <ManageApplications />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
