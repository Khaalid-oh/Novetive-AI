import * as React from "react";
const InboxIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.688}
      d="M3.896 17H8.5a2.833 2.833 0 0 1 2.833 2.833 2.833 2.833 0 0 0 2.834 2.834h5.666a2.833 2.833 0 0 0 2.834-2.834A2.833 2.833 0 0 1 25.5 17h4.604"
    />
    <path
      stroke="#fff"
      strokeWidth={1.688}
      d="M21.604 3.896h-9.208a8.5 8.5 0 0 0-8.5 8.5v9.208a8.5 8.5 0 0 0 8.5 8.5h9.208a8.5 8.5 0 0 0 8.5-8.5v-9.208a8.5 8.5 0 0 0-8.5-8.5Z"
    />
  </svg>
);
export default InboxIcon;
