export const getEnvironmentVariable = (name: string) => {
  const environment = process.env.NODE_ENV;

  if (environment === 'development') {
    return process.env[name];
  } else {
    return JSON.parse(process.env[name]);
  }
};
