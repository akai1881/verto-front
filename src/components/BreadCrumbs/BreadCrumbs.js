import { Breadcrumb } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowIcon } from './../../static/icons/16_arrow light.svg';

const BreadCrumbs = ({ params }) => {
  const categories = useSelector(({ products }) => products.categories.data);

  return (
    <>
      {categories.length > 0 && (
        <div className="breadcumber">
          <Breadcrumb separator={<ArrowIcon />}>
            <Breadcrumb.Item href="">
              {categories[params.categoryIndex].title}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              {
                categories[params.categoryIndex]?.children[
                  params.subCategoryIndex
                ]?.title
              }
            </Breadcrumb.Item>
            <Breadcrumb.Item>{params.categoryName}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
    </>
  );
};

export default BreadCrumbs;
