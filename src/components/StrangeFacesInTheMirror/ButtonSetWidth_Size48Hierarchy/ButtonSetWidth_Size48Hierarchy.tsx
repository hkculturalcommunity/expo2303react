import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _ButtonCore_Size48IconNoTypeFi } from '../_ButtonCore_Size48IconNoTypeFi/_ButtonCore_Size48IconNoTypeFi';
import classes from './ButtonSetWidth_Size48Hierarchy.module.css';

interface Props {
  className?: string;
  classes?: {
    _ButtonCore?: string;
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 6:4929 */
export const ButtonSetWidth_Size48Hierarchy: FC<Props> = memo(function ButtonSetWidth_Size48Hierarchy(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_ButtonCore_Size48IconNoTypeFi
        className={`${props.classes?._ButtonCore || ''} ${classes._ButtonCore}`}
        text={{
          text: props.text?.text || <div className={classes.text}>Button CTA</div>,
        }}
      />
    </div>
  );
});
