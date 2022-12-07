import React from 'react';
import styled from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home';
import { routes } from './constants/routes';

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

  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: #fff0da;
  min-height: 100vh;
`;

export default App;
