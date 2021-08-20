import { FAQ_ITEMS } from "components/FaqPage/utils/consts";
import React from "react";
import { Collapse, Row } from "antd";

const FaqContent = ({ currentId }) => {
  const { Panel } = Collapse;
  const faqItems = FAQ_ITEMS.find((item) => {
    return item.options.some((option) => {
      return option.optionID === currentId;
    });
  });
  const faqContent = faqItems?.options.find(
    (item) => item.optionID === currentId
  );

  return (
    <div>
      <div className="faq-title-wrapper">
        <span className="faq-content-label">Вопросы и ответы</span>
      </div>
      <Row span={24}>
        {currentId ? (
          <Collapse
            destroyInactivePanel={true}
            expandIconPosition="right"
            accordion
            ghost
          >
            {faqContent.content.map((faq) => (
              <Panel header={faq.contentTitle} key={faq.contentID}>
                <p>{faq.contentBody}</p>
              </Panel>
            ))}
          </Collapse>
        ) : (
          <p className="faq-content-placeholder">
            Выберите нужный раздел слева для получения справки или
            воспользуйтесь поиском
          </p>
        )}
      </Row>
    </div>
  );
};

export default FaqContent;
