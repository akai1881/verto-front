import React, { useState } from "react";
import Container from "components/UI/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import MenuHowToOrder from "components/MenuHowToOrder/MenuHowToOrder";
const QuestionsContent = () => {
  return (
    <>
    <Container>
      <Header/>
      <MenuHowToOrder/>
      <div>
      спорные вопросы
      </div>
    </Container>
    <Footer/>
    </>
  );
};

export default QuestionsContent;
