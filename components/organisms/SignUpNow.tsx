import { GLOBAL } from "@/constants/i18n/ar";
import { MainButton } from "@/utils/buttons";
import React, { useState } from "react";
import Calendly from "@/components/organisms/Calendly";
import { SignUpNow } from "@/utils/icons";

const SignUpNowBtn = () => {
  const [togglePopup, setTogglePopup] = useState<boolean>(false);

  const handleCalendly = () => {
    setTogglePopup(true);
  };
  return (
    <>
      <MainButton
        onClick={handleCalendly}
        color="yellow"
        text={GLOBAL.SIGN_UP}
        icon={<SignUpNow />}
      />
      {<Calendly togglePopup={togglePopup} setTogglePopup={setTogglePopup} />}
    </>
  );
};
export default SignUpNowBtn;
