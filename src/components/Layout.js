import React from 'react';
import Nav from './Nav';

import { Typography } from 'antd';

import '../styles/home.css';
const Layout = ({ children }) => {
  return (
    <section className="home">
      <div className="shape" />
      <Nav />
      <main>{children}</main>
      <footer style={{ textAlign: 'center', paddingTop: '1rem ' }}>
        <Typography.Paragraph>
          <Typography.Text strong>Got questions? </Typography.Text>
          Take a look at our <Typography.Link href="#">FAQs</Typography.Link>,
          talk to us on Twitter{' '}
          <Typography.Link href="#">@icloudready</Typography.Link> or send an
          email to{' '}
          <Typography.Link href="#">team@icloud-ready.com</Typography.Link>
        </Typography.Paragraph>
      </footer>
    </section>
  );
};

export default Layout;
