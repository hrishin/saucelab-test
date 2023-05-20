module.exports = {
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: 'raw-loader',
      },
    ],
  },
};
