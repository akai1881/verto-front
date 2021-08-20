import React from "react";
import Container from "components/UI/Container";

const FaqHeader = () => {
  return (
    <div className="faq-mobile-header">
      <Container>
        <div className="faq-mobile-header-text">
          <p>Вопросы и ответы</p>
          <p>
            Выберите нужный раздел для получения <br /> справки или
            воспользуйтесь поиском
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FaqHeader;
