import { Collapse, Row } from "antd";
import { FAQ_ITEMS } from "components/FaqPage/utils/consts";
import React, { useState } from "react";
import FaqHeader from "./FaqHeader";
import Container from "components/UI/Container";
import "./_faq_mobile_module.scss";
const FaqMobile = ({ handleMenuClick, currentId }) => {
  const { Panel } = Collapse;
  const [isActive, setIsActive] = useState(0);
  const handleActive = (id) => {
    handleMenuClick(id);
    setIsActive(id);
  };
  const faqItems = FAQ_ITEMS.find((item) => {
    return item.options.some((option) => {
      return option.optionID === currentId;
    });
  });
  const faqContent = faqItems?.options.find(
    (item) => item.optionID === currentId
  );
  console.log(faqContent);
  return (
    <div className="faq-mobile">
      <FaqHeader />
      <Container>
        <p className="faq-questions">Частые вопросы</p>
        {FAQ_ITEMS.map((item) => (
          <>
            <p className="faq-mobile-title">{item.title}</p>
            <Collapse
              bordered={false}
              expandIconPosition="right"
              accordion
              ghost
            >
              {item.options.map((option) => (
                <Panel
                  showArrow={false}
                  className="faq-mobile-item-title"
                  header={option.label}
                >
                  <Collapse expandIconPosition="right" accordion ghost>
                    {option.content.map((cont) => (
                      <Panel
                        className="faq-mobile-subitem-title"
                        header={cont.contentTitle}
                      >
                        <p className="faq-mobile-subitem-body">
                          {cont.contentBody}
                        </p>
                      </Panel>
                    ))}
                  </Collapse>
                </Panel>
              ))}
            </Collapse>
          </>
        ))}
      </Container>
    </div>
  );
};

export default FaqMobile;
