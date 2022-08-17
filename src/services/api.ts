import axios from 'axios';

export const Api = axios.create({
  baseURL: `${
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_STRAPI_ENDPOINT_LOCAL
      : process.env.NEXT_PUBLIC_STRAPI_ENDPOINT_PROD
  }`
});

export const LocalApi = axios.create({
  baseURL: `/api`
});
