/*<==================== API ====================> */
export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

/*<==================== PUBLIC ROUTES ====================> */
export const HOME_ROUTE = '/';

export const GOODS_ROUTE = '/goods/:categoryIndex/:subCategoryIndex/:categoryName';

export const LOGIN_ROUTE = '/login';

export const REGISTER_ROUTE = '/register';

export const COMPANY_REGISTER = '/register/company';

export const PRODUCT_DETAILS = '/product/:productId';

export const CART_ROUTE = '/cart';

/*<==================== PHONE VALIDATION REGEX ====================> */

export const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi;

/*<==================== DEVICE SIZING ====================> */

export const deviceSize = {
  laptop: 992,
  mobile: 768,
  smallMobile: 576,
};

/*<==================== ACTIONS ====================> */

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

/*<==================== KEY PRESS ACTIONS ====================> */

export const INCREASE_KEY = 'ArrowUp';
export const DECREASE_KEY = 'ArrowDown';

export const QUANTITY_LIMIT = 10000000;

export const DISACTIVE_COLOR_HEX = '#D4DAEC';
export const ACTIVE_COLOR_HEX = '#231E5A';
