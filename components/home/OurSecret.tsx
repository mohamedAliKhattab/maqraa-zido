import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { OrangeCheck } from "@/utils/svgImages";
import { Col, Row } from "antd";
import React from "react";

const OurSecret = () => {
  return (
    <section className="ourSecret bg-secret-image relative z-20 bg-maqraaLightBlue-100 bg-contain bg-center bg-no-repeat py-[60px] pb-[140px]">
      <div className="top-section absolute left-0 top-[-50px] z-20  h-[55px]  w-full max-w-full">
        <img
          src="assets/light-blue.png"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
      <div className="bottom-section absolute bottom-[-50px] left-0 z-20  h-[55px]  w-full max-w-full">
        <img
          src="assets/light-blue-b.png"
          className="h-full  w-full object-cover object-bottom"
        />
      </div>

      <div
        data-aos="fade-down-right"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="cloud absolute left-[10%] top-[-75px] z-10 w-[160px] max-w-full "
      >
        <img
          src="assets/light-blue-cloud.png"
          className="h-full  w-full object-scale-down object-center"
        />
      </div>

      <div
        data-aos="fade-down-right"
        data-aos-anchor-placement="center-center"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="star absolute left-[3%] top-[80px] z-10 w-[70px] max-w-full md:w-[90px]"
      >
        <img
          src="assets/secret-star.png"
          className="hidden  h-full w-full object-scale-down object-center sm:block"
        />
      </div>

      <div
        data-aos="fade-up-right"
        data-aos-anchor-placement="center-center"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="rocket  absolute right-[3%] top-[80px] z-10 hidden w-[70px] max-w-full sm:block md:w-[90px]"
      >
        <img
          src="assets/secret-rocket.png"
          className="h-full  w-full object-scale-down object-center"
        />
      </div>
      <div className="container relative h-full">
        <div
          data-aos="fade-down-left"
          data-aos-anchor-placement="center-center"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="cloud absolute bottom-[-250px] right-8 z-30 w-[160px] max-w-full sm:right-12 md:bottom-[-225px] lg:right-20  xl:right-36  2xl:right-40"
        >
          <img
            src="assets/how-cloud.png"
            className="h-full  w-full object-scale-down object-center"
          />
        </div>
        <div className="content relative z-20">
          <div className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <span className="!drop-shadow-white-b-4px mb-4 text-center font-medium text-maqraaDarkBlue">
                {HOME.OUR_SECRET.TITLE}
              </span>
              <div className="title-border w-[300px]">
                <img
                  src="assets/title-border.png"
                  className="h-auto w-full object-scale-down"
                />
              </div>
            </div>
          </div>
          <div className="mt-[60px] md:mt-[80px]">
            <Row gutter={[24, 24]} align={"middle"}>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM1.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM2.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="150"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM3.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM4.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM5.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM6.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM7.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM8.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="450"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM9.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM10.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="550"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM11.TEXT}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="secret-card h-full rounded-[36px] bg-white p-1"
                >
                  <div className="secret-content flex min-h-[90px] items-center gap-3 rounded-[36px] border-[2px] border-dashed border-maqraaOrange p-3">
                    <div className="icon">
                      <OrangeCheck />
                    </div>
                    <div className="text text-base text-maqraaDarkBlue sm:text-lg">
                      {HOME.OUR_SECRET.LIST.ITEM12.TEXT}
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
export default OurSecret;
