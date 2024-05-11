import * as React from "react";
const LogoICon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="url(#b)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.429}
        d="m14.451 26.752-5.966.518.517-5.967 12.41-12.331a1.988 1.988 0 0 1 2.844 0l2.526 2.546a1.99 1.99 0 0 1 0 2.824l-12.33 12.41ZM2.351 8.395c-.698-.121-.698-1.123 0-1.245A6.317 6.317 0 0 0 7.44 2.278l.041-.193c.151-.688 1.134-.694 1.293-.004l.05.222a6.35 6.35 0 0 0 5.1 4.845c.701.12.701 1.128 0 1.251a6.35 6.35 0 0 0-5.102 4.843l-.052.225c-.157.688-1.14.684-1.29-.006l-.04-.193a6.316 6.316 0 0 0-5.092-4.873h.004Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={14.599}
        x2={14.599}
        y1={1.566}
        y2={27.27}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AC5B20" />
        <stop offset={0.68} stopColor="#606AC2" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M.677.495H28.52V28.34H.677z" />
      </clipPath>
    </defs>
  </svg>
);
export default LogoICon;
