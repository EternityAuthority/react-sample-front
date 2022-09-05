import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch, Row, Col, Rate, Divider } from 'antd';
import React, { useState } from 'react';
import '../assets/css/reviews.css';
const { Meta } = Card;

const App = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked) => {
    setLoading(!checked);
  };

  return (
    <>
      <Switch checked={!loading} onChange={onChange} />

      <Card
        style={{
          width: 588,
          height:283,
          padding: 32,
          borderRadius: 16
        }}
        // loading={loading}
      >
        <Row justify="space-between">
            <Col>
            <Avatar >A</Avatar>
            </Col>

            <Col>
              <Row>
               
                  Name
               
              </Row>
              <Row>
                 
                    Description
                              
              </Row>
            </Col>

            <Col>
            <Rate disabled defaultValue={2} />
            </Col>
            <Row>
                
            </Row>
            <Divider />
            
            <p className='customers_text'>"You do all the work. I talk to one person and BigRentals communicates with the supplier, coordinates the delivery and pickup, and keeps me updated at every step."</p>
            

          </Row>
      </Card>

      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
};

export default App;