import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { MainButton } from "@/utils/buttons";
import { SignUpNow } from "@/utils/icons";
import VideoPlayer from "@/utils/videos";
import { Col, Image, Row } from "antd";
import React from "react";

const TeachChildren = () => {
  const video = "assets/video-1.mp4";
  return (
    <section className="teachChildren relative z-10 bg-white py-[140px] pb-[180px]">
      <div className="container relative h-full">
        <div className="content">
          <Row gutter={[24, 54]} align={"middle"}>
            <Col xs={24} lg={12} xl={10}>
              <div className="section-title flex flex-col items-center  gap-3">
                <div className="title-text relative max-w-[375px] text-center text-3xl font-medium leading-[3rem] text-maqraaDarkBlue drop-shadow-xl">
                  <span className="!drop-shadow-light-blue-100-b-2px relative z-10">
                    {HOME.TEACH_CHILDREN.TITLE}
                  </span>
                </div>
                <div className="header-slogan !drop-shadow-gray-b-1px mb-4 text-center text-xl text-maqraaLightBlue">
                  {GLOBAL.READ_SLOGAN_DOTS}
                </div>
                <div className="section-actions flex items-center justify-center">
                  <MainButton
                    color="yellow"
                    text={GLOBAL.SIGN_UP}
                    icon={<SignUpNow />}
                  />
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12} xl={14}>
              <div className="flex items-end justify-center gap-4">
                <div className="watch-video hidden lg:block">
                  <Image
                    src="assets/watch-video.png"
                    alt=""
                    preview={false}
                    className="bg- h-auto w-full object-scale-down"
                  />
                </div>
                <VideoPlayer
                  videoIcon="assets/white-player.png"
                  videoUrl={video}
                  videoClassNameList="!max-w-[420px] cursor-pointer"
                  wrapperClassNameList="!border-[10px] cursor-pointer !border-maqraaLightBlue-100 !rounded-[40px] !bg-maqraaLightBlue-100  overflow-hidden"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default TeachChildren;
