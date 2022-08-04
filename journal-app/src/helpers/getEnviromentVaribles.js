export const getEnviromentVaribles = () => {
  import.meta.env;

  return {
    ...import.meta.env,
  };
};
