import React, { useState } from 'react';
import * as R from 'ramda';
// ui
import { Box } from '../../ui';
// component tooltip
import { Tooltip, tooltipPositions, tooltipAfterPositions } from './ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const TooltipComponent = (props: Object) => {
  const [ showTooltip, setShowTooltip ] = useState(false);
  return (
    <Box
      width='max-content'
      position='relative'
      height='max-content'
      zIndex={showTooltip && '2'}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
        {props.children}
        {
          R.and(showTooltip, props.tooltip)
          && (
            <Tooltip
              p='5px 10px'
              color='white'
              borderRadius='7px'
              background='black'
              position='absolute'
              width='max-content'
              height='max-content'
              additionalStyles={tooltipPositions[props.position]}
              afterStyles={tooltipAfterPositions[props.position]}
            >
              {props.tooltip}
            </Tooltip>
          )
        }
    </Box>
  );
};

export default TooltipComponent;
