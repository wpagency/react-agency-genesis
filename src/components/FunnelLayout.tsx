
import React from 'react';
import Layout from './layout/Layout';

interface FunnelLayoutProps {
  children: React.ReactNode;
}

const FunnelLayout: React.FC<FunnelLayoutProps> = ({ children }) => {
  return (
    <Layout className="bg-background">
      {children}
    </Layout>
  );
};

export default FunnelLayout;



