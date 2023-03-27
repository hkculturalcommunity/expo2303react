import { memo, SVGProps } from 'react';

const Vector7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 9.15527e-05H52V48.0001' stroke='#39940E' strokeWidth={5} />
  </svg>
);
const Memo = memo(Vector7Icon);
export { Memo as Vector7Icon };
