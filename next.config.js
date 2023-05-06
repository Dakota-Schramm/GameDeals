require('dotenv').config();

module.exports = {
  env: {
    environment: process.env.environment,
  },
  experimental: {
    appDir: true,
  },
};
