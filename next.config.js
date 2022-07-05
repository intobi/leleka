/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    EMAIL: process.env.EMAIL,
    PASSWORD_EMAIL: process.env.PASSWORD_EMAIL,
    TO_EMAIL: process.env.TO_EMAIL
  }
}

module.exports = nextConfig
