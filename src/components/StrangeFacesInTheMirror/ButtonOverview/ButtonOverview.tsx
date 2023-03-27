import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ButtonSetWidth_Size48Hierarchy } from '../ButtonSetWidth_Size48Hierarchy/ButtonSetWidth_Size48Hierarchy';
import classes from './ButtonOverview.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    _ButtonCore?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 16:1751 */
export const ButtonOverview: FC<Props> = memo(function ButtonOverview(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ButtonSetWidth_Size48Hierarchy
        className={classes.buttonSetWidth}
        classes={{ _ButtonCore: `${props.classes?._ButtonCore || ''} ${classes._ButtonCore}` }}
        text={{
          text: props.text?.text || <div className={classes.text}>OVERVIEW</div>,
        }}
      />
    </div>
  );
});
