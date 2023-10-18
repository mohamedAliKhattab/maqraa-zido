import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { MainButton } from "@/utils/buttons";
import { SignUpNow } from "@/utils/icons";
import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import VideoPlayer from "@/utils/videos";
import SignUpNowBtn from "@/components/organisms/SignUpNow";

const Header = () => {
  const video = "assets/header-video.mp4";
  return (
    <section
      id="header-section"
      className="header relative min-h-[660px] overflow-hidden bg-maqraaLightBlue-100 pb-[100px]"
    >
      <div
        // data-aos="fade-down"
        // data-aos-offset="0"
        // data-aos-duration="1000"
        // data-aos-delay="800"
        // data-aos-anchor-placement="center-center"
        // data-aos-easing="ease-in-out"
        className="absolute left-0 top-[-1px] z-0 flex w-full justify-center"
      >
        <img
          src="assets/header-top.png"
          className=" h-full w-full min-w-[1400px] object-cover object-top"
        />
      </div>
      {/* <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-delay="800"
        data-aos-anchor-placement="center-center"
        data-aos-easing="ease-in-out"
        className="stars bg-stars absolute -top-4 left-0 z-20 mx-1 h-[100px] w-full bg-cover bg-bottom bg-no-repeat lg:h-[133px] lg:bg-contain
       lg:bg-top lg:bg-repeat-space"
      ></div> */}
      <div className="top-section absolute bottom-[-5px] left-0 z-20  h-[270px]  w-full  max-w-full 2xl:h-[300px]">
        <img
          src="assets/white-clouds.png"
          className="object-[0px  10px] h-full w-full object-cover"
        />
      </div>
      <div
        data-aos="fade-down-right"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-anchor-placement="center-center"
        data-aos-easing="ease-in-out"
        className="left-cloud absolute right-[42%] top-[70px] z-10 w-[60px] md:w-[114px]"
      >
        <Image
          src="assets/header-cloud-1.png"
          preview={false}
          className="h-auto w-full object-scale-down"
        />
      </div>
      <div
        data-aos="fade-down-left"
        data-aos-offset="0"
        data-aos-delay="400"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-center"
        data-aos-easing="ease-in-out"
        className="right-cloud absolute right-[3%] top-[70px] z-10 w-[45px] md:w-[87px]"
      >
        <Image
          src="assets/header-cloud-2.png"
          preview={false}
          className="h-auto w-full object-scale-down"
        />
      </div>
      <div className="container relative z-30 h-full">
        <Row
          gutter={[34, 54]}
          className="mb-[90px] mt-[70px] h-full items-center justify-center py-10 lg:mt-[90px]"
        >
          <Col xs={24} lg={12} className="lg:mr-[-50px] lg:!px-0">
            <div className="header-title flex flex-col items-center  gap-6">
              <div className="relative">
                {/* <div className="header-cloud absolute top-[-10px] flex h-[110%] w-[110%]  items-center justify-center">
                  <img
                    src="assets/cloud.svg"
                    alt=""
                    className="h-auto w-full"
                  />
                </div> */}
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  // lg:max-w-[375px]
                  className="title-text relative w-fit max-w-[355px] text-center text-[1.8rem] font-medium leading-[3.4rem] text-maqraaDarkBlue sm:text-[2rem] md:max-w-[484px] lg:text-[2.6rem] lg:leading-[4.7rem]"
                >
                  {/* <span className="absolute left-0 top-[21%] h-[15px] w-full bg-maqraaYellow bg-opacity-80 xl:top-[31%]" /> */}
                  <span className="drop-shadow-header-title font-bolder relative z-10">
                    {/* drop-shadow-white-3px  */}
                    {HOME.HEADER.TITLE}
                  </span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="header-slogan drop-shadow-header-slogan mt-5 text-center text-2xl font-extrabold text-white  xl:text-3xl"
                >
                  {/* drop-shadow-dark-blue-1px */}
                  {GLOBAL.READ_SLOGAN_DOTS}
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-delay="500"
                data-aos-easing="ease-in-out"
                className="header-actions flex items-center justify-center"
              >
                <SignUpNowBtn />
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12} className="lg:!px-16">
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="header-video"
            >
              <div className="relative flex flex-1 cursor-pointer flex-col items-center justify-center">
                <VideoPlayer
                  videoUrl={video}
                  isBackground={true}
                  wrapperClassNameList="overflow-hidden rounded-[30px] border-[5px] !border-none !bg-none  p-6 bg-top bg-contain bg-no-repeat !cursor-pointer"
                  videoClassNameList="cursor-pointer !max-w-fit !w-[300px] sm:!w-[350px] lg:!w-[500px] xl:!w-[515px] !h-auto rounded-[30px]"
                />
                <div className="video-shadow absolute bottom-[-7%] left-[50%] mt-1 flex  max-w-[200px] translate-x-[-50%] items-center justify-center lg:max-w-full">
                  <Image
                    preview={false}
                    src="assets/shadow-b.svg"
                    alt="shadow"
                    className="max-h-[15px] object-scale-down"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Header;
