import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVaribles';

const { VITE_BASE_API_CALENDAR } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_BASE_API_CALENDAR
});

calendarApi.interceptors.request.use( config => {
  config.headers = {
    ...config.headers, 
    'x-token': localStorage.getItem('token')
  }
  return config
});

export default calendarApi;
