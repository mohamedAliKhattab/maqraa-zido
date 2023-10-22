import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { HowTeachBg, HowTeachNewBg } from "@/utils/svgImages";
import { Col, Image, Row } from "antd";
import React from "react";

const HowWeTeach = () => {
  return (
    <section
      id="howTeach-parent"
      className="howTeach relative z-10 min-h-[500px] bg-maqraaOrange-100 py-[160px] pt-[180px]"
    >
      <div
        className="bottom-section absolute left-0 top-[-5px] z-20 h-[270px]  w-full  max-w-full
2xl:h-[300px]"
      >
        <img
          src="assets/white-clouds-b.png"
          className="h-full  w-full object-cover object-bottom"
        />
      </div>
      <div className="container relative z-30 h-full">
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="center-center"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="cloud absolute right-2 top-[80px] z-10 w-[160px] max-w-full sm:right-4 lg:right-6  xl:right-8  2xl:right-12"
        >
          <img
            src="assets/how-cloud.png"
            className="h-full  w-full object-scale-down object-center"
          />
        </div>
        <div className="content relative z-20">
          <div id="howTeach-section" className="section-header">
            <div className="section-title mb-4 mt-10 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <span className="mb-4 text-center font-medium text-maqraaDarkBlue !drop-shadow-white-b-4px">
                {HOME.HOW_WE_TEACH.TITLE}
              </span>
              <div className="title-border w-[300px]">
                <img
                  src="assets/title-border.png"
                  className="h-auto w-full object-scale-down"
                />
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <Row gutter={[24, 54]} align={"middle"}>
              <Col lg={10} className="flex h-full flex-col justify-center">
                <div className="how-teach-list mt-[20px] flex flex-col gap-3">
                  <div
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="how-teach-item flex items-start gap-2"
                  >
                    <div className="icon mt-[-5px] flex h-[40px] w-[40px] min-w-[40px] items-center justify-center">
                      <Image
                        src="assets/pen.png"
                        preview={false}
                        className="h-auto w-full"
                      />
                    </div>
                    <div className="text text-lg text-maqraaDarkBlue md:text-xl">
                      {HOME.HOW_WE_TEACH.LIST.ITEM1.TEXT}
                    </div>
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="how-teach-item flex items-start gap-2"
                  >
                    <div className="icon mt-[-5px] flex h-[40px] w-[40px] min-w-[40px] items-center justify-center">
                      <Image
                        src="assets/pen.png"
                        preview={false}
                        className="h-auto w-full"
                      />
                    </div>
                    <div className="text text-lg text-maqraaDarkBlue md:text-xl">
                      {HOME.HOW_WE_TEACH.LIST.ITEM2.TEXT}
                    </div>
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="how-teach-item flex items-start gap-2"
                  >
                    <div className="icon mt-[-5px] flex h-[40px] w-[40px] min-w-[40px] items-center justify-center">
                      <Image
                        src="assets/pen.png"
                        preview={false}
                        className="h-auto w-full"
                      />
                    </div>
                    <div className="text text-lg text-maqraaDarkBlue md:text-xl">
                      {HOME.HOW_WE_TEACH.LIST.ITEM3.TEXT}
                    </div>
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="how-teach-item flex items-start gap-2"
                  >
                    <div className="icon mt-[-5px] flex h-[40px] w-[40px] min-w-[40px] items-center justify-center">
                      <Image
                        src="assets/pen.png"
                        preview={false}
                        className="h-auto w-full"
                      />
                    </div>
                    <div className="text text-lg text-maqraaDarkBlue md:text-xl">
                      {HOME.HOW_WE_TEACH.LIST.ITEM4.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={14}>
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="section-image flex w-full  justify-end"
                >
                  <div className="relative mt-[12%] max-w-[700px]">
                    <div className="absolute left-[50%] top-[50%] flex h-full w-full max-w-full translate-x-[-50%] translate-y-[-50%] items-center justify-center">
                      <HowTeachNewBg />
                    </div>

                    <div
                      data-aos="fade-down"
                      data-aos-offset="0"
                      data-aos-delay="100"
                      data-aos-duration="1400"
                      data-aos-easing="ease-in-out"
                      className="px-6"
                    >
                      <Image
                        src="assets/Isolation.png"
                        preview={false}
                        className="relative z-10 mb-[-12%] w-full object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowWeTeach;
