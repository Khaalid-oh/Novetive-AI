import * as React from "react";
const DashboardICon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.8}
      d="M4.75 4.75h12.667v15.833H4.75V4.75Zm3.167 3.167v9.5h6.333v-9.5H7.917ZM20.583 4.75H33.25v9.5H20.583v-9.5Zm3.167 3.167v3.166h6.333V7.917H23.75Zm-3.167 9.5H33.25V33.25H20.583V17.417Zm3.167 3.166v9.5h6.333v-9.5H23.75Zm-19 3.167h12.667v9.5H4.75v-9.5Zm3.167 3.167v3.166h6.333v-3.166H7.917Z"
    />
  </svg>
);
export default DashboardICon;
