'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  options: {
    entry: {
      application: './index.js',
      vendor: ['jquery']
    },

    output: {
      filename: '[name].js',
      path: path.join(__dirname, '/../public'),
      publicPath: 'public/'
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env']
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader?url=false' }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('autoprefixer')
                  ]
                }
              }
            }, {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, './node_modules'),
                  path.resolve(__dirname, './assets/styles/foundation-icons/*'),
                  path.resolve(__dirname, './node_modules/devicon/*')
                ]
              }
            }]
        },
        {
          test: /\.woff[\d]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg|png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(hbs|handlebars)$/,
          loader: 'handlebars-loader',
          query: {
            helperDirs: [
              path.join(__dirname, '/../assets/scripts/templates/helpers')
            ]
          }
        }
      ]
      // loaders: [
      //   // the url-loader uses DataUrls.
      //   // the file-loader emits files.
      //   { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      //   { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
      // ]
    },

    resolve: {
      alias: {
        handlebars: 'handlebars/dist/handlebars.js'
      }
    },
    stats: {
      colors: true,
      modules: true,
      reasons: true
    }
  },

  build: {
    failOnError: true,
    watch: false,
    keepalive: false
  }
}
