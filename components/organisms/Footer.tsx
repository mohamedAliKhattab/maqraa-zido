import { GLOBAL } from "@/constants/i18n/ar";
import { MainButton } from "@/utils/buttons";
import { PayIcon, SignUpNow } from "@/utils/icons";
import { Image } from "antd";
import React from "react";
import SignUpNowBtn from "@/components/organisms/SignUpNow";

const Footer = () => {
  return (
    <footer className="relative bg-maqraaDarkBlue py-8">
      <div className="top-section absolute left-0 top-[-180px]  z-20  h-[190px] w-full">
        <img
          src="assets/footer-t.png"
          className="h-full  w-full object-cover object-bottom 2xl:object-top"
        />
      </div>
      <div className="right-cloud absolute right-28 top-0 z-20 hidden w-[100px] md:block">
        <img
          src="assets/footer-cloud-r.png"
          className="h-full w-full object-scale-down object-center"
        />
      </div>
      <div className="left-cloud absolute left-28 top-0  z-20 hidden w-[115px] md:block">
        <img
          src="assets/footer-cloud-l.png"
          className="h-full w-full object-scale-down object-center"
        />
      </div>
      <div className="container">
        <div className="footer-logo mx-auto mb-2 w-[110px]">
          <Image
            src="assets/footer-logo.png"
            alt="logo"
            preview={false}
            className="h-auto w-full object-scale-down"
          />
        </div>
        <div className="footer-slogan text-center text-sm text-maqraaLightBlue-200">
          {GLOBAL.READ_SLOGAN_DOTS}
        </div>
        <div className="footer-actions mt-8 flex flex-wrap items-center justify-center gap-4">
          <SignUpNowBtn />
          <MainButton
            color="orange"
            text={GLOBAL.SUBSCRIPTION}
            icon={<PayIcon />}
          />
        </div>
        <div className="copyright mx-auto mt-12 text-center text-xs text-maqraaDarkBlue-100">
          {GLOBAL.COPYRIGHT}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
