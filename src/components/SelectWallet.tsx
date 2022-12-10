import React from 'react';
import styled from 'styled-components';

import { useWallet } from '@solana/wallet-adapter-react';
import cn from 'classnames';
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
    &.not_installed {
      color: grey;
      opacity: 0.7;
      img {
        background: grey;
      }
    }
  }
`;

interface SelectWalletProps {
  onSelect: () => void;
}

export default function SelectWallet({ onSelect }: SelectWalletProps): JSX.Element {
  const { wallets, select } = useWallet();
  return (
    <StyledList>
      {wallets.map((wallet, index) => (
        <li
          key={`select_wallets_${index}`}
          onClick={() => {
            if (wallet.readyState === 'Installed') {
              select(wallet.adapter.name);
              onSelect();
            }
          }}
          className={cn({ not_installed: wallet.readyState !== 'Installed' })}
        >
          <p>{wallet.adapter.name}</p> <img src={wallet.adapter.icon} alt="" />
        </li>
      ))}
    </StyledList>
  );
}
