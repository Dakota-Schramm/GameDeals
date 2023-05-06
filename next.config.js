require('dotenv').config();

module.exports = {
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
  experimental: {
    appDir: true,
  },
};
