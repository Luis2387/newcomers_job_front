import CandidateSingleClient from "../CandidateSingleClient";

export const metadata = {
  title:
    "Candidate Single Dynamic V1 || Superio - Job Board React NextJS Template",
  description: "Superio - Job Board React NextJS Template",
};

const Page = ({ params }) => {
  const { id } = params;

  return <CandidateSingleClient id={id} />;
};

export default Page;
