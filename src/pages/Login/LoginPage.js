import React from 'react';
import styles from './_login.module.scss';
import banner from './../../static/images/Сгруппировать 647.jpg';
import Button from 'components/UI/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from 'store/slices/userSlice';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(({ user }) => user.loading);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(login({ email, password }));
      if (!loading) {
        history.push('/');
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_left_banner}>
        <img src={banner} />
      </div>
      <div className={styles.login_right_column}>
        <form className={styles.login_form} onSubmit={(e) => onSubmit(e)}>
          <h1 className={styles.login_title}>Войдите в GetByVerto</h1>
          <div className={styles.login_subtitle}>
            или создайте{' '}
            <Link to="/register">
              <span>учетную запись</span>
            </Link>
          </div>
          <div className={styles.input_wrapper}>
            <div className={styles.input_item}>
              <div className={styles.login_email_label}>
                Адрес электронной почты
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                type="text"
                name="email"
              />
            </div>

            <div className={styles.input_item}>
              <div className={styles.login_password_label}>
                <span>Пароль</span>
                <span>Забыли пароль?</span>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                type="password"
                name="email"
              />
            </div>
          </div>
          <Button>{!loading ? 'Войдите в систему' : <Spin />}</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
