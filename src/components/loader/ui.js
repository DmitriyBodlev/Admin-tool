import styled, { keyframes } from 'styled-components';
// ui
import { Box } from '../../ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const LoaderWrapper = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  
  position: fixed;
`;

export const squareRotate = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    background-color: #dcd0e2;
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    background-color: darkred;
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    background-color: #dcd0e2;
  }
`;

export const LoaderContent = styled(Box)`
  animation: ${squareRotate} 1.2s infinite ease-in-out;
`;