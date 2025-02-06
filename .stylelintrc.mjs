export default {
  extends: 'stylelint-config-standard',
  rules: {
    'import-notation': 'string',
    'at-rule-no-deprecated': null,
    'at-rule-empty-line-before': null,
    'selector-class-pattern': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['custom-variant', 'apply', 'variants', 'screen'],
      },
    ],
  },
};
