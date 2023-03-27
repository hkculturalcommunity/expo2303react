import { memo, SVGProps } from 'react';

const Vector3Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H52V48' stroke='#39940E' strokeOpacity={0.73} strokeWidth={5} />
  </svg>
);
const Memo = memo(Vector3Icon2);
export { Memo as Vector3Icon2 };
