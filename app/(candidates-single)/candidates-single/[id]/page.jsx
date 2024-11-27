import CandidateSingleClient from "../CandidateSingleClient";

export const metadata = {
  title: "Candidate Single",
  description: "Candidate Single",
};

const Page = ({ params }) => {
  const { id } = params;

  return <CandidateSingleClient id={id} />;
};

export default Page;
