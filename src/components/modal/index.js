import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import {
  pure,
  compose,
  lifecycle,
  withHandlers } from 'recompose';
// ui
import { Box } from '../../ui';
// component modal
import { closeModal } from './actions';
import { CloseButton } from './ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

const enhance = compose(
  withHandlers({
    handleCloseModal: (props: Object) => (e: Object) => {
      if (R.equals(e.key, 'Escape')) {
        props.closeModal();
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      document.addEventListener('keyup', this.props.handleCloseModal);
    },
    componentWillUnmount() {
      document.removeEventListener('keyup', this.props.handleCloseModal);
    },
  }),
  pure,
);

export const renderCloseIcon = (props: Object) => (
  <CloseButton
    top='20px'
    right='15px'
    border='none'
    fontSize='20px'
    color='darkred'
    position='absolute'
    fontFamily='sans-serif'
    onClick={props.closeModal}
  >
    X
  </CloseButton>
);

export const ModalComponent = (props: Object) => {
  const { component } = props.params.modal;
  return (
    <Box
      top='0'
      zIndex='3'
      width='100%'
      height='100%'
      display='flex'
      position='fixed'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
      background='rgba(53, 53, 53, 0.5)'
    >
      <Box
        position='fixed'
        borderRadius='2px'
        background-color='gray'
        boxShadow='0 0 8px 1px rgba(0, 0, 0, 0.2)'
      >
        {renderCloseIcon(props)}
        {component}
      </Box>
    </Box>
  );
};

export default connect(null, {
  closeModal,
})(enhance(ModalComponent));
