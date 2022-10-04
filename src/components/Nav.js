import React, { useState } from 'react';

import {
  Typography,
  Avatar,
  Button,
  Drawer,
  Badge,
  Empty,
  Row,
  Col,
  Divider,
} from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  HddOutlined,
  CodepenCircleFilled,
  DeleteFilled,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';

import { useCart } from '../context/CartContext';
import ButtonGroup from 'antd/lib/button/button-group';

const Nav = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openKitchen, setOpenKitchen] = useState(false);

  const { totalQuantities, items, removeItem, addItem, ClearItem, clearCart } =
    useCart();

  const showCartDrawer = () => {
    setOpenCart(true);
  };

  const onCartClose = () => {
    setOpenCart(false);
  };

  const showKitchenDrawer = () => {
    setOpenKitchen(true);
  };

  const onKitchenClose = () => {
    setOpenKitchen(false);
  };
  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <div style={{ lineHeight: '1px' }}>
          <Typography.Title level={3}>Welcome to iCloudReady!</Typography.Title>
          <Typography.Paragraph>
            You have started your 30 day trial
          </Typography.Paragraph>
        </div>
        {/* avatars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Avatar.Group
            maxCount={3}
            maxPopoverTrigger="click"
            size="medium"
            maxStyle={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              cursor: 'pointer',
            }}
          >
            <Avatar
              style={{
                backgroundColor: 'red',
              }}
              icon={<UserOutlined />}
            />
            <Avatar
              style={{
                backgroundColor: 'green',
              }}
            >
              M
            </Avatar>

            <Avatar
              style={{
                backgroundColor: 'blue',
              }}
              icon={<UserOutlined />}
            />
            <Avatar
              style={{
                backgroundColor: 'yellow',
              }}
            >
              A
            </Avatar>

            <Avatar
              style={{
                backgroundColor: '#1890ff',
              }}
              icon={<UserOutlined />}
            />
          </Avatar.Group>
          <Typography.Paragraph
            style={{
              display: 'flex',

              flexDirection: 'column',
            }}
          >
            <Typography.Text>Our architects are here to help</Typography.Text>
            <Typography.Link href="#">Book a free session</Typography.Link>
          </Typography.Paragraph>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Badge count={0}>
            <Button
              style={{
                backgroundColor: '#E1ECF9',
              }}
              shape="circle"
              onClick={showKitchenDrawer}
            >
              <HddOutlined />
            </Button>
          </Badge>
          <Badge count={totalQuantities}>
            <Button
              style={{
                backgroundColor: '#E1ECF9',
              }}
              shape="circle"
              onClick={showCartDrawer}
            >
              <ShoppingCartOutlined />
            </Button>
          </Badge>
        </div>
      </nav>

      <Drawer
        title="Your Run Cart"
        placement="right"
        onClose={onCartClose}
        open={openCart}
      >
        {items.length ? (
          <>
            <Row style={{ display: 'flex', alignItems: 'center' }}>
              <Col span={16}>Product</Col>
              <Col span={4}>Qty</Col>
              <Col span={4}>Remove</Col>
            </Row>
            <Divider />
            {items?.map((item) => (
              <Row
                key={item.id}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Col span={16}>
                  <CodepenCircleFilled /> {item.name}
                </Col>
                <Col
                  span={4}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '4px',
                    border: '1px solid #aaa',
                    padding: '0 0 0 0.4rem',
                    marginLeft: '-10px',
                  }}
                >
                  {item.quantity}
                  <ButtonGroup
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Button size="small">
                      <PlusOutlined onClick={() => addItem({ ...item })} />
                    </Button>
                    <Button size="small">
                      <MinusOutlined onClick={() => removeItem(item.id)} />
                    </Button>
                  </ButtonGroup>
                </Col>
                <Col span={4} style={{ paddingLeft: '30px', color: 'red' }}>
                  <DeleteFilled onClick={() => ClearItem(item.id)} />
                </Col>
                <Divider />
              </Row>
            ))}
            <Button type="primary" block>
              Checkout
            </Button>
            <Button type="ghost" block onClick={() => clearCart()}>
              Clear Cart
            </Button>
          </>
        ) : (
          <Empty
            description={
              <>
                <p>Your run Cart is empty!</p>
                <small>start add your requests here</small>
              </>
            }
          />
        )}
      </Drawer>
      <Drawer
        title="Your Run Kitchen"
        placement="right"
        onClose={onKitchenClose}
        open={openKitchen}
      >
        <Empty
          description={
            <>
              <p>Your run Kitchen is empty!</p>
              <small>start add your requests here</small>
            </>
          }
        />
      </Drawer>
    </>
  );
};

export default Nav;
