import React from "react";
import Link from "next/link";
import { GLOBAL } from "@/constants/i18n/ar";

const HomeLinks = () => {
  return (
    <ul className="flex flex-col gap-6 font-medium lg:flex-row">
      <li>
        <Link
          href="/"
          className="block text-lg text-maqraaDarkBlue"
          aria-current="page"
        >
          {GLOBAL.NAVBAR.HOME}
        </Link>
      </li>
      <li>
        <Link href="/" className="block text-lg text-maqraaDarkBlue-200 ">
          {GLOBAL.NAVBAR.WHAT_WE_TEACH}
        </Link>
      </li>
      <li>
        <Link href="/" className="block text-lg text-maqraaDarkBlue-200">
          {GLOBAL.NAVBAR.HOW_WE_TEACH}
        </Link>
      </li>
      <li>
        <Link href="/" className="block text-lg text-maqraaDarkBlue-200">
          {GLOBAL.NAVBAR.OUR_DISTINCTION}
        </Link>
      </li>
      <li>
        <Link href="/" className="block text-lg text-maqraaDarkBlue-200">
          {GLOBAL.NAVBAR.CLASSES}
        </Link>
      </li>
    </ul>
  );
};
export default HomeLinks;
