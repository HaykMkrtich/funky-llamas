import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2<any>`
  text-transform: uppercase;
  font-size: 28px;
  font-family: Economica;
  width: 100%;
  text-align: center;
  margin: 10px 0 20px;
`;
interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export default function Title(props: TitleProps): JSX.Element {
  return <StyledTitle {...props} />;
}
