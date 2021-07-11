import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './_register.module.scss';
import Button from 'components/UI/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Spin } from 'antd';
import * as yup from 'yup';
import Checkbox from 'components/UI/Checkbox';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PHONE_REGEX } from 'utils/consts';
import { clearState, signup, userSelector } from 'store/slices/userSlice';
import { openNotification } from 'utils/notifications';

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
  password_confirm: yup
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
  const { isLoading, isSuccess, errorMessage, isError } =
    useSelector(userSelector);
  const [isChecked, setChecked] = useState(false);
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);

    // if (!isChecked) {
    //   setValidate(true);
    //   return;
    // }

    dispatch(signup(data));
  };

  useEffect(() => {
    if (isError) {
      openNotification('error', errorMessage, 10);
      console.log(errorMessage);
      console.log('from register page');
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      openNotification(
        'success',
        'На вашу почту отправлено письмо с активацией'
      );
      history.push('/');
    }
  }, [isSuccess, isError]);

  const handleValidate = (value) => {
    setChecked(value);
    setValidate(!value);
  };

  return (
    <div className={styles.register}>
      <div className={styles.register_left_banner}/>
      <div className={styles.register_right_column}>
        <form
          className={styles.register_form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={styles.register_title}>Создать учетную запись</h1>
          <div className={styles.register_subtitle}>
            У вас есть собственная компания?
            <Link to="/register/company">
              <span> Cоздать учетную запись компании</span>
            </Link>
          </div>
          <div className={styles.input_wrapper}>
            <div className={styles.register_names}>
              <div className={styles.input_item}>
                <div className={styles.register_name_label}>Имя</div>
                <input
                  className={clsx({
                    [styles.input]: true,
                    [styles.error]: errors.first_name,
                  })}
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
                  className={clsx({
                    [styles.input]: true,
                    [styles.error]: errors.last_name,
                  })}
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
                className={clsx({
                  [styles.input]: true,
                  [styles.error]: errors.email,
                })}
                type="text"
                autoComplete="false"
                {...register('email')}
              />
              <p className={styles.validate_error}>{errors.email?.message}</p>
            </div>

            <div className={styles.input_item}>
              <div className={styles.register_email_label}>Номер телефона</div>
              <input
                className={clsx({
                  [styles.input]: true,
                  [styles.error]: errors.phone_number,
                })}
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
                className={clsx({
                  [styles.input]: true,
                  [styles.error]: errors.password,
                })}
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
                className={clsx({
                  [styles.input]: true,
                  [styles.error]: errors.password_confirm,
                })}
                type="password"
                {...register('password_confirm')}
              />
              <p className={styles.validate_error}>
                {errors.password_confirm?.message}
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
          <Button className={styles.register_btn}>
            {isLoading ? (
              <div className="spinner">
                <Spin />
              </div>
            ) : (
              'Зарегистрироваться'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
