import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { teachersList } from "@/constants/teachersList";
import { MainButton } from "@/utils/buttons";
import { OrangeCheck } from "@/utils/svgImages";
import TeacherDetails from "@/utils/teachers/TeacherDetails";
import { Col, Row, Carousel, Button, Image } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useRouter } from "next/router";

import React, { useRef, useState } from "react";

const Teachers = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();
  const carouselRef = useRef<CarouselRef>(null);

  const next = () => {
    if (teachersList && carouselRef && carouselRef.current) {
      setCurrentIndex((currentIndex + 1) % teachersList.length);
      carouselRef.current?.next();
    }
  };
  const previous = () => {
    if (teachersList && carouselRef && carouselRef.current) {
      setCurrentIndex(
        ((currentIndex !== 0 ? currentIndex : teachersList.length) - 1) %
          teachersList.length
      );
      carouselRef.current?.prev();
    }
  };

  return (
    <section
      id="ourTeachers-parent"
      className="ourTeachers bg-teachers-image relative z-20 bg-maqraaLightBlue-100 bg-contain bg-center bg-no-repeat py-[80px] pb-[100px]"
    >
      <div className="top-section absolute left-0 top-[-50px] z-20  h-[90px]  w-full max-w-full">
        <img
          src="assets/teachers-top.png"
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
        className="cloud absolute right-[10%] top-[-85px] z-10 w-[160px] max-w-full "
      >
        <img
          src="assets/light-blue-cloud.png"
          className="h-full  w-full object-scale-down object-center"
        />
      </div>

      <div className="container relative h-full">
        <div
          data-aos="fade-down-left"
          data-aos-anchor-placement="center-center"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="cloud absolute bottom-[-230px] right-8 z-30 w-[160px] max-w-full sm:right-12 md:bottom-[-205px] lg:right-20  xl:right-36  2xl:right-40"
        >
          <img
            src="assets/how-cloud.png"
            className="h-full  w-full object-scale-down object-center"
          />
        </div>
        <div className="content relative z-20">
          <div id="ourTeachers-section" className="section-header">
            <div className="section-title mb-4 flex flex-col items-center justify-center text-3xl lg:text-4xl">
              <span className="mb-7 text-center font-medium text-maqraaDarkBlue !drop-shadow-white-b-4px">
                {HOME.TEACHERS.TITLE}
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
            <div className="relative flex  w-full flex-wrap items-center gap-2 px-[50px] lg:flex-nowrap lg:justify-between">
              <Button
                type="text"
                className="order-1 mb-8 min-w-[50px] max-w-[50px] !border-none !bg-transparent !bg-none !p-0 !shadow-none !outline-none lg:mb-0"
                onClick={next}
              >
                <Image
                  preview={false}
                  src="assets/right-arrow.png"
                  alt="next"
                />
              </Button>
              <div className="teachers-carousel  order-3 mx-auto  max-w-full  lg:order-2 lg:max-w-[700px] xl:max-w-[900px]">
                <Carousel
                  ref={carouselRef}
                  dotPosition="bottom"
                  autoplay
                  speed={1000}
                  afterChange={setCurrentIndex}
                  effect="fade"
                >
                  {teachersList &&
                    !!teachersList?.length &&
                    teachersList.slice(0, 5).map((teacher) => (
                      <div key={teacher.id}>
                        <TeacherDetails {...teacher} />
                      </div>
                    ))}
                </Carousel>
              </div>
              <Button
                type="text"
                className="order-2 mb-8 min-w-[50px]  max-w-[50px] !border-none !bg-transparent !bg-none !p-0 !shadow-none !outline-none lg:order-3 lg:mb-0"
                onClick={previous}
              >
                <Image preview={false} src="assets/left-arrow.png" alt="next" />
              </Button>
            </div>
            <div className="mt-[80px] flex items-center justify-center">
              <MainButton
                color="dark-blue"
                text={GLOBAL.VIEW_ALL}
                onClick={() => {
                  router.push("/teachers");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Teachers;
