import React, { ReactNode } from 'react';
import '../css/AppLayout.css';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="App">
      <header>Header content goes here</header>
      <main>{children}</main>
      <footer>Footer content goes here</footer>
    </div>
  );
}

export default AppLayout;