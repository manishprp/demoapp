import apiClient from './client';

const categoriesEndpoint = 'products/categories';
const productEndpoint = 'products/category/';

const getCategories = () => apiClient.get(categoriesEndpoint);
const getProductList = category => apiClient.get(productEndpoint + category);

export default {getCategories, getProductList};
