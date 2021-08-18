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

export const ABOUT_US_ROUTE = '/about-us';

export const NEWS_ROUTE = '/news';

export const REVIEWS_ROUTE = '/reviews';

export const CONTACTS_ROUTE ='/contacts';

/*<==================== PHONE VALIDATION REGEX ====================> */

export const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi;

/*<==================== DEVICE SIZING ====================> */

export const deviceSize = {
  mobile: 768,
  smallMobile: 576,
  laptop: 992,
};
