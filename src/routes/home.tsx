import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import Layout from '../components/hoc/Layout';

import image from '../static/Lootbox-1.jpg';
import logo from '../static/sol_logo.png';
import video from '../static/Lootbox-1.mp4';
import SelectWallet from '../components/SelectWallet';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import Modal from '../components/Modal';
import Button from '../components/Button';
import RecentOpens from '../components/RecentOpens';
import Title from '../components/Title';
const arr = [1, 2, 3, 4, 5, 6];
let theWallet = 'EethFqKdik6FsK7qqP1js8Qc3mN5Cf1HccSRJ6myL3KJ';

//Styles start --------------------
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
    }
  }
  .modal {
    background-color: var(--var-bgcolor);
  }
  .button_wrapper {
    min-width: 100%;
    justify-content: center;
    display: flex;
    margin-bottom: 20px;
  }
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

//Styles end --------------------

export default function Home(): JSX.Element {
  const { wallet, disconnect } = useWallet();
  const [result, setResult] = useState('');
  const [pending, setPending] = useState(false);
  const [openWalletList, setOpenWalletList] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleOpenWalletsList = () => {
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

  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const handleSendTransaction = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    connection.getBalance(publicKey).then((bal: number) => {
      console.log(bal / LAMPORTS_PER_SOL);
    });

    let lamportsI = LAMPORTS_PER_SOL * 0.1;
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(theWallet),
        lamports: lamportsI,
      }),
    );

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, 'processed');
  }, [publicKey, sendTransaction, connection]);

  const handleEndVideo = () => {
    setTimeout(() => {
      setShowAnimation(false);
      setResult('you win 5 sol');
      handleSendTransaction().then((res) => console.log(res));
    }, 1000);
    setTimeout(() => {
      setResult('');
    }, 4000);
  };

  return (
    <Layout>
      <Wrapper>
        <Title>Start opening boxes </Title>
        <div className="button_wrapper">
          <Button
            onClick={() => {
              disconnect();
              setOpenWalletList(true);
            }}
          >
            change wallet
          </Button>
        </div>
        {arr.map((el, index) => (
          <div className="box" key={`box_${index}`}>
            <img className="box_img" src={image} alt="" />
            <div className="info">
              <img src={logo} alt="" />
              <p>{el} sol</p>

              <Button onClick={handleOpenWalletsList} disabled={pending}>
                {wallet ? (pending ? 'process...' : 'open') : 'select wallet'}
              </Button>
            </div>
          </div>
        ))}
        <RecentOpens />
        {/*Modals */}
        <Modal isOpen={openWalletList}>
          <SelectWallet onSelect={() => setOpenWalletList(false)} />
        </Modal>
        <Modal isOpen={showAnimation}>
          <StyledVideo src={video} onEnded={handleEndVideo} autoPlay />
        </Modal>
        <Modal isOpen={Boolean(result)}>
          <StyledModalMessage>{result}</StyledModalMessage>
        </Modal>
      </Wrapper>
    </Layout>
  );
}
