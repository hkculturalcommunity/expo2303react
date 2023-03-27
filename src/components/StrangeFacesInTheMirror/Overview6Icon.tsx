import { memo, SVGProps } from 'react';

const Overview6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 936 192' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M190 96C190 145.706 149.706 186 100 186C50.2944 186 10 145.706 10 96C10 46.2944 50.2944 6 100 6C149.706 6 190 46.2944 190 96Z'
      fill='#D9D9D9'
    />
    <circle cx={340} cy={96} r={90} fill='#D9D9D9' />
    <circle cx={580} cy={96} r={90} fill='#D9D9D9' />
    <circle cx={820} cy={96} r={90} fill='#D9D9D9' />
  </svg>
);
const Memo = memo(Overview6Icon);
export { Memo as Overview6Icon };
