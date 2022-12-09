import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';
interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const StyledButton = styled('button')<any>`
  all: unset;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  background: var(--var-primary-color);
  padding: 4px 12px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--var-bgcolor);
  border-style: solid;
  border-color: transparent;
  border-width: 1px;
  height: 36px;
  &:hover {
    border-color: var(--var-primary-color);
    background: var(--var-primary-text-color);
  }
  &:disabled {
    opacity: 0.7;
  }
`;
export default function Button(props: ButtonProps): JSX.Element {
  return <StyledButton {...props} />;
}
