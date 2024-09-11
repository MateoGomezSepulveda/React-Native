import * as React from "react"
import Svg, {
  RadialGradient,
  Stop,
  Path,
  LinearGradient,
} from "react-native-svg"
export const Logo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <RadialGradient
      id="a"
      cx={33.34}
      cy={27.936}
      r={43.888}
      gradientTransform="matrix(1 0 0 -1 0 66)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#f4e9c3" />
      <Stop offset={0.219} stopColor="#f8eecd" />
      <Stop offset={0.644} stopColor="#fdf4dc" />
      <Stop offset={1} stopColor="#fff6e1" />
    </RadialGradient>
    <Path
      fill="url(#a)"
      d="M51.03 37.34c.16.98 1.08 1.66 2.08 1.66h5.39c2.63 0 4.75 2.28 4.48 4.96-.24 2.34-2.34 4.04-4.69 4.04H49c-1.22 0-2.18 1.08-1.97 2.34.16.98 1.08 1.66 2.08 1.66h8.39c1.24 0 2.37.5 3.18 1.32.82.81 1.32 1.94 1.32 3.18 0 2.49-2.01 4.5-4.5 4.5h-49A5.495 5.495 0 0 1 3 55.5C3 52.46 5.46 50 8.5 50H14c1.22 0 2.18-1.08 1.97-2.34-.16-.98-1.08-3.66-2.08-3.66H5.5c-2.63 0-4.75-2.28-4.48-4.96C1.26 36.7 3.36 35 5.71 35H8c1.71 0 3.09-1.43 3-3.16C10.91 30.22 9.45 29 7.83 29H4.5C1.87 29-.25 26.72.02 24.04.26 21.7 2.37 20 4.71 20H20c.83 0 1.58-.34 2.12-.88S23 17.83 23 17c0-1.66-1.34-3-3-3h-1.18c-.62-.09-1.43 0-2.32 0h-9A5.495 5.495 0 0 1 2 8.5C2 5.46 4.46 3 7.5 3h49c3.21 0 5.8 2.79 5.47 6.06-.29 2.86-1.86 4.94-4.73 4.94H52c-2.76 0-5 2.24-5 5 0 1.38.56 2.63 1.46 3.54.91.9 2.16 1.46 3.54 1.46h6.5c3.21 0 5.8 2.79 5.47 6.06-.29 2.86-2.86 4.94-5.73 4.94H53c-1.22 0-2.18 1.08-1.97 2.34z"
    />
    <LinearGradient
      id="b"
      x1={32}
      x2={32}
      y1={-3.34}
      y2={59.223}
      gradientTransform="matrix(1 0 0 -1 0 66)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#155cde" />
      <Stop offset={0.278} stopColor="#1f7fe5" />
      <Stop offset={0.569} stopColor="#279ceb" />
      <Stop offset={0.82} stopColor="#2cafef" />
      <Stop offset={1} stopColor="#2eb5f0" />
    </LinearGradient>
    <Path
      fill="url(#b)"
      d="M58 32c0 13.35-10.05 24.34-23 25.83-.98.11-1.99.17-3 .17-1.71 0-3.38-.17-5-.49C15.03 55.19 6 44.65 6 32 6 17.64 17.64 6 32 6s26 11.64 26 26z"
    />
    <Path
      fill="#fff"
      d="m42.8 36.05-.76 2A3.04 3.04 0 0 1 39.19 40H35v17.83c-.98.11-1.99.17-3 .17-1.71 0-3.38-.17-5-.49V40h-2.95C22.36 40 21 38.66 21 37v-2c0-1.66 1.36-3 3.05-3H27v-6c0-5.51 4.49-10 10-10h3c2.21 0 4 1.79 4 4s-1.79 4-4 4h-3c-1.1 0-2 .9-2 2v6h4.95c2.13 0 3.6 2.09 2.85 4.05z"
    />
  </Svg>
)
