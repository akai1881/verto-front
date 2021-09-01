import React from 'react';
import clsx from 'clsx';
import { Rate } from 'antd';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';

import MenuBarNews from 'components/MenuBarNews/MenuBarNews';

import MainLayout from 'layouts/MainLayout';

import styles from './RewiewsContent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createReviews, fetchReviews, reviewsSelector } from 'store/slices/reviewsSlice';
import PreloadSpinner from 'components/UI/PreloadSpinner';

let schema = yup.object({
    email: yup.string().required('Это обязательное поле').email('Введите email в корректном формате'),
    first_name: yup.string().required('Это обязательное поле'),
    plus: yup.string().required('Это обязательное поле'),
    minus: yup.string().required('Это обязательное поле'),
    comment: yup.string().required('Это обязательное поле'),
    // image: yup.string().required('Выберите изображение'),
    // image: yup
    // .mixed()
    // .required("A file is required")
})

const RewiewsContent = () => {
    const dispatch = useDispatch();
    const [ showFormAddReview, setShowFormAddReview ] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: {errors},
      } = useForm({resolver: yupResolver(schema)});    
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [rateVal, setRateVal] = React.useState(5);
    const [img, setImg] = React.useState(null);
    const [email, setEmail] = React.useState('');
    console.log('img', img);
    let formData = new FormData;
    async function onSubmit (data) {
      console.log('submit');
      console.log(data);
      // if(img == null){
      //   alert('img is null')
      //   setImgError('Выберите изображение')
      //   return
      // }
      formData.append("image", img)
      formData.append("rating", rateVal);
      formData.append("email", data.email);
      formData.append("first_name", data.first_name);
      formData.append("comment", data.comment);
      formData.append("plus", data.plus);
      formData.append("minus", data.minus);
      await dispatch(createReviews(formData));
      dispatch(fetchReviews())
      setShowFormAddReview(false)
    }
    const reviews = useSelector(({reviews}) => reviews.reviews.data);
    const {isLoading} = useSelector(reviewsSelector);
    React.useEffect(()=> {
        dispatch(fetchReviews())
    },[])
    return (
        <MainLayout>
            <MenuBarNews/>
            {isLoading? <PreloadSpinner/>: null }
            <div className='rewiwes-title'>
                <div>
                <span>Отзывы и оценки</span>
                <p>Только честные отзывы настоящих покупателей</p>
                </div>
            </div>
            <hr />
            { reviews? reviews.map((item, index) => (<div className='all-reviews' key={index}>
              <div className="review-card">
                <div className="review-card-email">
                  <div>
                  <span className="review-card-title">{item.first_name}</span><span className="review-card-title"> | </span>
                  <span className="review-card-title">{item.email}</span>
                  </div>
                  <p>
                  <Rate style={{color: 'red'}} disabled value={item.rating} />
                  </p>
                  </div>
                <div className="review-card-description">
                  <div className="review-card-desctiption-plus-minus">
                    <p>Достоинства: {item.plus}</p>
                    <p>Недостатки: {item.minus}</p>
                    <p>Комментарий: {item.comment}</p>
                  </div>
                  <div className="review-card-img"><img className="review-card-img" src={item.image}/></div>
                </div>
              </div>
            </div>))
             : (<div className='all-reviews-is-empty'><span>Отзывов ещё нет — ваш может стать первым</span></div>)}  
            <div>{showFormAddReview ? (
                <div>
                <div className='add-review-title'>Оставьте отзыв о нас!</div>
                <div className='add-review-rate-title'>Качество товара или услуги</div>
                <div className='add-review-rate-value'>
                   <Rate style={{color: 'red'}} tooltips={desc} onChange={(e) => setRateVal(e)} value={rateVal} />
                </div>
                <form  className='add-review-form' onSubmit={handleSubmit(onSubmit)}>
                    <label>Адрес электронной почты</label>
                    <input name="email"
                      className={clsx({
                      [styles.input]: true,
                      [styles.error]: errors.email, })}
                      {...register('email')}/>
                    <p className='validate_error'>{errors.email?.message}</p>
                    <label>Ваше имя</label>
                    <input 
                      name="first_name"
                      className={clsx({
                        [styles.input]: true,
                        [styles.error]: errors.first_name, })}
                        {...register('first_name')}/>
                    <p className='validate_error'>{errors.first_name?.message}</p>

                    <label>Достоинства</label>
                    <textarea name="plus" className='add-review-form-big-inp'
                      className={clsx({
                      [styles.input]: true,
                      [styles.error]: errors.plus, })}
                      {...register('plus')}/>
                    <p className='validate_error'>{errors.plus?.message}</p>
                    <label>Недостатки</label>
                    <textarea
                     name="minus"
                     className='add-review-form-big-inp'
                     className={clsx({
                      [styles.input]: true,
                      [styles.error]: errors.minus, })}
                      {...register('minus')}/>
                    <p className='validate_error'>{errors.minus?.message}</p>
                    <label>Комментарий</label>
                    <textarea 
                    name="comment"
                    className='add-review-form-big-inp'
                     className={clsx({
                      [styles.input]: true,
                      [styles.error]: errors.comment, })}
                      {...register('comment')}/>
                    <p className='validate_error'>{errors.comment?.message}</p>
                    <label>Галлерея изображений</label>
                    <label htmlFor='add-review-form-inp-file' className='add-review-form-inp-file'>{img ? "Изменить изображение": "Выберите изображение"}</label>
                    {img ? (<div>{img.name}</div>): (null)}
                    <input onChange={(e) => setImg(e.target.files[0])} name="image" style={{display: 'none'}}
                        // className={clsx({
                        //   [styles.input]: true,
                        //   [styles.error]: errors.image, })}
                        //   {...register('image')}
                       id='add-review-form-inp-file'
                       type='file'/>
                    {/* <p className='validate_error'>{errors.image?.message}</p> */}
                    <label>Персональные данные</label>  
                    <span>Нажимая на кнопку Отправить, вы соглашаетесь на обработку персональных данных</span>
                    <button type="submit" onSubmit={handleSubmit(onSubmit)}>Отправить</button>
                </form>
              </div>
            ):  (<div><div className='all-reviews-is-empty'><button className='reviews-add-btn' onClick={() => setShowFormAddReview(true)}>Написать отзыв</button></div></div>)}</div>  
       </MainLayout>
    );
};

export default RewiewsContent;