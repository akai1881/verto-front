import { Col, Image, Row } from 'antd';
import Container from 'components/UI/Container';
import Flex from 'components/UI/Flex';
import React from 'react';
import styles from './_footer.module.scss';

import insta from './../../static/icons/28_instagram_diactive.svg';
import facebook from './../../static/icons/28_FB_diactive.svg';
import logo from './../.././static/images/Logo_198 white.png';
import logoMobile from './../.././static/images/logo-white-mobile.png';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from 'utils/consts';
import { Link } from 'react-router-dom';

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <>
      <div className={styles.footer}>
        <Container>
          <Row justify="space-between">
            <Col span={6} xs={{ order: 3, span: 24 }} md={{ order: 0, span: 6 }}>
              {isMobile ? (
                <div className={styles.listMobile}>
                  <Image
                    preview={false}
                    width={134}
                    src={logoMobile}
                    className={styles.imageMobile}
                    // style={{ marginBottom: 24 }}
                  />
                  <div className={styles.linkWrapperMobile}>
                    <a
                      href="https://www.facebook.com/"
                      className={`${styles.link} ${styles.social_link} ${styles.linkMobile}`}
                    >
                      <img src={facebook} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      className={`${styles.social_link} ${styles.social_linkMobile}`}
                    >
                      <img src={insta} alt="" />
                    </a>
                  </div>
                  <div className={styles.infoMobile}>
                    <div className={styles.textMobile}>
                      @ 2021 GetbyVerto <br /> <br /> Все права защищены
                    </div>
                    <div className={styles.textMobile}>
                      <br />
                      Интернет платформа "GetbyVerto" специализируется на брокерских услугах для бартера на территории
                      Казахстана и странах СНГ
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.list}>
                  <Image preview={false} width={108} src={logo} style={{ marginBottom: 24 }} />
                  <div className={styles.text}>
                    @ 2021 GetbyVerto <br /> Все права защищены
                  </div>
                  <div className={styles.text}>
                    Интернет платформа "GetbyVerto" специализируется на брокерских услугах для бартера на территории
                    Казахстана и странах СНГ
                  </div>
                  <Flex>
                    <a href="https://www.facebook.com/" className={`${styles.link} ${styles.social_link}`}>
                      <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com/" className={`${styles.social_link}`}>
                      <img src={insta} alt="" />
                    </a>
                  </Flex>
                </div>
              )}
            </Col>
            <Col span={4} xs={12} md={4}>
              <div className={styles.list}>
                <h4 className={styles.title}>Компания</h4>
                <Link to='/about-us' className={styles.list_item}>
                  О нас
                </Link>
                <Link to='/news' className={styles.list_item}>
                  Блог
                </Link>
                <Link to='/reviews' className={styles.list_item}>
                  Отзывы
                </Link>
                <Link to='/news' className={styles.list_item}>
                  Новости
                </Link>
                <Link to='/contacts' className={styles.list_item}>
                  Контакты
                </Link>
              </div>
            </Col>
            <Col span={5} xs={12} md={4}>
              <div className={styles.list}>
                <h4 className={styles.title}>Информация</h4>
                <Link to='/how-to-order' className={styles.list_item}>
                  Как сделать заказ
                </Link>
                <Link to='/register-rules' className={styles.list_item}>
                  Условие регистрации
                </Link>
                <Link to='/questions' className={styles.list_item}>
                  Спорные вопросы
                </Link>
                <Link to='/rules' className={styles.list_item}>
                  Условия использования
                </Link>
                <Link to='/rate-up' className={`${styles.list_item}`}>
                  Как повысить ваш рейтинг
                </Link>
              </div>
            </Col>
            <Col span={24} xs={24} md={5}>
              <div className={styles.list}>
                <h4 className={styles.title}>Контакты</h4>
                <a href="#" className={styles.list_item}>
                  +7 700 0000 000
                </a>
                <a href="#" className={styles.list_item}>
                  +7 327 00 00 00
                </a>
                <a href="#" className={styles.list_item}>
                  mail@getbyverto.com
                </a>
                <a href="#" className={styles.list_item}>
                  Республика Казахстан, г. Алматы, пр. Аль Фараби, 00
                </a>
                <a href="#" className={`${styles.list_item} ${styles.extra}`}>
                  Обработка заказов на сайте 24/7
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.bottom}>
        <div>GetbyVerto © 2021 - Дизайн сайта Сауле Бексултанова</div>
      </div>
    </>
  );
};

export default Footer;
