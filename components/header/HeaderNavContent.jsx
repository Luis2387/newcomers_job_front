"use client";

import Link from "next/link";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  return (
    <>
      <nav className="nav main-menu">
        
      </nav>
    </>
  );
};

export default HeaderNavContent;
