import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { Col, Image, Row } from "antd";
import React from "react";

const OurClasses = () => {
  return (
    <section
      id="ourClasses-parent"
      className="ourClasses bg-maqraaOrange-100 relative z-10 py-[60px] pb-[280px]"
    >
      <div className="top-section absolute left-0 top-[-85px] z-30  h-[87px]  w-full max-w-full">
        <img
          src="assets/our-classes-t.png"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
      <div className="container relative h-full">
        <div
          data-aos="fade-up-right"
          data-aos-anchor-placement="center-center"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="cloud absolute left-2 top-[-150px] z-40 w-[160px] max-w-full sm:left-4 md:top-[-170px] lg:left-6  xl:left-8  2xl:left-12"
        >
          <img
            src="assets/how-cloud.png"
            className="h-full  w-full object-scale-down object-center"
          />
        </div>
        <div className="content relative z-20">
          <div id="ourClasses-section" className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <span className="!drop-shadow-white-b-4px mb-4 text-center font-medium text-maqraaDarkBlue">
                {HOME.OUR_CLASSES.TITLE}
              </span>
              <div className="title-border w-[300px]">
                <img
                  src="assets/title-border.png"
                  className="h-auto w-full object-scale-down"
                />
              </div>
            </div>
          </div>
          <div className="mt-20">
            <Row gutter={[24, 54]} align={"middle"} justify={"center"}>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="our-classes-item flex  items-start gap-5"
                >
                  <div className="icon h-[50px] w-[50px] min-w-[50px] md:h-[90px] md:w-[90px] md:min-w-[90px]">
                    <Image
                      src="assets/class-2.png"
                      alt=""
                      className="h-auto w-full object-scale-down"
                      preview={false}
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <div className="text-xl text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM1.TEXT}
                    </div>
                    <div className="text-sm leading-6 text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM1.DESC}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="our-classes-item flex  items-start gap-5"
                >
                  <div className="icon h-[50px] w-[50px] min-w-[50px] md:h-[90px] md:w-[90px] md:min-w-[90px]">
                    <Image
                      src="assets/class-1.png"
                      alt=""
                      className="h-auto w-full object-scale-down"
                      preview={false}
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <div className="text-xl text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM2.TEXT}
                    </div>
                    <div className="text-sm leading-6 text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM2.DESC}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="our-classes-item flex  items-start gap-5"
                >
                  <div className="icon h-[50px] w-[50px] min-w-[50px] md:h-[90px] md:w-[90px] md:min-w-[90px]">
                    <Image
                      src="assets/class-3.png"
                      alt=""
                      className="h-auto w-full object-scale-down"
                      preview={false}
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <div className="text-xl text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM3.TEXT}
                    </div>
                    <div className="text-sm leading-6 text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM3.DESC}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="our-classes-item flex  items-start gap-5"
                >
                  <div className="icon h-[50px] w-[50px] min-w-[50px] md:h-[90px] md:w-[90px] md:min-w-[90px]">
                    <Image
                      src="assets/class-4.png"
                      alt=""
                      className="h-auto w-full object-scale-down"
                      preview={false}
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <div className="text-xl text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM4.TEXT}
                    </div>
                    <div className="text-sm leading-6 text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM4.DESC}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="our-classes-item flex  items-start gap-5"
                >
                  <div className="icon h-[50px] w-[50px] min-w-[50px] md:h-[90px] md:w-[90px] md:min-w-[90px]">
                    <Image
                      src="assets/class-5.png"
                      alt=""
                      className="h-auto w-full object-scale-down"
                      preview={false}
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-start gap-2">
                    <div className="text-xl text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM5.TEXT}
                    </div>
                    <div className="text-sm leading-6 text-maqraaDarkBlue">
                      {HOME.OUR_CLASSES.LIST.ITEM5.DESC}
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
export default OurClasses;
