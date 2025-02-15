export default {
  extends: 'stylelint-config-standard',
  rules: {
    'import-notation': 'string',
    'at-rule-no-deprecated': null,
    'at-rule-empty-line-before': null,
    'rule-empty-line-before': 'never-multi-line',
    'selector-class-pattern': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['custom-variant', 'apply', 'variants', 'screen', 'reference', 'theme'],
      },
    ],
  },
};
