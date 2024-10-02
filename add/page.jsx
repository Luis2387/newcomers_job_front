import Home from "@/app/(home)";
import Wrapper from "@/layout/Wrapper"; 

export const metadata = {
  title: "Home || JobSeeker Platform for Newcomers",
  description: "JobSeeker Platform for Newcomers",
};

export default function Page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
