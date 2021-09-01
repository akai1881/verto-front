import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col } from "antd";
import FaqMenu from "./components/FaqMenu/FaqMenu";
import FaqContent from "./components/FaqContent/FaqContent";
import FaqMobile from "./components/FaqMobile/FaqMobile";
import { deviceSize } from "utils/consts";
import "./_faq_page_module.scss";
import MainLayout from "layouts/MainLayout";
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
    <MainLayout>
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
      {isMobile && (
        <FaqMobile handleMenuClick={handleMenuClick} currentId={currentId} />
      )}
      </MainLayout>
  );
};

export default FaqPage;
