import React, { useState } from "react";
import { FAQ_ITEMS } from "components/FaqPage/utils/consts";
import { Row } from "antd";

const FaqMenu = ({ handleMenuClick }) => {
  const [isActive, setIsActive] = useState(0);
  const handleActive = (id) => {
    handleMenuClick(id);
    setIsActive(id);
  };
  return (
    <>
      <div className="faq-title-wrapper">
        <span className="faq-menu-label">Частые вопросы</span>
      </div>

      <div className="faq-menu">
        <ul>
          {FAQ_ITEMS.map((item) => (
            <>
              <li key={item.id} className="faq-menu-title">
                {item.title}
              </li>
              {item.options.map((option) => (
                <li
                  onClick={() => handleActive(option.optionID)}
                  key={`option-${option.optionID}`}
                  className={`${
                    isActive === option.optionID ? "faq-menu-option-active" : ""
                  } faq-menu-option`}
                >
                  {option.label}
                </li>
              ))}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FaqMenu;
