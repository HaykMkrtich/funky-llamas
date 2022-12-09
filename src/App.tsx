import React, { useMemo } from 'react';
import styled from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  PhantomWalletAdapter,
  TrustWalletAdapter,
  SolletWalletAdapter,
  AlphaWalletAdapter,
  OntoWalletAdapter,
  BackpackWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import Home from './routes/home';
import { routes } from './constants/routes';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

function App() {
  const router = createBrowserRouter([
    {
      path: routes.HOME,
      element: <Home />,
      errorElement: <div>error</div>,
    },
    {
      path: routes.LAZE_LOFT,
      element: <Home />,
      errorElement: <div>error</div>,
    },
    {
      path: routes.FUNKY_MAP,
      element: <Home />,
      errorElement: <div>error</div>,
    },
    {
      path: routes.WHITE_PAPER,
      element: <Home />,
      errorElement: <div>error</div>,
    },
  ]);

  // const endpoint =
  //   'https://chaotic-dimensional-feather.solana-devnet.discover.quiknode.pro/3729bc086caee252b8d2d6bfde85fc6f81c1e2ee/';

  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolletWalletAdapter(),
      new TrustWalletAdapter(),
      new AlphaWalletAdapter(),
      new OntoWalletAdapter(),
      new BackpackWalletAdapter(),
    ],
    [],
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <Wrapper>
          <RouterProvider router={router} />
        </Wrapper>
      </WalletProvider>
    </ConnectionProvider>
  );
}
const Wrapper = styled.div`
  background: #fff0da;
  min-height: 100vh;
`;

export default App;
