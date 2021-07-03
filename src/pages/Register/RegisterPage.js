import React from 'react';
import styles from './_register.module.scss';
import banner from './../../static/images/register.jpg';
import Button from 'components/UI/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from 'store/slices/userSlice';
import { Spin, notification } from 'antd';
import * as yup from 'yup';
import Checkbox from 'components/UI/Checkbox';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PHONE_REGEX } from 'utils/consts';

let schema = yup.object({
  first_name: yup.string().required('Это обязательное поле'),
  last_name: yup.string().required('Это обязательное поле'),
  email: yup
    .string()
    .required('Это обязательное поле')
    .email('Введите email в корректном формате'),
  phone_number: yup
    .string()
    .required('Это обязательное поле')
    .min(12, 'Номер телефон должен быть больше 12-ти символов')
    .matches(PHONE_REGEX, 'Введите корректный номер телефона в формате +996'),
  password: yup
    .string()
    .required('Введите пароль')
    .min(6, 'Пароль должен содержать больше 6-ти символов'),
  check_password: yup
    .string()
    .required('Введите подтверждение пароля')
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isChecked, setChecked] = useState(false);
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Регистрация прошла успешно',
    });
  };

  const onSubmit = async (data) => {
    console.log(data);

    if (!isChecked) {
      setValidate(true);
      return;
    }

    openNotificationWithIcon('success');

    // history.push('/');

    // try {
    //   dispatch(
    //     register({
    //       email,
    //       password,
    //       first_name: firstName,
    //       last_name: lastName,
    //       password_confirm: password,
    //       phone_number,
    //     })
    //   ).then(() => {
    //     if (!loading && !error) {
    //       history.push('/');
    //     }
    //   });
    // } catch (e) {
    //   console.log(e.message);
    // }
  };

  const handleValidate = (value) => {
    setChecked(value);
    setValidate(!value);
  };

  return (
    <div className={styles.register}>
      <div className={styles.register_left_banner}></div>
      <div className={styles.register_right_column}>
        <form
          className={styles.register_form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={styles.register_title}>Создать учетную запись</h1>
          <div className={styles.register_subtitle}>
            У вас есть собственная компания?
            <span> Cоздать учетную запись компании</span>
          </div>
          <div className={styles.input_wrapper}>
            <div className={styles.register_names}>
              <div className={styles.input_item}>
                <div className={styles.register_name_label}>Имя</div>
                <input
                  className={styles.input}
                  type="text"
                  {...register('first_name')}
                />
                <p className={styles.validate_error}>
                  {errors.first_name?.message}
                </p>
              </div>

              <div className={styles.input_item}>
                <div className={styles.register_name_label}>Фамилия</div>
                <input
                  className={styles.input}
                  type="text"
                  {...register('last_name')}
                />
                <p className={styles.validate_error}>
                  {errors.last_name?.message}
                </p>
              </div>
            </div>
            <div className={styles.input_item}>
              <div className={styles.register_email_label}>
                Адрес электронной почты
              </div>
              <input
                className={styles.input}
                type="text"
                {...register('email')}
              />
              <p className={styles.validate_error}>{errors.email?.message}</p>
            </div>

            <div className={styles.input_item}>
              <div className={styles.register_email_label}>Номер телефона</div>
              <input
                className={styles.input}
                type="text"
                {...register('phone_number')}
              />
              <p className={styles.validate_error}>
                {errors.phone_number?.message}
              </p>
            </div>

            <div className={styles.input_item}>
              <div className={styles.register_password_label}>
                <span>Пароль</span>
              </div>
              <input
                className={styles.input}
                placeholder="6+ симоволов и знаков"
                type="password"
                {...register('password')}
              />
              <p className={styles.validate_error}>
                {errors.password?.message}
              </p>
            </div>

            <div className={styles.input_item}>
              <div className={styles.register_password_label}>
                <span>Потвердите пароль</span>
              </div>
              <input
                className={styles.input}
                type="password"
                {...register('check_password')}
              />
              <p className={styles.validate_error}>
                {errors.check_password?.message}
              </p>
            </div>
          </div>
          <div className={styles.checkbox}>
            <Checkbox onChange={handleValidate} value={isChecked} />
            <div>
              <span>
                Создание учетной записи означает, что вы согласны с нашими
              </span>
              <span className={styles.text}>
                Условиями использования, Политикой конфиденциальности
              </span>
              <span> и нашими настройками </span>
              <span className={styles.text}>уведомлений</span> по умолчанию.
            </div>
          </div>
          {validate ? (
            <div className={styles.error}>
              Необходимо принять условия пользования перед регистрацией
            </div>
          ) : null}
          <Button style={{ marginTop: '25px' }}>Зарегистрироваться</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
