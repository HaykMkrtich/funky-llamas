import React, { useState } from 'react';
import styled from 'styled-components';
import Modal, { ModalProps } from 'react-overlays/Modal';

import Layout from '../components/hoc/Layout';

import image from '../static/Lootbox-1.jpg';
import logo from '../static/sol_logo.png';
import video from '../static/Lootbox-1.mp4';
import SelectWallet from '../components/SelectWallet';
const arr = [1, 2, 3, 4, 5, 6];
const recent = [1, 2, 3, 4, 5, 6, 7, 8];

function Home(): JSX.Element {
  const [wallet, setWallet] = useState('');
  const [result, setResult] = useState('');
  const [pending, setPending] = useState(false);
  const [openWalletList, setOpenWalletList] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleOpen = () => {
    if (wallet) {
      setPending(true);
      setTimeout(() => {
        setPending(false);
        setShowAnimation(true);
      }, 2000);
    } else {
      setOpenWalletList(true);
    }
  };

  const handleEndVideo = () => {
    setTimeout(() => {
      setShowAnimation(false);
      setResult('you win 5 sol');
    }, 1000);
    setTimeout(() => {
      setResult('');
    }, 4000);
  };
  const renderBackdrop = (props: any) => <Backdrop {...props} />;

  return (
    <Layout>
      <Wrapper>
        <StyledTitle>Start opening boxes </StyledTitle>

        <StyledModal
          show={openWalletList}
          onHide={() => setWallet('')}
          renderBackdrop={renderBackdrop}
          aria-labelledby="modal-label"
        >
          <SelectWallet
            onSelect={(wallet) => {
              setWallet(wallet);
              setOpenWalletList(false);
            }}
          />
        </StyledModal>
        <StyledModal
          show={showAnimation}
          renderBackdrop={renderBackdrop}
          aria-labelledby="modal-label"
        >
          <StyledVideo src={video} onEnded={handleEndVideo} autoPlay />
        </StyledModal>
        <StyledModal show={result} renderBackdrop={renderBackdrop} aria-labelledby="modal-label">
          <StyledModalMessage>{result}</StyledModalMessage>
        </StyledModal>

        {arr.map((el, index) => (
          <div className="box" key={`box_${index}`}>
            <img className="box_img" src={image} alt="" />
            <div className="info">
              <img src={logo} alt="" />
              <p>{el} sol</p>
              <button onClick={handleOpen} disabled={pending}>
                {wallet ? (pending ? 'process...' : 'open') : 'select wallet'}
              </button>
            </div>
          </div>
        ))}

        <StyledTitle> Recent Opens </StyledTitle>
        <div className="recent">
          {recent.map((el) => (
            <div className="item">
              <img src={logo} alt="" />
              <p> 8jj...EUq opened 0.05 SOL and won 0.025 SOL</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </Layout>
  );
}
const Wrapper = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 16px;
  flex-wrap: wrap;
  .box {
    border-width: 2px;
    border-color: var(--var-primary-color);
    border-style: dashed;
    min-height: 280px;
    min-width: 280px;
    max-height: 280px;
    max-width: 280px;
    padding: 16px 16px 80px 16px;
    margin-bottom: 16px;
    &:hover {
      border-style: solid;
      box-shadow: 0 0 8px 2px rgba(100, 100, 100, 0.1);
    }
    .box_img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      img {
        width: 28px;
        height: 28px;
        object-fit: contain;
        background: var(--var-primary-text-color);
        padding: 8px;
      }
      p {
        font-family: Economica;
        text-align: left;
        flex: 1;
        padding-left: 10px;
        text-transform: uppercase;
        font-size: 24px;
        line-height: 44px;
      }
      button {
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
        &:hover {
          border-color: var(--var-primary-color);
          background: var(--var-primary-text-color);
        }
        &:disabled {
        }
      }
    }
  }
  .modal {
    background-color: var(--var-bgcolor);
  }

  .recent {
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
  }
`;
const Backdrop = styled.div`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;
const StyledModal = styled(Modal)<ModalProps>`
  position: fixed;
  z-index: 1040;
  top: 0;
  width: 100%;
  display: flex;
  height: 100%;
  padding: 20px;
`;
const StyledVideo = styled('video')`
  max-width: 80vmin;
  height: 80vmin;
  margin: 5vmin auto 0;
  width: 100%;
  padding: 20px;
  background: var(--var-bgcolor);
  border: 4px solid var(--var-primary-color);
`;
const StyledModalMessage = styled('div')`
  max-width: 80vmin;
  min-height: 200px;
  height: max-content;
  margin: 5vmin auto 0;
  width: 100%;
  padding: 20px;
  justify-content: center;
  display: flex;
  font-size: 28px;
  align-items: center;
  background: var(--var-bgcolor);
  border: 4px solid var(--var-primary-color);
`;

const StyledTitle = styled.h2`
  text-transform: uppercase;
  font-size: 28px;
  font-family: Economica;
  width: 100%;
  text-align: center;
  margin: 10px 0 20px;
`;
export default Home;
