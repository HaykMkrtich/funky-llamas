import React from 'react';
import styled from 'styled-components';
import logo from '../static/sol_logo.png';
import Title from './Title';
const recent = [1, 2, 3, 4, 5, 6, 7, 8];

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin-bottom: 40px;
  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr;
  }
  .item {
    width: 100%;
    background: var(--var-primary-color);
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    cursor: pointer;
    border-style: solid;
    border-color: transparent;
    border-width: 1px;
    &:hover {
      border-color: var(--var-primary-text-color);
      box-shadow: 0 0 8px 2px rgba(100, 100, 100, 0.1);
    }
    img {
      width: 28px;
      height: 28px;
      object-fit: contain;
      padding: 8px;
      background: var(--var-primary-text-color);
      margin-right: 16px;
    }
    p {
      display: flex;
      align-items: center;
      color: var(--var-bgcolor);
      padding-right: 8px;
    }
  }
`;

export default function RecentOpens(): JSX.Element {
  return (
    <>
      <Title> Recent Opens </Title>
      <Wrapper>
        {recent.map((el) => (
          <div className="item">
            <img src={logo} alt="" />
            <p> 8jj...EUq opened 0.05 SOL and won 0.025 SOL</p>
          </div>
        ))}
      </Wrapper>
    </>
  );
}
