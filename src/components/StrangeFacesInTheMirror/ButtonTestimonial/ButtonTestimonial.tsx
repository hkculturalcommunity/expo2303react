import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ButtonOverview } from '../ButtonOverview/ButtonOverview';
import classes from './ButtonTestimonial.module.css';

interface Props {
  className?: string;
}
/* @figmaId 68:1773 */
export const ButtonTestimonial: FC<Props> = memo(function ButtonTestimonial(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <ButtonOverview
        className={classes.buttonOverview}
        classes={{ _ButtonCore: classes._ButtonCore }}
        text={{
          text: <div className={classes.text}>TESTIMONIAL</div>,
        }}
      />
    </button>
  );
});
