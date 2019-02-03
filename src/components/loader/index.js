import React from 'react';
import { connect } from 'react-redux';
// ui
import { Box } from '../../ui';
// components loader
import { closeLoader } from './actions';
import { LoaderContent } from './ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const LoaderComponent = (props: Object) => (
  <Box
    top='0'
    left='0'
    zIndex='4'
    width='100%'
    height='100%'
    display='flex'
    position='fixed'
    alignItems='center'
    flexDirection='column'
    justifyContent='center'
    onClick={props.closeLoader}
    background='rgba(255, 255, 255, 0.8)'
  >
    <LoaderContent 
      width='40px'
      height='40px'
      padding='15px'
      position='fixed'
      borderRadius='50%' />
  </Box>
);

export default connect(null, {
  closeLoader,
})(LoaderComponent);

