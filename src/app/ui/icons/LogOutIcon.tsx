import * as React from "react";
const LogOutIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g fill="#fff" opacity={0.9}>
      <path d="M8 2.667h12a2.667 2.667 0 0 1 2.667 2.666V8H20V5.333H8v21.334h12V24h2.667v2.667A2.667 2.667 0 0 1 20 29.333H8a2.667 2.667 0 0 1-2.667-2.666V5.333A2.667 2.667 0 0 1 8 2.667Z" />
      <path d="m21.453 20.787 1.88 1.88L30 16l-6.667-6.667-1.88 1.88 3.44 3.454H12v2.666h12.893l-3.44 3.454Z" />
    </g>
  </svg>
);
export default LogOutIcon;
