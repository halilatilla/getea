import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEmptyAvatar3 = ({
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
      d="M30 26v7M42 26v7M36 49c-8.387 0-13.416-5.03-13.416-5.03M49.417 43.97S44.387 49 36 49"
      stroke="#A8A8A8"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEmptyAvatar3;
