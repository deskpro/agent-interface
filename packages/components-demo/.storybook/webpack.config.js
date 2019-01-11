const path = require('path');

module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.module.rules = storybookBaseConfig.module.rules.concat([
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre'
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    },
    {
      test: /\.svg$/,
      use: [
        'babel-loader',
        {
          loader: 'react-svg-loader',
          options: {
            svgo: {
              plugins: [
                { removeDimensions: true, removeUselessStrokeAndFill: true }
              ]
            }
          }
        }
      ]
    }
  ]);

  return storybookBaseConfig;
};
