import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEmptyAvatar5 = ({
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
    <path
      d="M39.688 42.523c-5.501 3.211-12.88 3.38-17.966-1.213M46.201 26.441c-1.29 1.706-3.054 2.673-4.9 2.673-1.846 0-3.561-.967-4.9-2.673M25.709 26.441c-1.173 1.706-2.777 2.673-4.455 2.673s-3.237-.967-4.455-2.673"
      stroke="#A8A8A8"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEmptyAvatar5;
