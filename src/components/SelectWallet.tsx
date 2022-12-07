import React from 'react';
import styled from 'styled-components';

import logo from '../static/sol_logo.png';

interface SelectWalletProps {
  onSelect: (wallet: string) => void;
}

const wallets = ['sol', 'eth', 'btc'];

function SelectWallet({ onSelect }: SelectWalletProps): JSX.Element {
  return (
    <StyledList>
      {wallets.map((wallet, index) => (
        <li key={`select_wallets_${index}`} onClick={() => onSelect(wallet)}>
          <p>{wallet}</p> <img src={logo} alt="" />
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  background: var(--var-bgcolor);
  max-width: 400px;
  height: max-content;
  padding: 20px;
  width: 100%;
  margin: 40px auto 0;
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--var-primary-text-color);
    cursor: pointer;
    &:hover {
      color: var(--var-primary-color);
      img {
        background: var(--var-primary-color);
      }
    }
    p {
      text-transform: uppercase;
      line-height: 44px;
    }
    img {
      width: 28px;
      height: 28px;
      object-fit: contain;
      padding: 8px;
      background: var(--var-primary-text-color);
    }
  }
`;
export default SelectWallet;
