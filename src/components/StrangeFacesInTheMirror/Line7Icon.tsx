import { memo, SVGProps } from 'react';

const Line7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 943 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.11} d='M0 0H943' stroke='black' strokeWidth={3} />
  </svg>
);
const Memo = memo(Line7Icon);
export { Memo as Line7Icon };
