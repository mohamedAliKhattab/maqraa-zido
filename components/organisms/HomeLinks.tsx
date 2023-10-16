import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { GLOBAL } from "@/constants/i18n/ar";
import { Button } from "antd";

const SPACE = 30;

type HomeLinksPros = {
  closeNavbar: () => void;
};
const HomeLinks = ({ closeNavbar }: HomeLinksPros) => {
  const activeNavbarItemRef = useRef<HTMLElement>();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let navbarHeight = 0;
      const navbar = document.querySelector(".maqraa-navbar");
      if (navbar) {
        const navbarRect = navbar.getBoundingClientRect();
        navbarHeight = navbarRect?.height;
      }

      const sections = document?.querySelectorAll(
        "section"
      ) as NodeListOf<HTMLElement>;

      sections?.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const navbarItem = document.querySelector(
          `[data-section-id="${sectionId}"]`
        );

        if (
          scrollY >= section.offsetTop - navbarHeight - SPACE &&
          scrollY <=
            section.offsetTop + section.offsetHeight - navbarHeight - SPACE
        ) {
          navbarItem?.classList.add("active");
        } else {
          navbarItem?.classList.remove("active");
        }
      });

      if (window && navbar) {
        if (
          window?.scrollY <= navbarHeight ||
          window?.scrollY === 0 ||
          !window?.scrollY
        ) {
          const navbarItem = document.querySelector(
            `[data-section-id="header-section"]`
          );
          navbarItem?.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeNavbarItemRef]);

  const handleClick = async (href: string) => {
    closeNavbar();
    const sectionHref = document.getElementById(href) as HTMLElement;
    if (window && sectionHref) {
      const sectionRect = sectionHref.getBoundingClientRect();
      let scrollTo = sectionRect.top + window.scrollY;
      const navbar = document.querySelector(".maqraa-navbar");
      if (navbar) {
        const navbarRect = navbar.getBoundingClientRect();
        if (href === "header-section") {
          scrollTo = 0;
        } else {
          scrollTo = scrollTo - navbarRect.height - SPACE;
        }
      }

      await window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };
  return (
    <ul className="flex flex-col gap-3 font-medium lg:flex-row">
      <li>
        <Button
          data-section-id="header-section"
          type="text"
          onClick={() => {
            handleClick("header-section");
          }}
          className="active nav-item-link block h-auto rounded-xl !border-none !bg-white p-2 py-3 text-lg !text-maqraaDarkBlue !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white "
          aria-current="page"
        >
          {GLOBAL.NAVBAR.HOME}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="whatTeach-parent"
          type="text"
          onClick={() => {
            handleClick("whatTeach-section");
          }}
          className="nav-item-link block h-auto rounded-xl !border-none !bg-white p-2 py-3 text-lg !text-maqraaDarkBlue-200  !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white"
        >
          {GLOBAL.NAVBAR.WHAT_WE_TEACH}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="howTeach-parent"
          type="text"
          onClick={() => {
            handleClick("howTeach-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-lg text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white"
        >
          {GLOBAL.NAVBAR.HOW_WE_TEACH}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="ourSecret-parent"
          type="text"
          onClick={() => {
            handleClick("ourSecret-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-lg text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white"
        >
          {GLOBAL.NAVBAR.OUR_DISTINCTION}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="ourClasses-parent"
          type="text"
          onClick={() => {
            handleClick("ourClasses-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-lg text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white"
        >
          {GLOBAL.NAVBAR.CLASSES}
        </Button>
      </li>
    </ul>
  );
};
export default HomeLinks;
