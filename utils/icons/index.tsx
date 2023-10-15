import React, { ReactNode } from "react";

type PayIconProps = {
  color?: "";
};

export const PayIcon = ({ color }: PayIconProps) => {
  return (
    <svg
      width="34"
      height="27"
      viewBox="0 0 34 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.0022 12.3783L32.6298 15.6253C32.016 20.9755 31.7092 23.6505 29.7875 25.2635C27.8657 26.8765 24.9854 26.8765 19.225 26.8765H14.8053C9.04478 26.8765 6.16454 26.8765 4.24278 25.2635C2.32104 23.6505 2.01419 20.9755 1.40051 15.6253L1.02807 12.3783C0.735558 9.82814 0.589308 8.55306 1.12099 8.02596C1.4086 7.74084 1.79971 7.56614 2.21787 7.536C2.99086 7.4803 3.96164 8.38707 5.90317 10.2006C6.90726 11.1385 7.4093 11.6075 7.96936 11.6801C8.27969 11.7203 8.59588 11.6789 8.88243 11.5607C9.39959 11.3471 9.74439 10.7674 10.434 9.6079L14.0688 3.49635C15.3719 1.30536 16.0236 0.209869 17.0151 0.209869C18.0067 0.209869 18.6583 1.30536 19.9614 3.49634L23.5962 9.60788C24.2859 10.7674 24.6307 11.3471 25.1478 11.5607C25.4344 11.6789 25.7506 11.7203 26.0609 11.6801C26.621 11.6075 27.123 11.1385 28.127 10.2006C30.0686 8.38707 31.0394 7.4803 31.8124 7.536C32.2305 7.56614 32.6216 7.74084 32.9093 8.02596C33.441 8.55306 33.2947 9.82814 33.0022 12.3783ZM18.5628 14.4752L18.403 14.2401C17.7855 13.3312 17.4768 12.8768 17.0151 12.8768C16.5535 12.8768 16.2447 13.3312 15.6272 14.2401L15.4675 14.4752C15.2921 14.7335 15.2044 14.8627 15.0676 14.9479C14.9307 15.0331 14.7604 15.0647 14.4197 15.128L14.1095 15.1856C12.9103 15.4081 12.3108 15.5195 12.1681 15.8959C12.0255 16.2723 12.4342 16.6644 13.2517 17.4487L13.4632 17.6516C13.6955 17.8745 13.8116 17.986 13.8639 18.1239C13.9161 18.2617 13.8985 18.4104 13.8634 18.7077L13.8314 18.9785C13.7079 20.0249 13.6461 20.5483 14.0194 20.7808C14.393 21.0135 14.9543 20.8013 16.077 20.3772L16.3674 20.2675C16.6866 20.1469 16.846 20.0867 17.0151 20.0867C17.1843 20.0867 17.3437 20.1469 17.6629 20.2675L17.9532 20.3772C19.076 20.8013 19.6372 21.0135 20.0108 20.7808C20.3842 20.5483 20.3223 20.0249 20.1988 18.9785L20.1668 18.7077C20.1317 18.4104 20.1142 18.2617 20.1663 18.1239C20.2187 17.986 20.3348 17.8745 20.5671 17.6516L20.7786 17.4487C21.596 16.6644 22.0049 16.2723 21.8622 15.8959C21.7195 15.5195 21.1199 15.4081 19.9208 15.1856L19.6106 15.128C19.2698 15.0647 19.0995 15.0331 18.9627 14.9479C18.8259 14.8627 18.7381 14.7335 18.5628 14.4752Z"
        fill={color ? color : "#FFF886"}
      />
    </svg>
  );
};

type SignUpNowProps = {
  color?: "";
};

export const SignUpNow = ({ color }: SignUpNowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
    >
      <path
        d="M16.4329 12.4133C19.6545 12.4133 22.2663 9.80164 22.2663 6.57998C22.2663 3.35831 19.6545 0.746643 16.4329 0.746643C13.2113 0.746643 10.5996 3.35831 10.5996 6.57998C10.5996 9.80164 13.2113 12.4133 16.4329 12.4133Z"
        fill={color ? color : "#155B82"}
      />
      <path
        d="M2.91096 6.3146C2.76445 5.72859 2.17062 5.37227 1.5846 5.51879C0.99857 5.66529 0.64227 6.25913 0.788774 6.84516L1.34581 9.07329C2.37359 13.1843 5.48967 16.423 9.50612 17.6322V24.1557C9.50608 25.466 9.50603 26.5586 9.62266 27.426C9.74574 28.3415 10.0165 29.1681 10.6807 29.8324C11.345 30.4965 12.1715 30.7673 13.0871 30.8904C13.9545 31.0071 15.0471 31.0071 16.3574 31.0069H16.5091C17.8194 31.0071 18.912 31.0071 19.7794 30.8904C20.6949 30.7673 21.5214 30.4965 22.1856 29.8324C22.8499 29.1681 23.1207 28.3415 23.2438 27.426C23.3603 26.5586 23.3603 25.466 23.3603 24.1558V18.041C24.7911 18.4674 25.8841 19.7107 26.0664 21.261L27.0136 29.3119C27.0842 29.9117 27.6277 30.3409 28.2276 30.2703C28.8276 30.1997 29.2567 29.6562 29.1861 29.0562L28.239 21.0055C27.8826 17.9769 25.3159 15.6944 22.2666 15.6944H10.7231C7.15977 14.8581 4.35732 12.1 3.46799 8.54275L2.91096 6.3146Z"
        fill={color ? color : "#155B82"}
      />
    </svg>
  );
};