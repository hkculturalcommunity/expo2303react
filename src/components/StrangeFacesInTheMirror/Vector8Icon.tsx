import { memo, SVGProps } from 'react';

const Vector8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M52 48.0001L-6.19888e-06 48.0001L-2.00259e-06 6.03039e-05' stroke='#39940E' strokeWidth={5} />
  </svg>
);
const Memo = memo(Vector8Icon);
export { Memo as Vector8Icon };
