import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Card, Space } from 'antd';
import {
  ExportOutlined,
  FilterOutlined,
  PlusCircleOutlined,
  SettingFilled,
} from '@ant-design/icons';

import { useCart } from '../context/CartContext';

import '../styles/cards.css';

const Cards = () => {
  const { addItem } = useCart();

  return (
    <div className="cards">
      <div className="cards-header">
        <Typography.Title level={3}>
          Get Support
          <img
            alt="diamond"
            src="/diamond.svg"
            width="25"
            style={{ marginLeft: '4px' }}
          />
        </Typography.Title>
        <Button shape="circle" icon={<FilterOutlined />}></Button>
      </div>
      <div className="cards-body">
        <Card
          id="card1"
          style={{
            width: 250,
          }}
          cover={
            <img alt="example" src="/Customer Engagement.svg" height={140} />
          }
          actions={[
            <Typography.Text style={{ color: '#fff' }}>
              100 DTSU*
            </Typography.Text>,
            <Space>
              <Link to="/customer-engagement">
                <Button
                  style={{ backgroundColor: '#08376D', border: 'none ' }}
                  shape="circle"
                  icon={<ExportOutlined style={{ color: '#fff' }} />}
                />
              </Link>
              <Button
                style={{
                  backgroundColor: '#08376D',
                  border: 'none ',
                  cursor: 'pointer',
                }}
                shape="circle"
                icon={<PlusCircleOutlined style={{ color: '#fff' }} />}
                onClick={() =>
                  addItem({
                    id: 1,
                    name: 'Customer Engagement',
                    price: 100,
                    quantity: 1,
                  })
                }
              />
            </Space>,
          ]}
        >
          <Card.Meta
            title="Customer Engagement"
            description="Get your own mobile app for industry specific"
          />
        </Card>
        <Card
          id="card2"
          style={{
            width: 250,
          }}
          cover={
            <img alt="example" src="/Actionable Insights.svg" height={140} />
          }
          actions={[
            <Typography.Text style={{ color: '#fff' }}>
              100 DTSU*
            </Typography.Text>,
            <Space>
              <Link to="actionable-insights">
                <Button
                  style={{ backgroundColor: '#426D4C', border: 'none ' }}
                  shape="circle"
                  icon={<ExportOutlined style={{ color: '#fff' }} />}
                />
              </Link>
              <Button
                style={{ backgroundColor: '#426D4C', border: 'none ' }}
                shape="circle"
                icon={<PlusCircleOutlined style={{ color: '#fff' }} />}
                onClick={() =>
                  addItem({
                    id: 2,
                    name: 'Actionable Insights',
                    price: 100,
                    quantity: 1,
                  })
                }
              />
            </Space>,
          ]}
        >
          <Card.Meta
            title="Customer Engagement"
            description="Get your own mobile app for industry specific"
          />
        </Card>
        <Card
          id="card3"
          style={{
            width: 250,
          }}
          cover={
            <img alt="example" src="/Employees Productivity.svg" height={140} />
          }
          actions={[
            <Typography.Text style={{ color: '#fff' }}>
              50 DTSU*
            </Typography.Text>,
            <Space>
              <Link to="/employees-productivity">
                <Button
                  style={{ backgroundColor: '#710000', border: 'none ' }}
                  shape="circle"
                  icon={<ExportOutlined style={{ color: '#fff' }} />}
                />
              </Link>
              <Button
                style={{ backgroundColor: '#710000', border: 'none ' }}
                shape="circle"
                icon={<PlusCircleOutlined style={{ color: '#fff' }} />}
                onClick={() =>
                  addItem({
                    id: 3,
                    name: 'Employees Productivity',
                    price: 50,
                    quantity: 1,
                  })
                }
              />
            </Space>,
          ]}
        >
          <Card.Meta
            title="Customer Engagement"
            description="Get your own mobile app for industry specific"
          />
        </Card>
        <Card
          id="card4"
          style={{
            width: 250,
          }}
          cover={
            <img alt="example" src="/Operations Excellence.svg" height={140} />
          }
          actions={[
            <Typography.Text style={{ color: '#fff' }}>
              100 DTSU*
            </Typography.Text>,
            <Space>
              <Link to="operations-excellence">
                <Button
                  style={{ backgroundColor: '#6D5208', border: 'none ' }}
                  shape="circle"
                  icon={<ExportOutlined style={{ color: '#fff' }} />}
                />
              </Link>
              <Button
                style={{ backgroundColor: '#6D5208', border: 'none ' }}
                shape="circle"
                icon={<PlusCircleOutlined style={{ color: '#fff' }} />}
                onClick={() =>
                  addItem({
                    id: 4,
                    name: 'Operations Excellence',
                    price: 100,
                    quantity: 1,
                  })
                }
              />
            </Space>,
          ]}
        >
          <Card.Meta
            title="Customer Engagement"
            description="Get your own mobile app for industry specific"
          />
        </Card>
      </div>
      <div className="cards-footer">
        <Typography.Text>
          <SettingFilled style={{ color: '#7AD676' }} /> Remaining DTSUs:{' '}
          <span>200</span>
        </Typography.Text>
        <Typography.Text>
          <SettingFilled style={{ color: '#D84242' }} /> Consumed DTSUs:{' '}
          <span>350</span>
        </Typography.Text>
      </div>
    </div>
  );
};

export default Cards;
