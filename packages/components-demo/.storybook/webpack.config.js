const path = require('path');

module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      {
        test: /\.svg$/,
        issuer: {
          test: /\.jsx?$/
        },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  { removeDimensions: true },
                  { removeUselessStrokeAndFill: true },
                  { removeViewBox: false }
                ]
              }
            }
          }
        ]
      },
      ...config.module
        .rules /*.map((rule) => ({
        ...rule,
        test: new RegExp(rule.test.toString().replace(/svg\|/, ''))
      }))*/
    ]
  }
});
