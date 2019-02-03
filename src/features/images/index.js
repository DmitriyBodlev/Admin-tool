
import React, { useState } from "react";
import * as R from "ramda";
import { connect } from "react-redux";
import { compose, withHandlers, lifecycle } from "recompose";
import { openModal, closeModal } from '../../components/modal/actions';
import TooltipComponent from '../../components/tooltip';
import ImageForm from './imageForm';
// icons
import * as I from '../../icons';
// ui
import { Box } from '../../ui';
// feature images
import { createImageRequest, updateImageRequest, deleteImageRequest, getImagesListRequest } from "./actions";
import {
  Header,
  IconWrapper,
  ImagesContent } from './ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

const enhance = compose(
  withHandlers({
    handleOpenModal: (props) => () => (
      props.openModal({
        component: (
          <ImageForm
            closeModal={props.closeModal}
            onAction={props.createImageRequest} />
        ),
      })
    ),
    handleEditImage: (props) => (entity: Object) => (
      props.openModal({
        component: (
          <ImageForm
            initialValues={entity}
            closeModal={props.closeModal}
            onAction={props.updateImageRequest} />
        ),
      })
    ),
  }),
  lifecycle({
    componentDidMount() {
      this.props.getImagesListRequest()
    }
  })
);

export const ImageComponent = (props) => {
  const [ withAction, setWithAction ] = useState(false);
  if (R.not(R.isNil(props.image.imageURL))) {
    return (
      <Box
        width='250px'
        height='400px'
        display='flex'
        overflow='hidden'
        borderRadius='20px'
        alignItems='center'
        justifyContent='center'
        boxShadow='5px 5px 21px 1px rgba(0, 0, 0, 0.6)'
        onMouseEnter={() => setWithAction(true)}
        onMouseLeave={() => setWithAction(false)}
      >
        {
          withAction
          && (
            <Box
              p='5px'
              top='0'
              right='0'
              display='flex'
              position='absolute'
              borderRadius='0 0 0 10px'
              background='rgba(0, 0, 0, 0.5)'
            >
              <IconWrapper
                p='0 5px'
                width='25px'
                height='15px'
                display='flex'
                onClick={() => props.handleEditImage(props.image)}
              >
                {I.pencil('white')}
              </IconWrapper>
              <IconWrapper
                p='0 5px'
                width='25px'
                height='15px'
                display='flex'
                onClick={() => props.deleteImageRequest(props.image.id)}
              >
                {I.trash('white')}
              </IconWrapper>
            </Box>
          )
        }
        <Box
          width='100%'
          height='100%'
          backgroundSize='cover'
          backgroundRepeat='no-repeat'
          backgroundPosition='center center'
          backgroundImage={`url(${props.image.imageURL})`} />
      </Box>
    )
  }
  return null;
}

export const ImageWithTooltip = (props) => (
  <TooltipComponent position={props.image.position} tooltip={props.image.tooltip}>
    <ImageComponent
      image={props.image}
      handleEditImage={props.handleEditImage}
      deleteImageRequest={props.deleteImageRequest} />
  </TooltipComponent>
)

const Images = (props) => (
  <Box>
    <Header
      m='o auto'
      p='10px 20px'
      display='flex'
      fontSize='24px'
      alignItems='center'
      background='#dcd0e2'
    >
      Manage Images
      <IconWrapper 
        pt='2px'
        pl='10px'
        width='25px'
        height='15px'
        display='flex'
        onClick={props.handleOpenModal}
      >
        {I.plusRound('darkred')}
      </IconWrapper>
    </Header>
    <ImagesContent
      p='40px'
      display='grid'
      gridRowGap='40px'
      alignItems='center'
      gridTemplateColumns='1fr'
    >
      {R.values(props.images).map((image) => (
        <ImageWithTooltip
          key={image.id}
          image={image}
          handleEditImage={props.handleEditImage}
          deleteImageRequest={props.deleteImageRequest} />
      ))}
    </ImagesContent>
  </Box>
);

const mapStateToProps = (state) => ({
  images: state.images.imagesList,
});

export default connect(mapStateToProps, {
  getImagesListRequest,
  updateImageRequest,
  deleteImageRequest,
  createImageRequest,
  openModal,
  closeModal,
})(enhance(Images));