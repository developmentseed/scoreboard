require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const { APP_URL_FINAL } = require('./api/src/config')

module.exports = withImages(withSass(withCss({
  publicRuntimeConfig: {
    env: process.env.NODE_ENV || 'development'
  },
  sassLoaderOptions: { data: `$appUrlFinal: "${APP_URL_FINAL}";` },
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })

    return config
  }
})))
