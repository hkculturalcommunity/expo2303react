import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ButtonOverview } from '../ButtonOverview/ButtonOverview';
import classes from './ButtonGallery.module.css';

interface Props {
  className?: string;
}
/* @figmaId 68:1771 */
export const ButtonGallery: FC<Props> = memo(function ButtonGallery(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <ButtonOverview
        className={classes.buttonOverview}
        text={{
          text: <div className={classes.text}>GALLERY</div>,
        }}
      />
    </button>
  );
});
