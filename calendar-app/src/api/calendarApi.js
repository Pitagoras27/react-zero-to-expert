import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVaribles';

const { VITE_BASE_API_CALENDAR } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_BASE_API_CALENDAR
});

export default calendarApi;
