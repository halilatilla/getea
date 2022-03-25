import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEmptyAvatar4 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={31} cy={31} r={31} fill="currentColor" />
    <circle
      cx={30.621}
      cy={42.59}
      r={3.076}
      stroke="#A8A8A8"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M46 26.333c-1.273 1.682-3.013 2.636-4.833 2.636-1.82 0-3.513-.954-4.834-2.636M25.788 26.333c-1.157 1.682-2.739 2.636-4.394 2.636-1.655 0-3.193-.954-4.394-2.636"
      stroke="#A8A8A8"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEmptyAvatar4;
