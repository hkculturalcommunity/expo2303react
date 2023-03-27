import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BACKTOTOP.module.css';
import { Vector9Icon } from './Vector9Icon';

interface Props {
  className?: string;
}
/* @figmaId 91:1776 */
export const BACKTOTOP: FC<Props> = memo(function BACKTOTOP(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle45}></div>
      <div className={classes.vector9}>
        <Vector9Icon className={classes.icon} />
      </div>
    </div>
  );
});
