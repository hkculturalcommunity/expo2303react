import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ButtonOverview } from '../ButtonOverview/ButtonOverview';
import classes from './ButtonProgramme.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 68:1772 */
export const ButtonProgramme: FC<Props> = memo(function ButtonProgramme(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <ButtonOverview
        className={classes.buttonOverview}
        text={{
          text: props.text?.text || <div className={classes.text}>PROGRAMME</div>,
        }}
      />
    </button>
  );
});
