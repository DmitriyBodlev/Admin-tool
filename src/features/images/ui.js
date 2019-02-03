import * as R from 'ramda';
import styled from 'styled-components';
import {
  color,
  space,
  width,
  height,
  border,
  display,
  position,
  fontSize,
  background,
  alignItems,
  lineHeight,
  borderRadius,
  justifyContent } from 'styled-system';
// ui
import { Box } from '../../ui';
// //////////////////////////////////////////////////////////////////////////////


export const ImagesContent = styled(Box)`
  justify-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Header = styled.header`
  ${space}
  ${display}
  ${fontSize}
  ${alignItems}
  ${background}
`;

export const IconWrapper = styled(Box)`
  cursor: pointer;
`;

export const DropzoneWrapper = styled(Box)`
  border-style: ${({ withLogo }: Object) => R.equals(withLogo, true) ? 'solid' : 'dashed'};
  & .dropzone {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    position: absolute !important;
    & > p {
      display: ${({ withLogo }: Object) => R.equals(withLogo, true) ? 'none' : 'block'};
    }
  }
`;

export const Label = styled.label`
  ${space}
  ${width}
  ${color}
  ${display}
  ${fontSize}
  &.required::after {
    content: '*';
    color: red;
  }
`;
export const Input = styled.input`
  ${space}
  ${width}
  ${height}
  ${border}
  ${fontSize}
  ${background}
  ${borderRadius}
  cursor: text;
  &:focus {
    box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
  }
`;

export const SelectWrapper = styled(Box)`
  &:after {
    top: 24px;
    width: 6px;
    content: '';
    height: 6px;
    right: 30px;
    position: absolute;
    border: solid black;
    pointer-events: none;
    border-width: 0px 1px 1px 0;
    transform: rotate(45deg) translate(0, -60%);
  }
`;

export const SelectComponent = styled.select`
  ${space}
  ${width}
  ${height}
  ${border}
  ${fontSize}
  ${position}
  ${background}
  ${lineHeight}
  ${borderRadius}
  appearance: none;
  &:focus {
    box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
  }
`;

export const Button = styled.div`
  ${width}
  ${color}
  ${height}
  ${border}
  ${display}
  ${alignItems}
  ${background}
  ${borderRadius}
  ${justifyContent}
  cursor: pointer;
`;
