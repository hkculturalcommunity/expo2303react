import { memo, SVGProps } from 'react';

const Vector12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M13.4064 0.203967L0.195124 13.5635L12.9984 26.2008' stroke='#6EB14F' strokeWidth={5} />
  </svg>
);
const Memo = memo(Vector12Icon);
export { Memo as Vector12Icon };
