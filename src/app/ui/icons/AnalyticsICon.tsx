import * as React from "react";
const AnalyticsIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M32.953 9.25a2.89 2.89 0 0 0-2.69 3.946l-6.083 6.082a2.88 2.88 0 0 0-2.11 0l-4.348-4.348a2.892 2.892 0 1 0-5.381 0L5.102 22.17a2.891 2.891 0 1 0 1.635 1.635l7.24-7.239a2.88 2.88 0 0 0 2.11 0l4.348 4.349a2.89 2.89 0 1 0 5.38 0l6.083-6.083a2.891 2.891 0 1 0 1.055-5.581Z"
    />
  </svg>
);
export default AnalyticsIcon;
