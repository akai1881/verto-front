import React, { useState } from "react";
import styles from "./_faq_page_module.scss";
import Container from "components/UI/Container";
import FaqMenu from "./components/FaqMenu/FaqMenu";
import FaqContent from "./components/FaqContent/FaqContent";
import { Row, Col } from "antd";
const FaqPage = () => {
  const [currentId, setCurrentId] = useState(0);
  const [activeKey, setActiveKey] = useState(1);
  const handleMenuClick = React.useCallback(
    (id) => {
      setCurrentId(id);
      setActiveKey(1);
    },
    [setCurrentId, setActiveKey]
  );
  return (
    <Container>
      <Row gutter={24} span={24}>
        <Col span={8}>
          <FaqMenu handleMenuClick={handleMenuClick} />
        </Col>
        <Col span={16}>
          <FaqContent currentId={currentId} activeKey={activeKey} />
        </Col>
      </Row>
    </Container>
  );
};

export default FaqPage;
