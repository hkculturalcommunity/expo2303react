import { memo, SVGProps } from 'react';

const Vector9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 16.5L22.5 0.5L46 16.5' stroke='#6EB14F' strokeWidth={5} />
  </svg>
);
const Memo = memo(Vector9Icon);
export { Memo as Vector9Icon };
