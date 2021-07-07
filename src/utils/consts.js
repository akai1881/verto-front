/*<==================== API ====================> */
export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

/*<==================== PUBLIC ROUTES ====================> */
export const HOME_ROUTE = '/';

export const GOODS_ROUTE =
  '/goods/:categoryIndex/:subCategoryIndex/:categoryName';

export const LOGIN_ROUTE = '/login';

export const REGISTER_ROUTE = '/register';

export const COMPANY_REGISTER = '/register/company';

/*<==================== PHONE VALIDATION REGEX ====================> */

export const PHONE_REGEX =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi;
