import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "components/UI/Container";
import { Row, Col } from "antd";
import FaqMenu from "./components/FaqMenu/FaqMenu";
import FaqContent from "./components/FaqContent/FaqContent";
import FaqMobile from "./components/FaqMobile/FaqMobile";
import Footer from "components/Footer";
import Header from "components/Header";
import { deviceSize } from "utils/consts";
import "./_faq_page_module.scss";
const FaqPage = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  console.log(deviceSize);
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
    <>
      <Container>
        <Header />
        {!isMobile && (
          <div className="faq-content">
            <Row gutter={24} span={24}>
              <Col span={8}>
                <FaqMenu handleMenuClick={handleMenuClick} />
              </Col>
              <Col span={16}>
                <FaqContent currentId={currentId} activeKey={activeKey} />
              </Col>
            </Row>
          </div>
        )}
      </Container>
      {isMobile && (
        <FaqMobile handleMenuClick={handleMenuClick} currentId={currentId} />
      )}
      <Footer />
    </>
  );
};

export default FaqPage;
