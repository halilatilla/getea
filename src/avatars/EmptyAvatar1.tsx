import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEmptyAvatar1 = ({
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
      d="M37.999 55.145c-6.317.03-12.738-3.485-14.829-9.95M56.534 27c-1.464 1.798-3.466 2.817-5.56 2.817-2.095 0-4.041-1.019-5.561-2.817M30.585 27c-1.464 1.798-3.466 2.817-5.56 2.817-2.095 0-4.041-1.019-5.56-2.817"
      stroke="#A8A8A8"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEmptyAvatar1;
