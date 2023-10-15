import React from "react";
import { GLOBAL } from "@/constants/i18n/ar";
import { MainButton } from "utils/buttons";
import { PayIcon } from "@/utils/icons";

export const PaySubscription = () => {
  return (
    <MainButton color="orange" text={GLOBAL.SUBSCRIPTION} icon={<PayIcon />} />
  );
};
