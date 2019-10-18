module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  rules: {
    'prettier/prettier': [true, { severity: 'warning' }],
  },
};
