import React, { useEffect, useRef, useState } from 'react';
import Flex from 'components/UI/Flex';
import { useDispatch, useSelector } from 'react-redux';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { ReactComponent as ArrowBackIcon } from './../../static/icons/goback.svg';
import styles from './_optionsDialog.module.scss';
import { setCloseOptionsDialog } from 'store/slices/modalSlice';
import FilterItem from './components/FilterItem';
import PriceFilter from 'components/PriceFilter/PriceFilter';
import { CSSTransition } from 'react-transition-group';
import CheckBoxItem from './components/CheckBoxItem';
import { useHistory, useParams } from 'react-router-dom';
import { deleteURLSearchParam, isCheckedFilter } from 'utils/helpers';

const mock = [
  {
    title: 'Бренды',
    id: 1,
  },
];

const brands = {
  title: 'Бренды',
  results: [
    {
      id: 21356122131,
      title: 'Samsung',
      count: 10000,
    },
    {
      id: 1263521352,
      title: 'Apple',
      count: 25000,
    },
    {
      id: 121362134123,
      title: 'Xiaomi',
      count: 10000,
    },
    {
      id: 123213621342,
      title: 'OnePlus',
      count: 25000,
    },
    {
      id: 1231236213451,
      title: 'Sony',
      count: 10000,
    },
    {
      id: 216125345621324,
      title: 'Nokia',
      count: 25000,
    },
    {
      id: 124231563214351,
      title: 'Lenovo',
      count: 10000,
    },
    {
      id: 521213563214352,
      title: 'Huawei',
      count: 25000,
    },
    {
      id: 1123215341,
      title: 'Oppo',
      count: 10000,
    },
    {
      id: 13412,
      title: 'Google Pixel',
      count: 25000,
    },
  ],
};

const OptionsDialog = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { open, content } = useSelector(({ modal }) => modal.optionsDialog);
  const categories = useSelector(({ products }) => products.categories.data);
  const [openFilters, setOpenFilters] = useState({ open: false, title: '' });
  const history = useHistory();
  const [search, setSearch] = useState(new URLSearchParams(window.location.search).toString());
  const [features, setFeatures] = useState([]);
  const params = useParams();
  const { categoryIndex, subCategoryIndex, categoryName } = params;

  const [activeMenu, setActiveMenu] = useState('main');

  // TODO REFACTOR THIS SHIIIIIIIIIT

  useEffect(() => {
    if (!open) {
      enableBodyScroll(ref.current);
      return;
    }
    disableBodyScroll(ref.current);
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  useEffect(() => {
    setSearch(new URLSearchParams(window.location.search).toString());
  }, [params]);

  useEffect(() => {
    if (categories) {
      findCategories();
    }
  }, [categories]);

  const handleMoveBack = () => {
    if (openFilters.open) {
      handleCloseFilter();
      return;
    }
    dispatch(setCloseOptionsDialog());
  };

  const getMenuName = () => {
    if (openFilters.open) {
      return openFilters.title;
    }
    if (content === 'filter') {
      return 'Фильтры';
    } else {
      return 'Сортировать';
    }
  };

  const handleOpenFilter = (title, activeMenu, index) => {
    setOpenFilters({ open: true, title, index });
    setActiveMenu(activeMenu);
  };

  const handleCloseFilter = () => {
    setOpenFilters({ open: false, title: '', index: null });
    setActiveMenu('main');
  };

  const hangelChange = (filter) => {
    const query = new URLSearchParams(window.location.search);

    let q = query.get('feature');

    if (!q) {
      q = '';
    }

    if (!filter.checked) {
      q = deleteURLSearchParam(query.toString(), filter.title);
      const last = /feature=(?!.)/gi;
      if (last.test(q)) {
        q = '';
      }
      history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${q}`);
      return;
    } else {
      q += '$' + filter.title;
    }

    query.set('feature', q);

    history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${query.toString()}`);
    // if (!filter.checked) {
    //   const newParams = deleteURLSearchParam(search, filter.title);
    //   history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${newParams}`);
    // } else {
    //   history.push(
    //     `/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${search ? search + '&' : ''}feature=${
    //       filter.title
    //     }`
    //   );
    // }
  };

  const handleDiscard = () => {
    document.querySelectorAll(`[data-filter="${openFilters.title}"]`).forEach((input) => {
      input.checked = false;
    });
    history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}`);
  };

  // const getValueFilter = (title) => {
  //   const filter = filters.find((item) => item.title === title);
  //   console.log(filter);
  //   if (!filter) return false;
  //   return filter.checked;
  // };

  const handleFiltersApply = () => {
    dispatch(setCloseOptionsDialog());
  };

  // TODO REFACTOR THIS SHIT
  const findCategories = () => {
    const first = categories?.find((item) => item.slug === categoryIndex);
    const second = first?.children?.find((item) => item.slug === subCategoryIndex);

    const final = second?.children?.find((item) => item.slug === categoryName);
    console.log(final);
    setFeatures(final?.features);
  };

  const handlePriceChange = (price) => {
    const query = new URLSearchParams(window.location.search);
    query.set('price_from', price[0]);
    query.set('price_to', price[1]);
    history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${query.toString()}`);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <Flex>
            <div onClick={handleMoveBack}>
              <ArrowBackIcon style={{ cursor: 'pointer' }} />
            </div>
            <h2 className={styles.headerTitle}>{getMenuName()}</h2>
          </Flex>
          {content === 'filter' ? (
            <button className={styles.discard} onClick={handleDiscard}>
              <span>Сбросить все</span>
            </button>
          ) : null}
        </header>
        <div className={styles.content}>
          <CSSTransition in={activeMenu === 'main'} classNames="menu-primary" timeout={500} unmountOnExit>
            <div className="menu">
              {content === 'filter' &&
                features?.map((item, index) => (
                  <FilterItem
                    key={item.id}
                    title={item.feature_name}
                    onClick={() => handleOpenFilter(item.title, 'filters', index)}
                  />
                ))}
              {content === 'filter' && (
                <div className={styles.price}>
                  <PriceFilter divider={false} className={styles.title} onChange={handlePriceChange} />
                </div>
              )}
            </div>
          </CSSTransition>
          <CSSTransition in={activeMenu === 'filters'} classNames="menu-secondary" timeout={500} unmountOnExit>
            <div className="menu">
              {features.length > 0 &&
                features[openFilters?.index]?.values?.map((item) => (
                  <CheckBoxItem
                    item={item}
                    key={item.id}
                    filterName={openFilters.title}
                    value={item.value}
                    onChange={hangelChange}
                    checked={isCheckedFilter(item.value, search)}
                  />
                ))}
            </div>
          </CSSTransition>
        </div>
        <footer
          className={styles.footer}
          style={{
            backgroundColor: openFilters.open ? '#D4DAEC' : ' #8193EC',
            color: openFilters.open ? '#231E5A' : '#fff',
          }}
          onClick={handleFiltersApply}
        >
          {openFilters.open ? 'Применить' : 'Показать'}
        </footer>
      </div>
    </div>
  );
};

export default OptionsDialog;
