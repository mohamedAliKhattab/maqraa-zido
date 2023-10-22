import { azkarAchievements } from "@/constants/achievementsList";
import { HOME } from "@/constants/i18n/ar";
import { TotalAchievements } from "@/utils/icons";
import { Col, Image, Row } from "antd";
import React from "react";

const AzkarAchievements = () => {
  let total = 0;
  if (azkarAchievements && !!azkarAchievements?.length) {
    azkarAchievements.map(({ total: azkarTotal }) => {
      total += azkarTotal;
    });
  }
  return (
    <div>
      <div className="rtl-element achievements-header mb-16 flex flex-col justify-center gap-2">
        <div className="achievements-image mx-auto flex max-w-[172px] items-center justify-center">
          <Image
            className="object-scale-down"
            preview={false}
            src="assets/achievements.png"
            alt="achievements"
          />
        </div>
        <div className="total text-center text-2xl font-semibold text-maqraaDarkBlue md:text-3xl lg:text-5xl xl:text-6xl">
          {total}
        </div>
        <div className="achievements-title text-center text-lg text-maqraaDarkBlue">
          {HOME.ACHIEVEMENTS.AZKAR_TOTAL}
        </div>
      </div>
      {azkarAchievements && !!azkarAchievements?.length && (
        <Row
          style={{ flex: 1 }}
          gutter={[24, 54]}
          justify="space-between"
          align="stretch"
          className="achievements-list rtl-element"
        >
          {azkarAchievements.map((azkar) => (
            <Col
              style={{
                flexGrow: 1,
              }}
              key={azkar.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="xl:max-w-[19.5%]"
            >
              <div className="achievement-card  flex min-h-[150px] flex-col items-center rounded-[40px] bg-white p-4 pt-[50px]">
                <div className="icon absolute left-[50%] top-[-45px] mx-auto flex max-w-[80px] translate-x-[-50%] items-center justify-center">
                  <TotalAchievements />
                </div>
                <div className="achievement-total text-center text-2xl font-semibold text-maqraaDarkBlue md:text-2xl lg:text-3xl xl:text-4xl">
                  {azkar.total}
                </div>
                <div className="achievement-title text-center text-maqraaDarkBlue">
                  {azkar.title}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
export default AzkarAchievements;
