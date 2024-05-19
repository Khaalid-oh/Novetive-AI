import * as React from "react";
const AIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.515}
      d="m24.716 47.22-10.544.915.914-10.544L37.017 15.8a3.515 3.515 0 0 1 5.026 0l4.464 4.498a3.52 3.52 0 0 1 0 4.99l-21.79 21.932ZM3.333 14.782c-1.233-.214-1.233-1.986 0-2.2a11.163 11.163 0 0 0 8.99-8.61l.074-.342c.268-1.216 2.004-1.226 2.285-.007l.088.394a11.222 11.222 0 0 0 9.011 8.562c1.24.21 1.24 1.992 0 2.21a11.222 11.222 0 0 0-9.015 8.558l-.091.397c-.278 1.216-2.014 1.21-2.281-.01l-.07-.341a11.162 11.162 0 0 0-8.998-8.61h.007Z"
    />
  </svg>
);
export default AIcon;
