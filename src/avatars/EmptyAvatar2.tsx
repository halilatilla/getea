import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEmptyAvatar2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={36} cy={36} r={36} fill="currentColor" />
    <path
      d="M45.69 49.05c-6.175 3.604-14.457 3.793-20.165-1.361M53 31c-1.448 1.914-3.428 3-5.5 3s-3.997-1.086-5.5-3M30 31c-1.317 1.914-3.117 3-5 3s-3.633-1.086-5-3"
      stroke="#A8A8A8"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEmptyAvatar2;
