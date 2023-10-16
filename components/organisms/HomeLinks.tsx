import React from "react";
import Link from "next/link";
import { GLOBAL } from "@/constants/i18n/ar";

const HomeLinks = () => {
  return (
    <ul className="flex flex-col gap-3 font-medium lg:flex-row">
      <li>
        <Link
          href="/"
          className="active nav-item-link block rounded-xl p-2 py-3 text-lg text-maqraaDarkBlue transition-all duration-500 hover:bg-maqraaDarkBlue hover:text-white "
          aria-current="page"
        >
          {GLOBAL.NAVBAR.HOME}
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="block rounded-xl p-2 py-3  text-lg text-maqraaDarkBlue-200 transition-all duration-500 hover:bg-maqraaDarkBlue hover:text-white"
        >
          {GLOBAL.NAVBAR.WHAT_WE_TEACH}
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="block rounded-xl p-2 py-3 text-lg text-maqraaDarkBlue-200 transition-all duration-500 hover:bg-maqraaDarkBlue hover:text-white"
        >
          {GLOBAL.NAVBAR.HOW_WE_TEACH}
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="block rounded-xl p-2 py-3 text-lg text-maqraaDarkBlue-200 transition-all duration-500 hover:bg-maqraaDarkBlue hover:text-white"
        >
          {GLOBAL.NAVBAR.OUR_DISTINCTION}
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="block rounded-xl p-2 py-3 text-lg text-maqraaDarkBlue-200 transition-all duration-500 hover:bg-maqraaDarkBlue hover:text-white"
        >
          {GLOBAL.NAVBAR.CLASSES}
        </Link>
      </li>
    </ul>
  );
};
export default HomeLinks;
