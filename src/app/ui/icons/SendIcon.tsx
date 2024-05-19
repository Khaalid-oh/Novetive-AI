import * as React from "react";
const SendIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M21.868 11.107.825.587a.474.474 0 0 0-.653.601l3.314 8.286a.271.271 0 0 0 .208.167l9.748 1.623c.301.052.301.485 0 .537l-9.748 1.623a.273.273 0 0 0-.206.168L.173 21.876a.474.474 0 0 0 .652.602l21.044-10.52a.474.474 0 0 0 0-.851Z"
    />
  </svg>
);
export default SendIcon;
