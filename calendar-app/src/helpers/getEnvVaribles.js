export const getEnvVariables = () => {

  return {
    VITE_MODE: import.meta.env.VITE_MODE,
    VITE_BASE_API_CALENDAR: import.meta.env.VITE_BASE_API_CALENDAR
  }
}