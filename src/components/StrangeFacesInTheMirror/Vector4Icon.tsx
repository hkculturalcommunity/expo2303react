import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M52 48L-1.54972e-06 48L2.64657e-06 -1.68496e-06' stroke='black' strokeWidth={5} />
  </svg>
);
const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
