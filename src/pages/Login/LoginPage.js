import React, { useEffect, useState } from 'react';
import styles from './_login.module.scss';
import banner from './../../static/images/Сгруппировать 647.jpg';
import Button from 'components/UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearState, login, userSelector } from 'store/slices/userSlice';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { openNotification } from 'utils/notifications';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import PreloadSpinner from '../../components/UI/PreloadSpinner';

const schema = yup.object({
  email: yup.string().required('Это обязательное поле').email('Введите email в корректном формате'),
  password: yup.string().required('Это обязательное поле'),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [DOMLoading, setDOMLoading] = useState(true);

  const { isSuccess, isError, isLoading, errorMessage, user } = useSelector(userSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }

    return () => {
      dispatch(clearState());
    };
  }, [user]);

  useEffect(() => {
    const handleDOMLoaded = () => {
      console.log('worked');
      setDOMLoading(false);
    };

    console.log('use effect');

    window.addEventListener('load', handleDOMLoaded);

    return () => {
      window.removeEventListener('load', handleDOMLoaded);
      setDOMLoading(false);
    };
  }, []);

  useEffect(() => {
    if (isError) {
      openNotification('error', errorMessage, 10);
      console.log(errorMessage);
      console.log('from login page');
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      openNotification('success', 'Вы успешно вошли в систему');
      history.push('/');
    }
  }, [isSuccess, isError]);

  return (
    <div className={styles.login}>
      {DOMLoading && <PreloadSpinner />}
      <div className={styles.login_left_banner}></div>
      <div className={styles.login_right_column}>
        <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.login_title}>Войдите в GetByVerto</h1>
          <div className={styles.login_subtitle}>
            <span>или создайте </span>
            <Link to="/register">
              <span>учетную запись</span>
            </Link>
          </div>

          {/* {isError ? (
            <p className={styles.input_error}>{errorMessage}</p>
          ) : null} */}

          <div className={styles.input_wrapper}>
            <div className={styles.input_item}>
              <div className={styles.login_email_label}>Адрес электронной почты</div>
              <input
                className={clsx({
                  [styles.input]: true,
                  [styles.input_error]: errors.email,
                })}
                type="text"
                {...register('email')}
              />
              <p className={styles.login_validate}>{errors.email?.message}</p>
            </div>

            <div className={styles.input_item}>
              <div className={styles.login_password_label}>
                <span>Пароль</span>
                <span>Забыли пароль?</span>
              </div>
              <input
                className={clsx({
                  [styles.input]: true,
                  [styles.input_error]: errors.password,
                })}
                type="password"
                {...register('password')}
              />
              <p className={styles.login_validate}>{errors.password?.message}</p>
            </div>
          </div>
          <Button className={styles.login_btn}>
            {isLoading ? (
              <div className="spinner">
                <Spin />
              </div>
            ) : (
              'Войдите в систему'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
