import styled, { css } from 'styled-components';
// ui
import { Box } from '../../ui';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const Tooltip = styled(Box)`
  ${({ additionalStyles }) => additionalStyles};
  &:after {
    width: 0;
    height: 0;
    content: '';
    position: absolute;
    border-style: solid;
    ${({ afterStyles }) => afterStyles};
  }
`;

export const tooltipPositions = {
  left: css`
    left: 0;
    top: 50%;
    max-width: calc(100% - 150px);
    transform: translate(calc(-100% - 10px), -50%);
  `,
  right: css`
    right: 0;
    top: 50%;
    max-width: calc(100% - 150px);
    transform: translate(calc(100% + 10px), -50%);
  `,
  top: css`
    left: 50%;
    top: 0;
    max-width: 100%;
    transform: translate(-50%, calc(-100% - 10px));
  `,
  bottom: css`
    left: 50%;
    bottom: 0;
    max-width: 100%;
    transform: translate(-50%, calc(100% + 10px));
  `,
}

export const tooltipAfterPositions = {
  left: css`
    top: 50%;
    right: 0;
    border-width: 10px 0 10px 10px;
    transform: translate(95%, -50%);
    border-color: transparent transparent transparent black;
  `,
  right: css`
    top: 50%;
    left: 0;
    border-width: 10px 10px 10px 0;
    transform: translate(-95%, -50%);
    border-color: transparent black transparent transparent;
  `,
  top: css`
    bottom: 0;
    left: 50%;
    border-width: 10px 10px 0 10px;
    transform: translate(-50%, 95%);
    border-color: black transparent transparent transparent;
  `,
  bottom: css`
    top: 0;
    left: 50%;
    border-width: 0 10px 10px 10px;
    transform: translate(-50%, -95%);
    border-color: transparent transparent black transparent;
  `,
}