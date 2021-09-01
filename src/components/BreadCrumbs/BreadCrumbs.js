import React from 'react';
import { useSelector } from 'react-redux';

import { Breadcrumb } from 'antd';

import { ReactComponent as ArrowIcon } from './../../static/icons/16_arrow light.svg';

const BreadCrumbs = ({ params }) => {
  const categories = useSelector(({ products }) => products.categories.data);

  // TODO REFACTOR BREADCRUMBS MAYBE USE MEMO or USE CALLBACK dnk :)
  const getBreadCumbs = (category) => {
    const subCategory = category.children.find((item) => item.slug === params.subCategoryIndex);
    const targetCategory = subCategory.children.find((item) => item.slug === params.categoryName);

    return (
      <Breadcrumb separator={<ArrowIcon />} key={category.slug} >
        <Breadcrumb.Item href="">{category.title}</Breadcrumb.Item>
        <Breadcrumb.Item href="">{subCategory.title}</Breadcrumb.Item>
        <Breadcrumb.Item href="">{targetCategory.title}</Breadcrumb.Item>
      </Breadcrumb>
    );
  };

  return (
    <>
      {categories.length > 0 && (
        <div className="breadcumber">
            {categories.map((category) => {
              if (category.slug === params.categoryIndex) {
                return getBreadCumbs(category);
              }
            })}
        </div>
      )}
    </>
  );
};

export default BreadCrumbs;
