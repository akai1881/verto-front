import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import Container from 'components/UI/Container';
import React from 'react';

const ProductSection = ({
  data,
  ComponentItem,
  title,
  titleGutter = 20,
  gutter = [24, 16],
  top = 100,
  bottom = 0,
  span = 6,
}) => {
  return (
    <div style={{ paddingTop: top, paddingBottom: bottom }}>
      <Container>
        <Title
          level={3}
          className="title"
          style={{ marginBottom: titleGutter }}
        >
          {title}
        </Title>
        <Row gutter={gutter}>
          {data.length > 0
            ? data.map((item) => (
                <Col span={span} key={item.id}>
                  <ComponentItem item={item} />
                </Col>
              ))
            : '...Загрузка'}
        </Row>
      </Container>
    </div>
  );
};

export default ProductSection;
