module.exports = {
  purge: [
    './pages/**/*.js',
    './pages/**/*.jsx',
    './components/**/*.js',
    './components/**/*.jsx',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};